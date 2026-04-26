# Technology Docs

This folder defines how the product decisions become an implementable technical platform.

The goal is to keep the first implementation professional without over-engineering the pilot. Product documents explain what the platform must do; technology documents explain how the backend, data ownership, messaging, and service boundaries should be shaped.

## Reference Standards

The first technology baseline is intentionally aligned with the standards observed in `/Users/benanaktas/project/mindocean`:

- Quarkus service-per-folder backend style
- Java 21 and Maven
- gateway, core service, support service, and consumer service taxonomy
- PostgreSQL as the primary source of truth
- PgBouncer for database pooling
- Flyway migrations per service
- service-specific database users and least privilege access
- Kafka for asynchronous integration
- transactional outbox for database plus Kafka consistency
- dash-separated Kafka topic names with `-dlq` dead-letter topics
- Redis for cache, rate limiting, session-like state, and hot lookups
- search index as an optional scale step, not a Phase 1 blocker
- SmallRye OpenAPI, JWT, Health, and Micrometer Prometheus endpoints
- structured logging with correlation and trace identifiers

## Reading Order

1. [Mindocean Standards Applied to Community](mindocean-standards.md)
2. [Phase 1 Microservice Boundaries](phase-1-microservices.md)

## Technology Principles

- Product memory is a first-class feature, so content, knowledge, attachments, and search must be modeled intentionally.
- Every service owns its data. Cross-service database joins are not allowed.
- Phase 1 can use fewer deployables where that reduces risk, but logical boundaries must be clear from day one.
- User trust and moderation are platform capabilities, not afterthoughts.
- Ads are user-controlled. Delivery must respect each user's ad visibility preference.
- Approvals must be auditable wherever business risk exists.
- Events must be reliable and replayable enough to support future search, analytics, notifications, and AI summarization.

## Relationship to Product Docs

Product source of truth:

- [Product Docs](../product/README.md)
- [Phase 1 Domain Model](../product/phase-1/phase-1-domain-model.md)
- [Phase 1 C4 Diagrams](../product/phase-1/phase-1-c4.md)

Technology source of truth starts here and should stay consistent with the Phase 1 domain model.

## Current Technology Decision

Phase 1 should be implemented as a modular microservice platform with strong boundaries, but it should not split every feature into a separate service too early.

Recommended stance:

- define logical bounded contexts now
- implement Phase 1 as a small set of deployable services
- use events and service-owned schemas from the beginning
- postpone billing, AI, advanced analytics, and real-time chat services until the product proves usage
