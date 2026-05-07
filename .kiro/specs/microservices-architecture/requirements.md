# Requirements Document: Java 25 Microservices Architecture

## Introduction

This document specifies the functional and non-functional requirements for a microservices-based community platform built with Java 25. The system replaces scattered messaging groups with structured, searchable community spaces, implementing database-per-service pattern with event-driven communication.

## Glossary

- **System**: The complete microservices platform including all services, gateway, and infrastructure
- **Auth_Gateway**: API gateway service responsible for JWT validation, routing, and rate limiting
- **Identity_Service**: Core service managing user profiles, preferences, and location data
- **Community_Service**: Core service managing communities, groups, memberships, and invitations
- **Content_Service**: Core service managing threads, posts, and discussions
- **Knowledge_Service**: Core service managing curated resources and solutions
- **Search_Service**: Support service providing unified search across content
- **Trust_Ops_Service**: Core service managing reports, moderation, and approvals
- **Ads_Service**: Core service managing user-submitted advertisements
- **Notification_Service**: Support service managing in-app and push notifications
- **Domain_Event**: An immutable record of a state change in a bounded context
- **Transactional_Outbox**: Pattern ensuring atomic writes to database and event publication
- **Active_Membership**: A membership with status ACTIVE in a group
- **Viewer_Mode**: A moderation penalty preventing content creation actions
- **Bounded_Context**: A logical boundary within which a domain model is defined
- **Correlation_ID**: Unique identifier tracking a request across service boundaries
- **Trace_ID**: Unique identifier for distributed tracing
- **Idempotency_Key**: Unique identifier ensuring duplicate event processing is safe

## Requirements

### Requirement 1: Service Architecture

**User Story:** As a system architect, I want each service to own its bounded context with dedicated database, so that services are loosely coupled and independently deployable.

#### Acceptance Criteria

1. THE System SHALL implement nine distinct services: auth-gateway, identity-service, community-service, content-service, knowledge-service, search-service, trust-ops-service, ads-service, and notification-service
2. THE System SHALL provision a dedicated PostgreSQL database for each service except auth-gateway
3. WHEN a service needs data from another service THEN the System SHALL use either synchronous REST calls or asynchronous event consumption, never direct database access
4. THE System SHALL ensure no database schema is shared between services
5. THE System SHALL provision a dedicated database user per service with access only to that service's database

### Requirement 2: API Gateway

**User Story:** As a client application, I want a single entry point for all API requests, so that I have consistent authentication, routing, and rate limiting.

#### Acceptance Criteria

1. THE Auth_Gateway SHALL validate JWT tokens for all incoming requests
2. WHEN a request lacks a valid JWT token THEN the Auth_Gateway SHALL return HTTP 401 Unauthorized
3. THE Auth_Gateway SHALL route validated requests to appropriate backend services
4. THE Auth_Gateway SHALL enforce rate limits per user
5. WHEN a user exceeds rate limits THEN the Auth_Gateway SHALL return HTTP 429 Too Many Requests
6. THE Auth_Gateway SHALL propagate X-User-Id, X-Community-Id, X-Correlation-Id, and X-Trace-Id headers to backend services
7. THE Auth_Gateway SHALL use Redis for rate limit tracking

### Requirement 3: User Identity Management

**User Story:** As a user, I want to create and manage my profile with location and preferences, so that I can participate in location-based communities.

#### Acceptance Criteria

1. WHEN a user creates a profile THEN the Identity_Service SHALL store display name, phone number, base location, location visibility, and notification preferences
2. THE Identity_Service SHALL ensure phone numbers are unique across all users
3. WHEN a user updates their location THEN the Identity_Service SHALL validate latitude and longitude values
4. THE Identity_Service SHALL support three location visibility modes: PRIVATE, CITY_ONLY, and FULL
5. WHEN a user updates preferences THEN the Identity_Service SHALL persist changes immediately
6. THE Identity_Service SHALL publish an identity-user-created event when a new user profile is created

### Requirement 4: Community and Group Management

**User Story:** As a community administrator, I want to create communities and groups with hierarchical structure, so that I can organize users by location and interest.

#### Acceptance Criteria

1. WHEN a platform admin creates a community THEN the Community_Service SHALL store community name, description, creator ID, and creation timestamp
2. WHEN a community admin creates a group THEN the Community_Service SHALL validate the parent community exists
3. THE Community_Service SHALL support group types: LOCATION_BASED, INTEREST_BASED, and HYBRID
4. WHEN a group is created with location THEN the Community_Service SHALL store latitude, longitude, city, and country
5. THE Community_Service SHALL publish a community-membership-created event when a user joins a group
6. THE Community_Service SHALL ensure a user cannot have multiple active memberships in the same group

### Requirement 5: Invitation System

**User Story:** As a group administrator, I want to create invite codes with expiration and usage limits, so that I can control group membership growth.

#### Acceptance Criteria

1. WHEN a group admin creates an invite THEN the Community_Service SHALL generate a unique invite code
2. THE Community_Service SHALL support invite expiration dates
3. THE Community_Service SHALL support maximum usage limits per invite
4. WHEN a user joins via invite code THEN the Community_Service SHALL validate the code is not expired and usage limit is not exceeded
5. WHEN an invite reaches maximum usage THEN the Community_Service SHALL mark it as exhausted
6. WHEN an invite expires THEN the Community_Service SHALL reject join attempts with that code

### Requirement 6: Membership Management

**User Story:** As a user, I want to join and leave groups, so that I can participate in communities relevant to me.

#### Acceptance Criteria

1. WHEN a user joins a group THEN the Community_Service SHALL create a membership with status ACTIVE
2. WHEN a user leaves a group THEN the Community_Service SHALL update membership status to LEFT and record the leave timestamp
3. THE Community_Service SHALL ensure only users with ACTIVE membership can access group content
4. WHEN checking membership status THEN the Community_Service SHALL return results within 100ms for cached checks
5. THE Community_Service SHALL cache active membership status in Redis with 5-minute TTL

### Requirement 7: Role-Based Access Control

**User Story:** As a system administrator, I want to assign scoped roles to users, so that I can delegate administrative responsibilities at platform, community, and group levels.

#### Acceptance Criteria

1. THE Community_Service SHALL support five roles: PLATFORM_ADMIN, COMMUNITY_ADMIN, GROUP_ADMIN, MODERATOR, and CREATOR
2. THE Community_Service SHALL support three scope types: PLATFORM, COMMUNITY, and GROUP
3. WHEN assigning a role THEN the Community_Service SHALL validate the scope ID exists
4. WHEN a user has COMMUNITY_ADMIN role THEN the System SHALL allow community-level operations only within that community scope
5. WHEN a user has GROUP_ADMIN role THEN the System SHALL allow group-level operations only within that group scope
6. THE Community_Service SHALL record who assigned each role and when

### Requirement 8: Thread Creation and Management

**User Story:** As a group member, I want to create discussion threads, so that I can start conversations and ask questions.

#### Acceptance Criteria

1. WHEN a user creates a thread THEN the Content_Service SHALL validate the user has active membership in the target group
2. WHEN a user has viewer mode penalty THEN the Content_Service SHALL reject thread creation attempts
3. THE Content_Service SHALL support five thread types: DISCUSSION, QUESTION, HELP_REQUEST, LISTING, and SERVICE_OFFER
4. WHEN a thread is created THEN the Content_Service SHALL validate title length is between 1 and 200 characters
5. THE Content_Service SHALL strip leading and trailing whitespace from title and body
6. WHEN a thread is created THEN the Content_Service SHALL publish a content-thread-created event
7. THE Content_Service SHALL support three thread statuses: OPEN, CLOSED, and REMOVED

### Requirement 9: Thread Replies

**User Story:** As a group member, I want to reply to threads, so that I can participate in discussions.

#### Acceptance Criteria

1. WHEN a user replies to a thread THEN the Content_Service SHALL validate the user has active membership in the thread's group
2. WHEN a user has viewer mode penalty THEN the Content_Service SHALL reject reply attempts
3. WHEN a thread status is CLOSED THEN the Content_Service SHALL reject new replies
4. WHEN a thread status is REMOVED THEN the Content_Service SHALL reject new replies
5. THE Content_Service SHALL validate reply body is not empty after stripping whitespace
6. WHEN a reply is created THEN the Content_Service SHALL update the thread's last activity timestamp

### Requirement 10: Thread Closure

**User Story:** As a thread author or moderator, I want to close threads, so that I can prevent further replies when discussion is complete.

#### Acceptance Criteria

1. WHEN a user closes a thread THEN the Content_Service SHALL validate the user is either the thread author or has MODERATOR role in the group
2. WHEN a thread is closed THEN the Content_Service SHALL update status to CLOSED and record closure timestamp and closer ID
3. WHEN a closed thread is reopened THEN the Content_Service SHALL update status to OPEN and clear closure metadata
4. THE Content_Service SHALL allow viewing closed threads by all group members

### Requirement 11: Content Moderation

**User Story:** As a moderator, I want to apply moderation actions to users, so that I can enforce community guidelines.

#### Acceptance Criteria

1. WHEN a moderator applies viewer mode THEN the Trust_Ops_Service SHALL record the action with target user, scope, duration, and reason
2. WHEN a user has active viewer mode in a group THEN the Content_Service SHALL reject all content creation attempts in that group
3. THE Trust_Ops_Service SHALL support expiration timestamps for moderation actions
4. WHEN a moderation action expires THEN the System SHALL automatically restore user permissions
5. THE Trust_Ops_Service SHALL publish a moderation-action-applied event when an action is taken
6. WHEN checking moderation status THEN the Trust_Ops_Service SHALL return results within 100ms

### Requirement 12: Knowledge Resource Management

**User Story:** As a group moderator, I want to curate valuable content into knowledge resources, so that important information is easily discoverable.

#### Acceptance Criteria

1. WHEN a moderator publishes a resource THEN the Knowledge_Service SHALL validate the moderator has MODERATOR role in the target group
2. THE Knowledge_Service SHALL support linking multiple source threads to a single resource
3. WHEN a resource is published THEN the Knowledge_Service SHALL publish a knowledge-resource-published event
4. THE Knowledge_Service SHALL store resource title, description, source thread IDs, and publisher ID
5. THE Knowledge_Service SHALL allow only moderators and admins to edit published resources

### Requirement 13: Unified Search

**User Story:** As a user, I want to search across threads, resources, and ads, so that I can find relevant content quickly.

#### Acceptance Criteria

1. WHEN a user searches THEN the Search_Service SHALL return results from threads, resources, and ads
2. THE Search_Service SHALL filter results to only include content from groups where the user has active membership
3. WHEN search results are returned THEN the Search_Service SHALL deduplicate identical results
4. THE Search_Service SHALL limit search results to 20 items per category
5. WHEN the Search_Service receives domain events THEN it SHALL update search indices asynchronously
6. THE Search_Service SHALL support full-text search on titles and body content

### Requirement 14: Advertisement Management

**User Story:** As a user, I want to submit community-relevant ads, so that I can promote services or products to local communities.

#### Acceptance Criteria

1. WHEN a user submits an ad THEN the Ads_Service SHALL store ad content, target group, and submitter ID
2. THE Ads_Service SHALL require admin approval before displaying ads
3. WHEN an admin approves an ad THEN the Ads_Service SHALL publish an ads-ad-approved event
4. WHEN a user has disabled ads in preferences THEN the System SHALL not display ads to that user
5. THE Ads_Service SHALL support targeting ads to specific groups or communities
6. THE Ads_Service SHALL track ad impressions and clicks

### Requirement 15: Notification Delivery

**User Story:** As a user, I want to receive notifications for relevant events, so that I stay informed about community activity.

#### Acceptance Criteria

1. WHEN the Notification_Service receives a notification-send-requested event THEN it SHALL deliver notifications according to user preferences
2. THE Notification_Service SHALL support in-app and push notification channels
3. WHEN a user has disabled a notification type in preferences THEN the Notification_Service SHALL not send notifications of that type
4. THE Notification_Service SHALL batch notifications for the same user within a 5-minute window
5. THE Notification_Service SHALL retry failed notification deliveries up to 3 times with exponential backoff

### Requirement 16: Event-Driven Communication

**User Story:** As a system architect, I want services to communicate via domain events, so that services remain loosely coupled.

#### Acceptance Criteria

1. THE System SHALL use Kafka as the event bus for all asynchronous communication
2. THE System SHALL follow topic naming convention: {domain}-{entity}-{action}
3. WHEN a service publishes an event THEN it SHALL include eventId, correlationId, traceId, and timestamp
4. THE System SHALL implement transactional outbox pattern for atomic database writes and event publication
5. WHEN an event consumer processes an event THEN it SHALL use idempotency keys to prevent duplicate processing
6. WHEN event processing fails after maximum retries THEN the System SHALL move the event to a dead-letter queue

### Requirement 17: Transactional Outbox

**User Story:** As a system architect, I want atomic database writes and event publication, so that the system maintains consistency.

#### Acceptance Criteria

1. WHEN a service writes domain data THEN it SHALL write an outbox record in the same database transaction
2. THE System SHALL implement an async publisher that reads pending outbox records
3. WHEN an outbox event is successfully published to Kafka THEN the publisher SHALL mark it as PUBLISHED
4. WHEN outbox event publication fails THEN the publisher SHALL retry with exponential backoff
5. WHEN an outbox event exceeds maximum retries THEN the publisher SHALL mark it as FAILED and record the error message
6. THE System SHALL index outbox records by status and next_retry_at for efficient polling

### Requirement 18: Idempotent Event Processing

**User Story:** As a system architect, I want idempotent event consumers, so that duplicate event delivery does not cause incorrect state.

#### Acceptance Criteria

1. WHEN a consumer processes an event THEN it SHALL check if the event ID has been processed before
2. WHEN a duplicate event is detected THEN the consumer SHALL acknowledge the event without reprocessing
3. THE System SHALL store processed event IDs in Redis with 7-day TTL
4. WHEN an event consumer processes an event successfully THEN it SHALL commit the Kafka offset
5. WHEN an event consumer fails to process an event THEN it SHALL not commit the offset and allow retry

### Requirement 19: Request Context Propagation

**User Story:** As a system architect, I want request context propagated across service boundaries, so that I can trace requests and maintain audit logs.

#### Acceptance Criteria

1. WHEN the Auth_Gateway receives a request THEN it SHALL extract or generate a correlation ID
2. WHEN the Auth_Gateway receives a request THEN it SHALL extract or generate a trace ID
3. THE System SHALL propagate correlation ID and trace ID in HTTP headers to all downstream services
4. WHEN a service publishes an event THEN it SHALL include the correlation ID and trace ID in the event payload
5. THE System SHALL use scoped values for thread-safe context propagation within services
6. WHEN a service logs an operation THEN it SHALL include correlation ID and trace ID in log entries

### Requirement 20: Health Checks and Observability

**User Story:** As a system operator, I want health checks and metrics endpoints, so that I can monitor service health and performance.

#### Acceptance Criteria

1. THE System SHALL expose /q/health endpoint returning combined health status
2. THE System SHALL expose /q/health/live endpoint for Kubernetes liveness probes
3. THE System SHALL expose /q/health/ready endpoint for Kubernetes readiness probes
4. THE System SHALL expose /q/metrics endpoint in Prometheus format
5. WHEN a service dependency is unavailable THEN the readiness check SHALL report unhealthy
6. THE System SHALL track request rates, latencies, and error rates for all endpoints
7. THE System SHALL track business metrics including posts created, ads approved, and resources published

### Requirement 21: Error Handling

**User Story:** As a client application, I want consistent error responses, so that I can handle errors appropriately.

#### Acceptance Criteria

1. WHEN a service returns an error THEN it SHALL include error code, message, timestamp, path, and correlation ID
2. THE System SHALL use consistent error codes across all services
3. WHEN a validation error occurs THEN the service SHALL return HTTP 400 with field-level error details
4. WHEN an authentication error occurs THEN the service SHALL return HTTP 401
5. WHEN an authorization error occurs THEN the service SHALL return HTTP 403
6. WHEN a resource is not found THEN the service SHALL return HTTP 404
7. WHEN a conflict occurs THEN the service SHALL return HTTP 409
8. WHEN an internal error occurs THEN the service SHALL return HTTP 500 and log the full stack trace

### Requirement 22: Database Migration

**User Story:** As a system operator, I want automated database migrations, so that schema changes are applied consistently.

#### Acceptance Criteria

1. THE System SHALL use Flyway for database schema migrations
2. THE System SHALL use a dedicated co_migration database user for running migrations
3. WHEN a service starts THEN it SHALL run pending migrations before accepting traffic
4. THE System SHALL version migration scripts with format V{version}__{description}.sql
5. WHEN a migration fails THEN the service SHALL not start and SHALL log the failure reason
6. THE System SHALL record migration history in a schema_version table

### Requirement 23: Connection Pooling

**User Story:** As a system operator, I want efficient database connection management, so that the system scales under load.

#### Acceptance Criteria

1. THE System SHALL use PgBouncer for PostgreSQL connection pooling
2. THE System SHALL configure PgBouncer in transaction pooling mode
3. WHEN a service requests a database connection THEN PgBouncer SHALL provide a connection from the pool
4. THE System SHALL configure connection pool size based on service load characteristics
5. WHEN connection pool is exhausted THEN the service SHALL queue requests with timeout

### Requirement 24: Caching Strategy

**User Story:** As a system architect, I want strategic caching for hot data, so that the system performs well under load.

#### Acceptance Criteria

1. THE System SHALL use Redis for caching rate limits, permission snapshots, and idempotency keys
2. THE System SHALL never use Redis as the source of truth for domain data
3. WHEN cached data is not found THEN the service SHALL fetch from the authoritative database
4. THE System SHALL set appropriate TTL values for all cached data
5. WHEN domain data changes THEN the service SHALL invalidate related cache entries
6. THE System SHALL handle Redis unavailability gracefully by falling back to database queries

### Requirement 25: Java 25 Feature Adoption

**User Story:** As a developer, I want to use Java 25 features for cleaner and more efficient code, so that the codebase is modern and maintainable.

#### Acceptance Criteria

1. THE System SHALL use flexible constructor bodies (JEP 482) for validation before super() calls
2. THE System SHALL use primitive types in patterns (JEP 455) for event processing without boxing overhead
3. THE System SHALL use stream gatherers (JEP 473) for custom batch processing operations
4. THE System SHALL use structured concurrency (JEP 480) for parallel permission checks and search aggregation
5. THE System SHALL use scoped values (JEP 481) for request context propagation instead of ThreadLocal
6. WHEN using records for commands THEN the System SHALL validate and normalize fields in compact constructors

### Requirement 26: Authorization Enforcement

**User Story:** As a system architect, I want consistent authorization enforcement, so that users can only perform actions they are permitted to.

#### Acceptance Criteria

1. WHEN a user attempts an action THEN the service SHALL validate the user has required permissions
2. THE System SHALL enforce coarse-grained authorization at the gateway level
3. THE System SHALL enforce fine-grained authorization at the service level
4. WHEN checking permissions THEN the service SHALL use parallel checks with structured concurrency
5. WHEN a user lacks required permissions THEN the service SHALL return HTTP 403 Forbidden
6. THE System SHALL validate role scope matches the target resource scope

### Requirement 27: Audit Logging

**User Story:** As a compliance officer, I want audit logs for all state-changing operations, so that I can track who did what and when.

#### Acceptance Criteria

1. WHEN a state-changing operation occurs THEN the service SHALL write an audit log entry
2. THE System SHALL record entity type, entity ID, action, performed by, timestamp, and changes in audit logs
3. THE System SHALL include correlation ID and trace ID in audit log entries
4. THE System SHALL store audit logs in a dedicated audit_log table per service
5. THE System SHALL index audit logs by entity, user, and timestamp
6. THE System SHALL retain audit logs for minimum 1 year

### Requirement 28: Performance Requirements

**User Story:** As a user, I want fast response times, so that the application feels responsive.

#### Acceptance Criteria

1. WHEN a user requests thread list THEN the Content_Service SHALL respond within 200ms at p95
2. WHEN a user creates a thread THEN the Content_Service SHALL respond within 500ms at p95
3. WHEN a user searches THEN the Search_Service SHALL respond within 300ms at p95
4. WHEN checking membership status THEN the Community_Service SHALL respond within 100ms at p95 for cached checks
5. THE System SHALL support minimum 1000 concurrent users per service instance
6. THE System SHALL support minimum 100 requests per second per service instance

### Requirement 29: Data Validation

**User Story:** As a developer, I want consistent data validation, so that invalid data never enters the system.

#### Acceptance Criteria

1. WHEN a command is received THEN the service SHALL validate all required fields are present
2. WHEN a command is received THEN the service SHALL validate field lengths and formats
3. WHEN validation fails THEN the service SHALL return HTTP 400 with field-level error details
4. THE System SHALL strip leading and trailing whitespace from string fields
5. WHEN a command contains invalid enum values THEN the service SHALL reject it with descriptive error
6. THE System SHALL validate foreign key references exist before creating relationships

### Requirement 30: Deployment and Scalability

**User Story:** As a system operator, I want services to be independently deployable and scalable, so that I can scale and update services without downtime.

#### Acceptance Criteria

1. THE System SHALL package each service as a container image
2. THE System SHALL support horizontal scaling of all services
3. WHEN a service instance starts THEN it SHALL register with service discovery
4. WHEN a service instance stops THEN it SHALL deregister gracefully
5. THE System SHALL support rolling updates with zero downtime
6. THE System SHALL support running multiple versions of a service simultaneously during deployment
