# Mindocean Standards Applied to Community

## Purpose

This document records which engineering standards should be reused from the Mindocean codebase and how they apply to the Community product.

The intent is not to copy Mindocean domain logic. The intent is to reuse proven platform conventions so this product starts with a professional technical foundation.

## Source Standards Reviewed

The standards below were derived from these Mindocean areas:

- `/Users/benanaktas/project/mindocean/docs/infrastructure/SERVICE_INVENTORY.md`
- `/Users/benanaktas/project/mindocean/docs/infrastructure/SYSTEM_TOPOLOGY.md`
- `/Users/benanaktas/project/mindocean/docs/architecture/transactional-outbox-pattern.md`
- `/Users/benanaktas/project/mindocean/docs/kafka/kafka-topic-dlq-standard.md`
- `/Users/benanaktas/project/mindocean/docs/database/DATABASE_USER_SEPARATION_ROLLOUT.md`
- `/Users/benanaktas/project/mindocean/docs/redis/redis-cache-decision.md`
- `/Users/benanaktas/project/mindocean/api/customer-service/pom.xml`
- `/Users/benanaktas/project/mindocean/api/customer-service/src/main/resources/application.properties`

## Backend Standard

Use the same backend family as Mindocean:

- Java 25
- Quarkus 3.x
- Maven
- REST JSON APIs
- Hibernate Reactive Panache where reactive database access is valuable
- Flyway migrations
- SmallRye OpenAPI
- SmallRye JWT
- SmallRye Health
- Micrometer Prometheus
- SmallRye Reactive Messaging with Kafka
- Redis client and cache support where needed

## Service Taxonomy

Use the Mindocean service classification model:

- `Gateway`: request entry, JWT validation, routing, rate limiting, user context propagation
- `Core service`: owns a business domain and source-of-truth data
- `Support service`: provides cross-cutting capabilities such as notifications, search, and ops workflows
- `Consumer service`: reacts to Kafka events and builds projections, analytics, or side effects
- `Orchestration service`: coordinates long-running workflows only when the workflow complexity justifies it

Community should avoid introducing orchestration services in Phase 1 unless a workflow is truly long-running and stateful.

## Runtime Topology

Adopt this topology shape:

1. client application calls the gateway
2. gateway validates authentication and forwards requests
3. backend services own domain APIs
4. PostgreSQL stores source-of-truth data
5. Kafka carries domain events
6. Redis handles cache, rate limits, and hot authorization snapshots
7. search index is added when DB-backed search is no longer enough
8. Prometheus and Grafana observe health and metrics

## Database Standard

PostgreSQL is the primary source of truth.

Rules:

- each service owns its schema or database
- each service has a dedicated database user
- a separate migration user applies Flyway migrations
- services do not write directly to another service's tables
- cross-service foreign keys are not allowed
- cross-service reads happen through APIs, events, projections, or search indexes
- PgBouncer should sit between services and PostgreSQL

Suggested database users:

- `co_identity`
- `co_community`
- `co_content`
- `co_knowledge`
- `co_trust_ops`
- `co_ads`
- `co_notification`
- `co_search`
- `co_migration`

## Migration Standard

Use Flyway per service.

Rules:

- migrations live with the owning service
- migrations are forward-only
- source-of-truth tables are owned by exactly one service
- projections may be rebuilt from events where possible

## Kafka Standard

Use dash-separated topic names:

```text
{domain}-{entity}-{action}
```

Examples:

- `identity-user-created`
- `community-membership-created`
- `content-thread-created`
- `knowledge-resource-published`
- `moderation-report-submitted`
- `ads-ad-approved`
- `notification-send-requested`

Dead-letter topics use the `-dlq` suffix:

- `content-thread-created-dlq`
- `ads-ad-approved-dlq`

Rules:

- no dot-separated application topics
- entity names should be singular
- DLQ serialization must match the incoming message serializer/deserializer pair
- consumers must be idempotent
- manually handled DLQ failures should be acknowledged to avoid infinite retry loops

## Transactional Outbox Standard

Any service that changes source-of-truth data and publishes Kafka events must use a transactional outbox.

Minimum event metadata:

- `eventId`
- `aggregateType`
- `aggregateId`
- `eventType`
- `topic`
- `partitionKey`
- `payload`
- `headers`
- `status`
- `retryCount`
- `maxRetries`
- `traceId`
- `correlationId`
- `createdBy`
- `createdAt`
- `publishedAt`
- `nextRetryAt`

Rules:

- write domain data and outbox event in the same database transaction
- publish from the outbox asynchronously
- retry failed publishes with bounded attempts
- preserve correlation IDs across services
- design consumers so duplicate events are safe

## Redis Standard

Use Redis for:

- gateway rate limiting
- short-lived auth or session-adjacent state if required
- hot permission snapshots
- ad preference cache
- duplicate-post prevention keys
- feed/search response caching where safe
- idempotency keys

Do not use Redis as the primary search engine.

## Search Standard

Phase 1 search can start with PostgreSQL-backed keyword search if the data size is small.

However, the architecture should keep a `search-service` boundary so the implementation can move to Elasticsearch or OpenSearch later without changing the client contract.

Search should cover:

- threads
- posts when needed for snippets
- resources
- attachments and shared links metadata
- ads metadata when ads are searchable; query and delivery APIs must filter ads out when the user disables ad visibility

## Security Standard

Gateway responsibilities:

- validate JWT
- apply rate limits
- propagate user context headers
- block unauthenticated access to protected APIs
- enforce coarse route access

Service responsibilities:

- enforce domain-level authorization
- verify scoped membership and role permissions
- respect viewer-mode penalties before allowing writes
- audit sensitive decisions

## Observability Standard

Every service should expose:

- `/q/health`
- `/q/health/live`
- `/q/health/ready`
- `/q/metrics`
- `/q/openapi`
- `/q/swagger-ui`

Logging should include:

- `traceId`
- `correlationId`
- `userId` when available
- `communityId` or `groupId` when relevant
- request path and status

## Configuration Standard

Each service should have:

- service name via `quarkus.application.name`
- environment-driven database URL and credentials
- Kafka bootstrap server configuration
- Redis host configuration only when used
- OpenAPI enabled in non-production environments
- health and metrics enabled in all environments

## Phase 1 Simplification Rules

To keep Phase 1 manageable:

- do not introduce Temporal unless approvals or moderation become long-running workflows
- do not introduce billing infrastructure before paid ads are validated
- do not introduce AI services before the curated knowledge loop is working
- do not build real-time chat before async threads prove retention
- do not split media processing into a separate service unless uploads become heavy
