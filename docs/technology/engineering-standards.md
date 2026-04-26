# Community Platform — Engineering Standards

## Purpose

This document defines the engineering standards for the Community platform backend.

These conventions are established for this project and apply to every service in the `api/` folder.

---

## Backend Stack

| Concern | Choice | Notes |
| --- | --- | --- |
| Language | Java 21 LTS | Use record types, sealed classes, and pattern matching where appropriate |
| Framework | Quarkus 3.x | Native compilation supported but not required in Phase 1 |
| Build | Maven | One `pom.xml` per service; shared BOM in `shared-kernel` |
| REST | JAX-RS + JSON-B | SmallRye OpenAPI for contract generation |
| ORM | Hibernate ORM with Panache | Reactive Panache only where async I/O is genuinely needed |
| Migrations | Flyway | Per-service, forward-only |
| Auth | SmallRye JWT | Gateway validates; services trust propagated user context |
| Messaging | SmallRye Reactive Messaging | Kafka as the broker |
| Observability | Micrometer + Prometheus | Every service exposes `/q/metrics` |
| Health | SmallRye Health | Every service exposes `/q/health`, `/q/health/live`, `/q/health/ready` |
| API docs | SmallRye OpenAPI | `/q/openapi` and `/q/swagger-ui` enabled in non-production |

---

## Service Taxonomy

Every service in this platform belongs to one of these types:

| Type | Responsibility |
| --- | --- |
| `Gateway` | Request entry, JWT validation, routing, rate limiting, user context propagation |
| `Core service` | Owns a business domain and its source-of-truth data |
| `Support service` | Provides cross-cutting capabilities: notifications, search, ops workflows |
| `Consumer service` | Reacts to Kafka events; builds projections, analytics, or side effects |
| `Orchestration service` | Coordinates long-running stateful workflows — avoid in Phase 1 |

---

## Runtime Topology

```
Client
  └─► auth-gateway          (JWT validation, rate limiting, routing)
        ├─► identity-service
        ├─► community-service
        ├─► content-service
        ├─► knowledge-service
        ├─► search-service
        ├─► trust-ops-service
        ├─► ads-service
        └─► notification-service

PostgreSQL  ◄── each service owns its schema/database
PgBouncer   ◄── sits between services and PostgreSQL
Kafka       ◄── domain events between services
Redis       ◄── rate limits, hot permission snapshots, caches
```

---

## Database Standard

PostgreSQL is the primary source of truth for all services.

Rules:

- each service owns its own schema or database — never shared tables
- each service has a dedicated runtime database user
- a separate `co_migration` user applies Flyway migrations
- services must not write directly to another service's tables
- cross-service foreign keys are not allowed
- cross-service reads happen through APIs, Kafka events, projections, or search indexes
- PgBouncer sits between every service and PostgreSQL

### Database users

| User | Service |
| --- | --- |
| `co_identity` | identity-service |
| `co_community` | community-service |
| `co_content` | content-service |
| `co_knowledge` | knowledge-service |
| `co_trust_ops` | trust-ops-service |
| `co_ads` | ads-service |
| `co_notification` | notification-service |
| `co_search` | search-service |
| `co_migration` | Flyway migrations only |

---

## Migration Standard

- Flyway migrations live inside the owning service under `src/main/resources/db/migration/`
- Migrations are forward-only; no rollback scripts
- Each migration file follows the naming convention: `V{version}__{description}.sql`
- Source-of-truth tables are owned by exactly one service
- Projection tables may be rebuilt from events

---

## Kafka Standard

### Topic naming

```
{domain}-{entity}-{action}
```

Examples:

```
identity-user-created
community-membership-created
content-thread-created
knowledge-resource-published
moderation-report-submitted
ads-ad-approved
notification-send-requested
```

### Dead-letter topics

Every consumed topic must have a matching DLQ:

```
content-thread-created-dlq
ads-ad-approved-dlq
```

### Rules

- topic names use dashes only — no dots in application topics
- entity names are singular
- DLQ serialization must match the source topic's serializer/deserializer pair
- all consumers must be idempotent
- manually handled DLQ failures must be acknowledged to avoid infinite retry loops

---

## Transactional Outbox Standard

Any service that changes source-of-truth data and publishes Kafka events must use a transactional outbox.

Write domain data and the outbox record in the same database transaction. Publish from the outbox asynchronously.

### Minimum outbox record fields

| Field | Purpose |
| --- | --- |
| `eventId` | Unique event identifier |
| `aggregateType` | Entity type (e.g. `Thread`) |
| `aggregateId` | Entity ID |
| `eventType` | Event name (e.g. `content-thread-created`) |
| `topic` | Target Kafka topic |
| `partitionKey` | Routing key (usually aggregate ID) |
| `payload` | JSON event body |
| `headers` | Propagated trace and correlation headers |
| `status` | `PENDING`, `PUBLISHED`, `FAILED` |
| `retryCount` | Current retry attempt |
| `maxRetries` | Retry limit before DLQ |
| `traceId` | Distributed trace ID |
| `correlationId` | Business correlation ID |
| `createdBy` | User or system that triggered the event |
| `createdAt` | Record creation timestamp |
| `publishedAt` | Successful publish timestamp |
| `nextRetryAt` | Next scheduled retry timestamp |

### Rules

- retry failed publishes with bounded attempts
- preserve `correlationId` and `traceId` across service boundaries
- design consumers so duplicate delivery is safe (idempotency key or upsert)

---

## Redis Standard

Use Redis for:

- gateway rate limiting
- short-lived auth or session-adjacent state
- hot permission snapshots (membership, viewer-mode status)
- ad preference cache
- duplicate-post prevention keys
- feed and search response caching where safe
- idempotency keys for outbox consumers

Do not use Redis as a primary search engine or source of truth.

---

## Search Standard

Phase 1 search starts with PostgreSQL full-text or trigram search over service projections.

The `search-service` boundary must be maintained so the implementation can move to Elasticsearch or OpenSearch without changing the client API contract.

Search must cover:

- threads (title, body snippets)
- resources (title, body, tags)
- attachment and shared link metadata
- help request and listing template fields
- ads metadata — only when the user's `showAds` preference is `true`

---

## Security Standard

### Gateway responsibilities

- validate JWT on every request
- apply per-user and per-IP rate limits
- propagate `X-User-Id`, `X-Community-Id`, `X-Correlation-Id` headers
- block unauthenticated access to protected routes
- enforce coarse route-level access (e.g. admin routes require admin role claim)

### Service responsibilities

- enforce domain-level authorization (membership, role, scope)
- verify active membership before allowing writes
- check viewer-mode penalty before allowing create/reply/comment/ad actions
- audit sensitive decisions (moderation, approvals, role changes)

---

## Observability Standard

Every service must expose:

| Endpoint | Purpose |
| --- | --- |
| `/q/health` | Combined health |
| `/q/health/live` | Liveness probe |
| `/q/health/ready` | Readiness probe |
| `/q/metrics` | Prometheus metrics |
| `/q/openapi` | OpenAPI spec (non-production) |
| `/q/swagger-ui` | Swagger UI (non-production) |

### Structured log fields

Every log line must include:

- `traceId`
- `correlationId`
- `userId` (when available)
- `communityId` or `groupId` (when relevant)
- request path and HTTP status

---

## Configuration Standard

Each service `application.properties` must define:

```properties
quarkus.application.name=<service-name>

# Database
quarkus.datasource.jdbc.url=${DB_URL}
quarkus.datasource.username=${DB_USER}
quarkus.datasource.password=${DB_PASSWORD}

# Kafka
kafka.bootstrap.servers=${KAFKA_BOOTSTRAP_SERVERS}

# Redis (only when used)
quarkus.redis.hosts=${REDIS_URL}

# OpenAPI (disable in production)
quarkus.swagger-ui.always-include=false
quarkus.smallrye-openapi.enable=true
```

All secrets must come from environment variables — never hardcoded.

---

## Phase 1 Simplification Rules

To keep Phase 1 manageable:

- do not introduce workflow orchestration (e.g. Temporal) unless approvals or moderation become genuinely long-running and stateful
- do not introduce billing infrastructure before paid ads are validated
- do not introduce AI services before the curated knowledge loop is working
- do not build real-time chat before async threads prove retention
- do not split media processing into a separate service unless uploads become heavy
