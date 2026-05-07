# Technical Design: Java 25 Microservices Architecture

## Overview

This document defines the technical architecture for a comprehensive microservices platform using Java 25, implementing database-per-service pattern with event-driven communication.

## High-Level Design

### System Context

The Community Platform is a microservices-based system that replaces scattered messaging groups with structured, searchable community spaces.

**Key Stakeholders:**
- End Users: Community members seeking information and engagement
- Community Admins: Managing groups, members, and content
- Moderators: Enforcing community guidelines
- Advertisers: Submitting community-relevant ads

### Architecture Principles

1. **Domain-Driven Design**: Each service owns a bounded context
2. **Database Per Service**: No shared databases or schemas
3. **Event-Driven Communication**: Async via Kafka for loose coupling
4. **API Gateway Pattern**: Single entry point for clients
5. **Observability First**: Metrics, logs, traces from day one

### Container Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  (Angular Admin Console + React User App)                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                     auth-gateway                             │
│  JWT Validation │ Rate Limiting │ Routing                   │
└─────┬───────────────────────────────────────────────────────┘
      │
      ├──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┤
      ▼      ▼      ▼      ▼      ▼      ▼      ▼      ▼      ▼
   identity community content knowledge search trust-ops ads notification
   -service -service -service -service -service -service -service -service
      │      │      │      │      │      │      │      │
      ▼      ▼      ▼      ▼      ▼      ▼      ▼      ▼
   [PG]   [PG]   [PG]   [PG]   [PG]   [PG]   [PG]   [PG]
   
   └──────────────────┬──────────────────────────────────┘
                      │
                      ▼
              ┌──────────────┐
              │    Kafka     │
              │  Event Bus   │
              └──────────────┘
```

### Service Catalog

| Service | Type | Responsibility | Database |
|---------|------|----------------|----------|
| auth-gateway | Gateway | JWT validation, routing, rate limiting | Redis only |
| identity-service | Core | User profiles, preferences, location | co_identity |
| community-service | Core | Communities, groups, memberships, invites | co_community |
| content-service | Core | Threads, posts, discussions | co_content |
| knowledge-service | Core | Curated resources, solutions | co_knowledge |
| search-service | Support | Unified search across content | co_search |
| trust-ops-service | Core | Reports, moderation, approvals | co_trust_ops |
| ads-service | Core | User-submitted ads, delivery | co_ads |
| notification-service | Support | In-app and push notifications | co_notification |

### Communication Patterns

**Synchronous (REST):**
- Client → Gateway → Services
- Limited service-to-service calls (membership checks, permission validation)

**Asynchronous (Kafka):**
- Domain events for state changes
- Transactional outbox pattern
- Idempotent consumers
- Dead-letter queues for failures

### Data Architecture

**Database Strategy:**
- PostgreSQL for all services
- PgBouncer connection pooling
- Dedicated database user per service
- Separate migration user (co_migration)
- Flyway for schema migrations

**Caching Strategy:**
- Redis for rate limits
- Redis for hot permission snapshots
- Redis for idempotency keys
- No Redis as source of truth

### Security Architecture

**Authentication:**
- JWT tokens issued by identity provider
- Gateway validates all tokens
- Services trust propagated user context

**Authorization:**
- Gateway: Coarse route-level checks
- Services: Fine-grained domain authorization
- Membership-based access control
- Scoped role assignments (community/group level)

**Headers Propagated:**
- X-User-Id
- X-Community-Id
- X-Correlation-Id
- X-Trace-Id

### Event Architecture

**Topic Naming Convention:**
```
{domain}-{entity}-{action}
```

**Core Topics:**
- identity-user-created
- community-membership-created
- content-thread-created
- knowledge-resource-published
- moderation-action-applied
- ads-ad-approved
- notification-send-requested

**Transactional Outbox:**
- Write domain data + outbox record in same transaction
- Async publisher reads outbox
- Retry with exponential backoff
- DLQ after max retries

### Observability

**Health Checks:**
- /q/health (combined)
- /q/health/live (liveness)
- /q/health/ready (readiness)

**Metrics:**
- /q/metrics (Prometheus format)
- Request rates, latencies, errors
- Business metrics (posts created, ads approved, etc.)

**Tracing:**
- Distributed tracing with correlation IDs
- Trace context propagation across services

## Low-Level Design

### Java 25 Feature Adoption

#### 1. Flexible Constructor Bodies (JEP 482)

Allows statements before `super()` or `this()` calls, enabling validation and preparation logic.

**Use Case: Domain Entity Validation**

```java
public record CreateThreadCommand(
    UUID groupId,
    UUID authorId,
    String title,
    String body,
    ThreadType type
) {
    public CreateThreadCommand {
        // Validation before canonical constructor
        if (title == null || title.isBlank()) {
            throw new IllegalArgumentException("Title cannot be blank");
        }
        if (title.length() > 200) {
            throw new IllegalArgumentException("Title too long");
        }
        // Normalize before assignment
        title = title.strip();
        body = body == null ? "" : body.strip();
    }
}
```

**Use Case: Service Initialization**

```java
public class ContentService {
    private final ContentRepository repository;
    private final EventPublisher eventPublisher;
    private final MembershipClient membershipClient;
    
    public ContentService(
        ContentRepository repository,
        EventPublisher eventPublisher,
        MembershipClient membershipClient
    ) {
        // Pre-super validation and setup
        Objects.requireNonNull(repository, "Repository required");
        Objects.requireNonNull(eventPublisher, "Event publisher required");
        
        // Initialize dependencies
        this.repository = repository;
        this.eventPublisher = eventPublisher;
        this.membershipClient = membershipClient;
        
        // Post-initialization setup
        repository.registerEventListener(eventPublisher);
    }
}
```

#### 2. Primitive Types in Patterns (JEP 455)

Pattern matching now supports primitive types, reducing boxing overhead.

**Use Case: Event Processing**

```java
public sealed interface DomainEvent permits
    ThreadCreatedEvent,
    PostCreatedEvent,
    ResourcePublishedEvent {}

public record ThreadCreatedEvent(
    long threadId,
    long groupId,
    long authorId,
    long timestamp
) implements DomainEvent {}

public class EventProcessor {
    public void process(DomainEvent event) {
        switch (event) {
            case ThreadCreatedEvent(long threadId, long groupId, long authorId, long ts) -> {
                // No boxing overhead for primitive longs
                updateSearchIndex(threadId, groupId);
                notifyGroupMembers(groupId, authorId);
            }
            case PostCreatedEvent(long postId, long threadId, long authorId, long ts) -> {
                updateThreadActivity(threadId, ts);
            }
            case ResourcePublishedEvent(long resourceId, long groupId, long ts) -> {
                indexResource(resourceId);
            }
        }
    }
}
```

**Use Case: Status Code Handling**

```java
public record ApiResponse(int statusCode, String body) {}

public String handleResponse(ApiResponse response) {
    return switch (response) {
        case ApiResponse(200, String body) -> body;
        case ApiResponse(404, _) -> "Not found";
        case ApiResponse(int code, _) when code >= 500 -> "Server error";
        case ApiResponse(int code, String body) -> "Error " + code + ": " + body;
    };
}
```

#### 3. Stream Gatherers (JEP 473)

Custom intermediate stream operations for complex transformations.

**Use Case: Batch Event Processing**

```java
public class EventBatchGatherer implements Gatherer<DomainEvent, List<DomainEvent>, List<DomainEvent>> {
    private final int batchSize;
    private final Duration maxWait;
    
    @Override
    public Integrator<List<DomainEvent>, DomainEvent, List<DomainEvent>> integrator() {
        return (state, event, downstream) -> {
            state.add(event);
            if (state.size() >= batchSize) {
                downstream.push(new ArrayList<>(state));
                state.clear();
            }
            return true;
        };
    }
}

// Usage in event consumer
eventStream
    .gather(new EventBatchGatherer(100, Duration.ofSeconds(5)))
    .forEach(batch -> processBatch(batch));
```

**Use Case: Search Result Deduplication**

```java
public class DeduplicateGatherer<T> implements Gatherer<T, Set<T>, T> {
    @Override
    public Integrator<Set<T>, T, T> integrator() {
        return (seen, element, downstream) -> {
            if (seen.add(element)) {
                downstream.push(element);
            }
            return true;
        };
    }
}

// Usage in search service
searchResults
    .gather(new DeduplicateGatherer<>())
    .limit(20)
    .toList();
```

#### 4. Structured Concurrency (JEP 480)

Treat multiple concurrent tasks as a single unit of work.

**Use Case: Parallel Permission Checks**

```java
public class AuthorizationService {
    public boolean canCreateThread(UUID userId, UUID groupId) {
        try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
            // Launch parallel checks
            var membershipCheck = scope.fork(() -> 
                membershipClient.hasActiveMembership(userId, groupId)
            );
            var viewerModeCheck = scope.fork(() -> 
                !moderationClient.hasViewerModePenalty(userId, groupId)
            );
            var rateLimitCheck = scope.fork(() -> 
                rateLimiter.allowRequest(userId)
            );
            
            // Wait for all to complete
            scope.join();
            scope.throwIfFailed();
            
            // All checks passed
            return membershipCheck.get() && 
                   viewerModeCheck.get() && 
                   rateLimitCheck.get();
        } catch (Exception e) {
            return false;
        }
    }
}
```

**Use Case: Aggregating Search Results**

```java
public class SearchService {
    public SearchResults search(String query, UUID userId) {
        try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
            var threadsTask = scope.fork(() -> searchThreads(query, userId));
            var resourcesTask = scope.fork(() -> searchResources(query, userId));
            var adsTask = scope.fork(() -> searchAds(query, userId));
            
            scope.join();
            scope.throwIfFailed();
            
            return new SearchResults(
                threadsTask.get(),
                resourcesTask.get(),
                adsTask.get()
            );
        }
    }
}
```

#### 5. Scoped Values (JEP 481)

Share immutable data across threads without ThreadLocal overhead.

**Use Case: Request Context Propagation**

```java
public class RequestContext {
    public static final ScopedValue<UUID> USER_ID = ScopedValue.newInstance();
    public static final ScopedValue<UUID> CORRELATION_ID = ScopedValue.newInstance();
    public static final ScopedValue<String> TRACE_ID = ScopedValue.newInstance();
}

// In gateway filter
public void filter(HttpRequest request) {
    UUID userId = extractUserId(request);
    UUID correlationId = extractOrGenerateCorrelationId(request);
    String traceId = extractOrGenerateTraceId(request);
    
    ScopedValue.where(RequestContext.USER_ID, userId)
        .where(RequestContext.CORRELATION_ID, correlationId)
        .where(RequestContext.TRACE_ID, traceId)
        .run(() -> handleRequest(request));
}

// In any service layer
public void createThread(CreateThreadCommand command) {
    UUID currentUser = RequestContext.USER_ID.get();
    UUID correlationId = RequestContext.CORRELATION_ID.get();
    
    // Use context without passing parameters
    auditLog.log("Thread created by " + currentUser, correlationId);
}
```

### API Contract Examples

#### identity-service API

```java
@Path("/api/v1/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {
    
    @POST
    @Path("/profile")
    public Response createProfile(CreateProfileRequest request) {
        // Returns 201 with user profile
    }
    
    @PUT
    @Path("/{userId}/location")
    public Response updateLocation(
        @PathParam("userId") UUID userId,
        UpdateLocationRequest request
    ) {
        // Returns 200 with updated profile
    }
    
    @PUT
    @Path("/{userId}/preferences")
    public Response updatePreferences(
        @PathParam("userId") UUID userId,
        UpdatePreferencesRequest request
    ) {
        // Returns 200 with updated preferences
    }
}

public record CreateProfileRequest(
    String displayName,
    String phoneNumber,
    Location baseLocation,
    LocationVisibility locationVisibility
) {}

public record UpdateLocationRequest(
    Location baseLocation,
    LocationVisibility locationVisibility
) {}
```

#### community-service API

```java
@Path("/api/v1/communities")
public class CommunityResource {
    
    @POST
    public Response createCommunity(CreateCommunityRequest request) {
        // Platform admin only
    }
    
    @POST
    @Path("/{communityId}/groups")
    public Response createGroup(
        @PathParam("communityId") UUID communityId,
        CreateGroupRequest request
    ) {
        // Community admin only
    }
    
    @POST
    @Path("/groups/{groupId}/invites")
    public Response createInvite(
        @PathParam("groupId") UUID groupId,
        CreateInviteRequest request
    ) {
        // Group admin/moderator only
    }
    
    @POST
    @Path("/invites/{inviteCode}/join")
    public Response joinByInvite(
        @PathParam("inviteCode") String inviteCode
    ) {
        // Any authenticated user
    }
}

public record CreateGroupRequest(
    String name,
    String description,
    GroupType type,
    UUID parentCommunityId,
    Location location
) {}
```

#### content-service API

```java
@Path("/api/v1/threads")
public class ThreadResource {
    
    @POST
    public Response createThread(CreateThreadRequest request) {
        // Requires active membership + no viewer mode
    }
    
    @POST
    @Path("/{threadId}/posts")
    public Response replyToThread(
        @PathParam("threadId") UUID threadId,
        CreatePostRequest request
    ) {
        // Requires active membership + no viewer mode
    }
    
    @PUT
    @Path("/{threadId}/close")
    public Response closeThread(@PathParam("threadId") UUID threadId) {
        // Thread author or moderator only
    }
    
    @GET
    @Path("/{threadId}")
    public Response getThread(@PathParam("threadId") UUID threadId) {
        // Requires membership in thread's group
    }
}

public record CreateThreadRequest(
    UUID groupId,
    String title,
    String body,
    ThreadType type,
    List<AttachmentRequest> attachments
) {}
```

### Domain Models

#### identity-service Domain

```java
@Entity
@Table(name = "users")
public class User {
    @Id
    private UUID id;
    
    @Column(nullable = false)
    private String displayName;
    
    @Column(unique = true, nullable = false)
    private String phoneNumber;
    
    @Embedded
    private Location baseLocation;
    
    @Enumerated(EnumType.STRING)
    private LocationVisibility locationVisibility;
    
    @Embedded
    private NotificationPreferences notificationPreferences;
    
    private boolean showAds;
    
    @Column(nullable = false)
    private Instant createdAt;
    
    private Instant updatedAt;
}

@Embeddable
public record Location(
    double latitude,
    double longitude,
    String city,
    String country
) {}

public enum LocationVisibility {
    PRIVATE,
    CITY_ONLY,
    FULL
}
```

#### community-service Domain

```java
@Entity
@Table(name = "communities")
public class Community {
    @Id
    private UUID id;
    
    @Column(nullable = false)
    private String name;
    
    private String description;
    
    @Column(nullable = false)
    private Instant createdAt;
    
    @Column(nullable = false)
    private UUID createdBy;
}

@Entity
@Table(name = "groups")
public class Group {
    @Id
    private UUID id;
    
    @Column(nullable = false)
    private UUID communityId;
    
    @Column(nullable = false)
    private String name;
    
    private String description;
    
    @Enumerated(EnumType.STRING)
    private GroupType type;
    
    @Embedded
    private Location location;
    
    @Column(nullable = false)
    private Instant createdAt;
}

@Entity
@Table(name = "memberships")
public class Membership {
    @Id
    private UUID id;
    
    @Column(nullable = false)
    private UUID userId;
    
    @Column(nullable = false)
    private UUID groupId;
    
    @Enumerated(EnumType.STRING)
    private MembershipStatus status;
    
    @Column(nullable = false)
    private Instant joinedAt;
    
    private Instant leftAt;
}

@Entity
@Table(name = "role_assignments")
public class RoleAssignment {
    @Id
    private UUID id;
    
    @Column(nullable = false)
    private UUID userId;
    
    @Enumerated(EnumType.STRING)
    private Role role;
    
    @Enumerated(EnumType.STRING)
    private ScopeType scopeType;
    
    @Column(nullable = false)
    private UUID scopeId;
    
    @Column(nullable = false)
    private Instant assignedAt;
    
    @Column(nullable = false)
    private UUID assignedBy;
}

public enum Role {
    PLATFORM_ADMIN,
    COMMUNITY_ADMIN,
    GROUP_ADMIN,
    MODERATOR,
    CREATOR
}

public enum ScopeType {
    PLATFORM,
    COMMUNITY,
    GROUP
}
```

#### content-service Domain

```java
@Entity
@Table(name = "threads")
public class Thread {
    @Id
    private UUID id;
    
    @Column(nullable = false)
    private UUID groupId;
    
    @Column(nullable = false)
    private UUID authorId;
    
    @Column(nullable = false, length = 200)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String body;
    
    @Enumerated(EnumType.STRING)
    private ThreadType type;
    
    @Enumerated(EnumType.STRING)
    private ThreadStatus status;
    
    @Column(nullable = false)
    private Instant createdAt;
    
    private Instant closedAt;
    
    private UUID closedBy;
}

@Entity
@Table(name = "posts")
public class Post {
    @Id
    private UUID id;
    
    @Column(nullable = false)
    private UUID threadId;
    
    @Column(nullable = false)
    private UUID authorId;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String body;
    
    @Column(nullable = false)
    private Instant createdAt;
    
    private Instant removedAt;
    
    private UUID removedBy;
}

public enum ThreadType {
    DISCUSSION,
    QUESTION,
    HELP_REQUEST,
    LISTING,
    SERVICE_OFFER
}

public enum ThreadStatus {
    OPEN,
    CLOSED,
    REMOVED
}
```

### Kafka Event Schemas

```java
public record ThreadCreatedEvent(
    UUID eventId,
    UUID threadId,
    UUID groupId,
    UUID authorId,
    String title,
    ThreadType type,
    Instant createdAt,
    UUID correlationId,
    String traceId
) implements DomainEvent {}

public record MembershipCreatedEvent(
    UUID eventId,
    UUID membershipId,
    UUID userId,
    UUID groupId,
    Instant joinedAt,
    UUID correlationId,
    String traceId
) implements DomainEvent {}

public record ResourcePublishedEvent(
    UUID eventId,
    UUID resourceId,
    UUID groupId,
    UUID publishedBy,
    String title,
    List<UUID> sourceThreadIds,
    Instant publishedAt,
    UUID correlationId,
    String traceId
) implements DomainEvent {}

public record ModerationActionAppliedEvent(
    UUID eventId,
    UUID actionId,
    UUID targetUserId,
    UUID scopeId,
    ScopeType scopeType,
    ActionType actionType,
    Instant appliedAt,
    Instant expiresAt,
    UUID appliedBy,
    UUID correlationId,
    String traceId
) implements DomainEvent {}
```

### Database Schema Patterns

**Transactional Outbox Table:**

```sql
CREATE TABLE outbox_events (
    event_id UUID PRIMARY KEY,
    aggregate_type VARCHAR(100) NOT NULL,
    aggregate_id UUID NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    topic VARCHAR(200) NOT NULL,
    partition_key VARCHAR(200) NOT NULL,
    payload JSONB NOT NULL,
    headers JSONB,
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    retry_count INT NOT NULL DEFAULT 0,
    max_retries INT NOT NULL DEFAULT 3,
    trace_id VARCHAR(100),
    correlation_id UUID,
    created_by UUID,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    published_at TIMESTAMP,
    next_retry_at TIMESTAMP,
    error_message TEXT
);

CREATE INDEX idx_outbox_status_next_retry 
ON outbox_events(status, next_retry_at) 
WHERE status IN ('PENDING', 'FAILED');
```

**Audit Log Pattern:**

```sql
CREATE TABLE audit_log (
    id UUID PRIMARY KEY,
    entity_type VARCHAR(100) NOT NULL,
    entity_id UUID NOT NULL,
    action VARCHAR(50) NOT NULL,
    performed_by UUID NOT NULL,
    performed_at TIMESTAMP NOT NULL DEFAULT NOW(),
    changes JSONB,
    correlation_id UUID,
    trace_id VARCHAR(100)
);

CREATE INDEX idx_audit_entity ON audit_log(entity_type, entity_id);
CREATE INDEX idx_audit_user ON audit_log(performed_by);
CREATE INDEX idx_audit_time ON audit_log(performed_at DESC);
```

### Error Handling Strategy

**Error Response Model:**

```java
public record ErrorResponse(
    String errorCode,
    String message,
    Instant timestamp,
    String path,
    UUID correlationId,
    Map<String, String> details
) {}

public enum ErrorCode {
    // Client errors (4xx)
    VALIDATION_ERROR("VAL_001", 400),
    UNAUTHORIZED("AUTH_001", 401),
    FORBIDDEN("AUTH_002", 403),
    NOT_FOUND("RES_001", 404),
    CONFLICT("RES_002", 409),
    RATE_LIMIT_EXCEEDED("RATE_001", 429),
    
    // Server errors (5xx)
    INTERNAL_ERROR("SRV_001", 500),
    SERVICE_UNAVAILABLE("SRV_002", 503),
    GATEWAY_TIMEOUT("SRV_003", 504);
    
    private final String code;
    private final int httpStatus;
}
```

**Exception Handling:**

```java
@Provider
public class GlobalExceptionMapper implements ExceptionMapper<Exception> {
    
    @Override
    public Response toResponse(Exception exception) {
        return switch (exception) {
            case ValidationException e -> validationError(e);
            case UnauthorizedException e -> unauthorizedError(e);
            case ForbiddenException e -> forbiddenError(e);
            case NotFoundException e -> notFoundError(e);
            case ConflictException e -> conflictError(e);
            case RateLimitException e -> rateLimitError(e);
            default -> internalError(exception);
        };
    }
    
    private Response validationError(ValidationException e) {
        var error = new ErrorResponse(
            ErrorCode.VALIDATION_ERROR.code(),
            e.getMessage(),
            Instant.now(),
            getCurrentPath(),
            RequestContext.CORRELATION_ID.get(),
            e.getFieldErrors()
        );
        return Response.status(400).entity(error).build();
    }
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Membership Requirement for Content Creation

*For any* thread creation attempt by a user, the user must have an active membership in the target group.

**Validates: Requirements 8.1, 9.1**

### Property 2: Viewer Mode Enforcement

*For any* user with an active viewer mode penalty in a group, all content creation actions (thread creation, replies, comments) in that group must be rejected.

**Validates: Requirements 8.2, 9.2, 11.2**

### Property 3: Event Ordering Preservation

*For any* sequence of events on the same aggregate, if event e1 has an earlier timestamp than event e2, then e1 must be processed before e2.

**Validates: Requirements 16.3, 16.5**

### Property 4: Idempotent Event Processing

*For any* event and consumer, processing the event multiple times must produce the same final state as processing it once.

**Validates: Requirements 16.5, 18.1, 18.2**

### Property 5: Authorization Scope Enforcement

*For any* role assignment with a specific scope (platform, community, or group), actions permitted by that role must only be allowed within the assigned scope boundaries.

**Validates: Requirements 7.4, 7.5, 26.6**

### Property 6: Request Context Propagation

*For any* request entering the system, correlation ID and trace ID must be propagated through all synchronous calls and asynchronous events throughout the request lifecycle.

**Validates: Requirements 19.1, 19.2, 19.3, 19.4**

### Property 7: Transactional Outbox Atomicity

*For any* domain state change, the domain data write and corresponding outbox event record must be written atomically in the same database transaction.

**Validates: Requirements 16.4, 17.1**

### Property 8: Event Publication Guarantee

*For any* outbox event record with status PENDING, the event must eventually be published to Kafka or moved to FAILED status after maximum retries.

**Validates: Requirements 17.3, 17.4, 17.5**

### Property 9: Data Validation Consistency

*For any* command received by a service, all required fields must be validated, string fields must be trimmed of whitespace, and invalid data must result in HTTP 400 response with field-level errors.

**Validates: Requirements 8.4, 8.5, 29.1, 29.2, 29.3, 29.4**

### Property 10: Authorization Before Action

*For any* state-changing operation, authorization checks must be performed before the operation is executed, and unauthorized attempts must return HTTP 403.

**Validates: Requirements 26.1, 26.5**

### Property 11: Audit Log Completeness

*For any* state-changing operation that completes successfully, an audit log entry must be created with entity type, entity ID, action, performer, timestamp, correlation ID, and trace ID.

**Validates: Requirements 27.1, 27.2, 27.3**

### Property 12: Phone Number Uniqueness

*For any* user profile creation or update, if the phone number already exists for a different user, the operation must be rejected.

**Validates: Requirements 3.2**

### Property 13: Event Metadata Completeness

*For any* event published to Kafka, the event must include eventId, correlationId, traceId, and timestamp fields.

**Validates: Requirements 16.3, 19.4**

### Property 14: Rate Limit Enforcement

*For any* user making requests, when the rate limit threshold is exceeded, subsequent requests must return HTTP 429 until the rate limit window resets.

**Validates: Requirements 2.4, 2.5**

### Property 15: Thread Status Transition Rules

*For any* thread with status CLOSED or REMOVED, attempts to add new replies must be rejected.

**Validates: Requirements 9.3, 9.4**

## Implementation Phases

### Phase 1: Foundation (Weeks 1-4)
- Setup Java 25 project structure
- Configure Quarkus 3.x with Java 25
- Setup PostgreSQL + PgBouncer + Redis
- Setup Kafka cluster
- Implement auth-gateway
- Implement identity-service

### Phase 2: Core Services (Weeks 5-10)
- Implement community-service
- Implement content-service
- Implement knowledge-service
- Setup transactional outbox
- Setup event consumers

### Phase 3: Support Services (Weeks 11-14)
- Implement search-service
- Implement trust-ops-service
- Implement ads-service
- Implement notification-service

### Phase 4: Integration & Testing (Weeks 15-18)
- End-to-end integration tests
- Property-based testing
- Performance testing
- Security testing
- Observability validation

### Phase 5: Production Readiness (Weeks 19-20)
- Production deployment scripts
- Monitoring dashboards
- Runbooks and documentation
- Disaster recovery procedures

## Technology Stack Summary

| Component | Technology | Version |
|-----------|-----------|---------|
| Language | Java | 25 |
| Framework | Quarkus | 3.x |
| Build Tool | Maven | 3.9+ |
| Database | PostgreSQL | 16+ |
| Connection Pool | PgBouncer | 1.21+ |
| Cache | Redis | 7.2+ |
| Message Broker | Kafka | 3.6+ |
| API Gateway | Quarkus | 3.x |
| Observability | Micrometer + Prometheus | Latest |
| Tracing | OpenTelemetry | Latest |

## Next Steps

1. Review and approve this design document
2. Create requirements document (derived from design)
3. Create implementation tasks
4. Setup development environment
5. Begin Phase 1 implementation
