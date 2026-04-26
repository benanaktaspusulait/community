# Technology Docs

This folder defines how the product decisions become an implementable technical platform.

The goal is to keep the first implementation professional without over-engineering the pilot. Product documents explain what the platform must do; technology documents explain how the backend, data ownership, messaging, and service boundaries should be shaped.

## Technology Standards

The Community platform is built on the following proven conventions:

- Quarkus service-per-folder backend style
- Java 21 LTS and Maven
- Gateway, Core service, Support service, and Consumer service taxonomy
- PostgreSQL as the primary source of truth
- PgBouncer for database connection pooling
- Flyway migrations per service
- Service-specific database users with least-privilege access
- Kafka for asynchronous integration between services
- Transactional outbox for database + Kafka consistency
- Dash-separated Kafka topic names with `-dlq` dead-letter topics
- Redis for cache, rate limiting, session-adjacent state, and hot lookups
- Search index as an optional scale step, not a Phase 1 blocker
- SmallRye OpenAPI, JWT, Health, and Micrometer Prometheus endpoints
- Structured logging with correlation and trace identifiers

## Reading Order

1. [Engineering Standards](engineering-standards.md)
2. [Phase 1 Microservice Boundaries](phase-1-microservices.md)

## Technology Principles

- Product memory is a first-class feature; content, knowledge, attachments, and search must be modeled intentionally.
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

Technology source of truth starts here and must stay consistent with the Phase 1 domain model.

## Current Technology Decision

Phase 1 should be implemented as a modular microservice platform with strong boundaries, but it should not split every feature into a separate service too early.

Recommended stance:

- define logical bounded contexts now
- implement Phase 1 as a small set of deployable services
- use events and service-owned schemas from the beginning
- postpone billing, AI, advanced analytics, and real-time chat services until the product proves usage
