# Phase 1 Microservice Boundaries

## Goal

Define the first professional backend service split for the Community product.

The product is not a generic chat app. It is a structured community memory platform that replaces scattered WhatsApp, Facebook, and Telegram groups by making information searchable, governable, and reusable.

## Boundary Strategy

Phase 1 should use clear bounded contexts without creating unnecessary operational load.

Recommended approach:

- design as microservices from day one
- keep service ownership strict
- use service-owned schemas and events
- avoid cross-service database joins
- start with the smallest deployable set that still protects the domain boundaries
- postpone billing, AI, advanced analytics, and real-time chat services

Deployment note:

- the target architecture is service-per-folder microservices
- local development can still run several services together through Docker Compose
- if solo development speed becomes a concern, services may be scaffolded gradually, but database ownership and API boundaries should not be blurred

## Phase 1 Deployable Services

### `auth-gateway`

Type: `Gateway`

Purpose:

- entry point for client APIs
- JWT validation
- request routing
- rate limiting
- user context propagation
- coarse route-level access control

Owns:

- no business source-of-truth data
- gateway configuration
- rate-limit keys in Redis

Does not own:

- product user profile
- memberships
- moderation decisions

Key integrations:

- identity provider or identity-service
- Redis for rate limiting
- backend services over HTTP

### `identity-service`

Type: `Core service`

Purpose:

- product-level user profile
- onboarding preferences
- base location and location visibility
- notification preferences
- ad visibility preference if kept user-centric in Phase 1

Owns:

- `User`
- `AdPreference` if the preference is modeled as a user setting

Does not own:

- authentication passwords when an external identity provider is used
- community membership
- admin role assignments

Key APIs:

- create or update profile
- update base location
- update location visibility
- update notification preferences
- update ad visibility preference

Publishes:

- `identity-user-created`
- `identity-user-updated`
- `identity-user-preferences-updated`
- `identity-ad-preference-updated`

### `community-service`

Type: `Core service`

Purpose:

- community and group structure
- membership lifecycle
- invite links
- join requests
- group creation requests
- scoped role assignments
- special day groups and cross-group invitation routing

Owns:

- `Community`
- `Group`
- `Membership`
- `Invite`
- `JoinRequest`
- `GroupRequest`
- `RoleAssignment`
- `SpecialDayGroup`

Does not own:

- thread content
- moderation decisions
- ad creatives

Key APIs:

- create community
- create group
- request group creation
- create invite
- join by invite
- submit join request
- approve or reject join request
- list memberships
- assign scoped roles

Creation and admin rules:

- top-level community creation requires platform admin permission or an allowlisted seed admin
- community admins can create and manage groups inside their community
- members request new groups through `GroupRequest`
- group admins and moderators manage only their assigned group scope
- role checks must use `scopeType` and `scopeId`, not global flags

Publishes:

- `community-created`
- `community-group-created`
- `community-membership-created`
- `community-membership-removed`
- `community-invite-created`
- `community-join-request-submitted`
- `community-join-request-approved`
- `community-join-request-rejected`
- `community-group-request-submitted`
- `community-role-assigned`
- `community-special-day-group-created`
- `community-special-day-group-activated`
- `community-special-day-group-ended`

### `content-service`

Type: `Core service`

Purpose:

- durable async discussions
- structured help requests
- questions
- listings
- posts and replies
- saved items
- attachment metadata for post-owned media and links

Owns:

- `Thread`
- `Post`
- `SavedItem`
- `Attachment` where `ownerType=POST`

Does not own:

- resource publishing lifecycle
- ad creative lifecycle
- moderation action source of truth

Key APIs:

- create thread
- create structured help request
- create structured listing
- reply to thread
- close thread
- remove own draft where allowed
- save or unsave item
- list thread attachments and links

Write authorization:

- user must have active membership in the target group
- user must not have active viewer-mode penalty in that scope
- user must pass rate-limit and duplicate-post checks

Phase 1 implementation note:

- the service may synchronously call `community-service` and `trust-ops-service` for write checks at first
- later it should consume membership and moderation events into a local permission projection

Publishes:

- `content-thread-created`
- `content-thread-updated`
- `content-thread-closed`
- `content-post-created`
- `content-post-removed`
- `content-saved-item-created`
- `content-attachment-created`

### `knowledge-service`

Type: `Core service`

Purpose:

- community memory
- golden knowledge library
- solution cards
- curated resources
- provenance links back to useful threads
- attachment metadata for resource-owned files and links

Owns:

- `Resource`
- `ResourceSource`
- `Attachment` where `ownerType=RESOURCE`

Does not own:

- raw thread conversation
- search implementation details
- moderation decisions

Key APIs:

- create draft resource
- submit resource for approval where required
- publish resource
- archive resource
- attach source threads
- list resource links, files, images, and videos

Publishes:

- `knowledge-resource-drafted`
- `knowledge-resource-submitted`
- `knowledge-resource-published`
- `knowledge-resource-archived`
- `knowledge-resource-source-linked`
- `knowledge-attachment-created`

### `search-service`

Type: `Support service`

Purpose:

- single search contract for the client
- duplicate deflection before posting
- searchable community memory
- indexed access to old links, images, videos, and resources

Owns:

- search projections
- search index metadata
- no source-of-truth business entities

Does not own:

- threads
- resources
- ads
- memberships

Phase 1 baseline:

- can start as PostgreSQL-backed search over service projections
- should expose APIs as if a dedicated index exists

Scale path:

- consume content and knowledge events
- build Elasticsearch or OpenSearch documents
- support richer ranking, snippets, and filters

Key APIs:

- search all visible content
- search within a group
- search resources
- search shared links and attachments
- find possible duplicates before post creation

Publishes:

- usually none in Phase 1

Consumes:

- `content-thread-created`
- `content-post-created`
- `content-thread-closed`
- `knowledge-resource-published`
- `knowledge-resource-archived`
- `content-attachment-created`
- `knowledge-attachment-created`
- `ads-ad-approved` only if approved ads are included in search results; user ad visibility is still applied at query time

### `trust-ops-service`

Type: `Core service`

Purpose:

- reporting
- moderation decisions
- viewer-mode penalties
- member removal audit
- approval queues
- operational admin workflows
- user block records

Owns:

- `Report`
- `ModerationAction`
- `Approval`
- `UserBlock`

Does not own:

- source thread or post content
- source ad creative
- community membership state

Key APIs:

- submit report
- review report queue
- warn user
- apply temporary viewer mode
- remove content through target service command
- request member removal from community-service
- block or unblock user
- list approval queue
- approve or reject approval item

Viewer-mode rule:

- `VIEWER_MODE` must be scoped to a specific group or location community; it is never community-wide by default
- community-wide restriction requires an explicit escalation step
- `VIEWER_MODE` must always have `expiresAt`
- active viewer mode blocks create, reply, comment, and ad submission in that scope only; the user retains full access in all other groups
- read access remains available unless a separate suspension action is introduced

Publishes:

- `moderation-report-submitted`
- `moderation-action-applied`
- `moderation-action-expired`
- `moderation-user-viewer-mode-applied`
- `moderation-user-viewer-mode-expired`
- `moderation-user-blocked`
- `ops-approval-created`
- `ops-approval-approved`
- `ops-approval-rejected`

Consumes:

- `community-join-request-submitted`
- `community-group-request-submitted`
- `knowledge-resource-submitted`
- `ads-ad-submitted`
- sensitive content approval request events if enabled later

### `ads-service`

Type: `Core service`

Purpose:

- user-submitted ads
- ad approval integration
- ad visibility honoring user preference
- basic ad performance reporting

Owns:

- `Ad`
- `Attachment` where `ownerType=AD`
- ad delivery counters
- ad engagement counters

Does not own:

- user preference if `AdPreference` remains in identity-service
- billing
- external ad network optimization

Key APIs:

- create ad draft
- submit ad for approval
- pause ad
- list eligible ads for a user
- record impression
- record click or useful interaction
- expose basic advertiser report

Delivery rule:

- if a user sets `showAds=false`, the service must return no community ads for that user
- ads must stay in their approved group/category placement
- rejected or paused ads must never be delivered

Advertiser reporting:

- impressions
- clicks
- saves
- useful votes or likes
- report count
- approval status
- delivery period
- group and location breakdown where privacy-safe

Publishes:

- `ads-ad-created`
- `ads-ad-submitted`
- `ads-ad-approved`
- `ads-ad-rejected`
- `ads-ad-paused`
- `ads-ad-impression-recorded`
- `ads-ad-click-recorded`
- `ads-ad-useful-vote-recorded`

Consumes:

- `identity-ad-preference-updated`
- `ops-approval-approved`
- `ops-approval-rejected`

### `notification-service`

Type: `Support service`

Purpose:

- outbound and in-app notifications
- approval decisions
- replies to user's threads
- report and moderation decisions
- invite and join updates

Owns:

- notification records
- notification delivery logs
- notification templates

Does not own:

- user profile source of truth
- business decision source of truth

Key APIs:

- list in-app notifications
- mark notification read
- manage device token if mobile push is added

Consumes:

- `community-join-request-approved`
- `community-join-request-rejected`
- `community-special-day-group-activated`
- `content-post-created`
- `knowledge-resource-published`
- `moderation-action-applied`
- `ops-approval-approved`
- `ops-approval-rejected`
- `ads-ad-approved`
- `ads-ad-rejected`
- `notification-send-requested`

Publishes:

- `notification-sent`
- `notification-failed`

## Later Services Not in Phase 1

### `media-service`

Introduce when uploads become heavy or need virus scanning, transcoding, image resizing, signed URLs, or storage lifecycle policies.

### `analytics-service`

Introduce when ad reports, community health metrics, funnel analysis, or weekly admin summaries require a dedicated read model.

### `external-ad-network-adapter`

Introduce when Google-style external ad monetization is added. It must still respect the user's platform-level ad visibility preference.

### `billing-service`

Introduce after paid ads, subscriptions, featured listings, or provider plans are validated.

### `chat-service`

Introduce only if the product deliberately adds scoped real-time rooms. It should not become the main interaction model.

### `ai-service`

Introduce after curated resources and search have enough quality data. Early AI should summarize, deduplicate, and assist curation rather than generate untrusted answers.

### `event-service`

Introduce when meetups and calendar workflows become a dedicated product surface.

## Data Ownership Matrix

| Domain object | Owning service | Notes |
| --- | --- | --- |
| `User` | `identity-service` | Product profile, not necessarily credentials. |
| `AdPreference` | `identity-service` | May move to `ads-service` only if ad preference becomes commercial-policy specific. |
| `Community` | `community-service` | Top-level scope. |
| `Group` | `community-service` | Topic, location, or special day container. |
| `Membership` | `community-service` | Required for group write access. |
| `Invite` | `community-service` | Migration bridge and private access. |
| `JoinRequest` | `community-service` | Decision may be surfaced through `trust-ops-service`. |
| `GroupRequest` | `community-service` | Approval workflow may be coordinated by `trust-ops-service`. |
| `RoleAssignment` | `community-service` | Scoped admin/mod/creator roles. |
| `SpecialDayGroup` | `community-service` | Time-boxed event group with cross-group invitation routing. |
| `Thread` | `content-service` | Durable conversation unit. |
| `Post` | `content-service` | Reply/message inside a thread. |
| `SavedItem` | `content-service` | User revisit list for threads/resources/ads. |
| `Resource` | `knowledge-service` | Curated knowledge card. |
| `ResourceSource` | `knowledge-service` | Links resource to source threads. |
| `Attachment` | owning domain service | Ownership depends on `ownerType`. |
| `Report` | `trust-ops-service` | User-generated report. |
| `ModerationAction` | `trust-ops-service` | Enforcement and audit. |
| `Approval` | `trust-ops-service` | Generic decision record. |
| `UserBlock` | `trust-ops-service` | Personal safety control. |
| `Ad` | `ads-service` | Ad creative and lifecycle. |

## Approval Ownership

Approvals are coordinated by `trust-ops-service`, but the target entity remains owned by its domain service.

Examples:

- ad approval decision is recorded by `trust-ops-service`
- final ad status is changed by `ads-service`
- resource approval decision is recorded by `trust-ops-service`
- final resource status is changed by `knowledge-service`
- group request decision is recorded by `trust-ops-service`
- final group creation is performed by `community-service`

This keeps audit centralized without moving business ownership into a generic approval table.

## Synchronous Communication

Allowed Phase 1 synchronous calls:

- client to `auth-gateway`
- gateway to backend services
- content-service to community-service for membership checks
- content-service to trust-ops-service for viewer-mode checks
- ads-service to identity-service for ad preference checks
- search-service to source services only when projections are missing

Synchronous calls should not become deep chains.

Preferred scale path:

- source service publishes events
- consuming service maintains a local read model
- write path checks local projection or cached authorization snapshot

## Asynchronous Communication

Use Kafka for:

- search projections
- notification triggers
- ad metrics aggregation
- moderation enforcement side effects
- audit trails
- future analytics and AI summarization

Every publishing service should use transactional outbox.

Every consuming service should be idempotent.

## Topic Naming

Use dash-separated names:

```text
{domain}-{entity}-{action}
```

Recommended Phase 1 topics:

- `identity-user-created`
- `identity-user-preferences-updated`
- `community-group-created`
- `community-membership-created`
- `community-membership-removed`
- `community-join-request-submitted`
- `community-role-assigned`
- `community-special-day-group-activated`
- `community-special-day-group-ended`
- `content-thread-created`
- `content-post-created`
- `content-thread-closed`
- `content-attachment-created`
- `knowledge-resource-published`
- `knowledge-resource-archived`
- `moderation-report-submitted`
- `moderation-action-applied`
- `moderation-user-viewer-mode-applied`
- `moderation-user-viewer-mode-expired`
- `ops-approval-created`
- `ops-approval-approved`
- `ops-approval-rejected`
- `ads-ad-submitted`
- `ads-ad-approved`
- `ads-ad-rejected`
- `ads-ad-impression-recorded`
- `ads-ad-click-recorded`
- `notification-send-requested`
- `notification-sent`
- `notification-failed`

Each topic that has a consumer should have a matching `-dlq` topic.

## Search and Memory Design

Search must not be treated as a simple database utility. It is the main reason users move away from WhatsApp, Facebook, and Telegram groups.

Phase 1 search must support:

- group-scoped search
- community-scoped search
- content type filters
- help request and listing template filters
- old link, image, video, and file discovery
- resource-first results where a curated answer exists
- duplicate deflection before a user creates a new thread

Ranking preference:

- published resources
- solved threads
- admin-picked content
- recent active discussions
- ads only when user preference allows ads

## Ad Architecture

Ads are user-generated content with stricter governance.

Phase 1 rules:

- ads are allowed as a first-class feature
- users can completely hide ads
- ad submission requires approval
- ad delivery must respect group/category placement
- ad reporting should be useful to the advertiser but privacy-safe

Advertiser report fields:

- status
- approved or rejected date
- impressions
- clicks
- saves
- useful votes or likes
- reports
- target group
- target location if configured

No Phase 1 billing:

- payment
- budget pacing
- auction logic
- external ad network mediation

Future external ad networks:

- should be isolated behind an adapter service
- must respect `showAds=false`
- must not bypass community-specific ad placement rules
- should not receive private community data unless the data sharing model is explicitly approved

## Moderation and Penalty Architecture

Moderation is part of the core product, not an admin add-on.

Phase 1 must support:

- report button for users and content
- report queue
- warning
- temporary viewer-mode penalty
- content removal
- scoped member removal
- audit log of decisions

Viewer mode:

- blocks posting and replying
- blocks ad submission
- does not remove read access
- has a start and expiry date
- is scoped to community or group

## Location Data

Users and ads should both support location metadata.

User location:

- `baseLocation`
- `locationVisibility`
- optional future finer-grained location

Ad location:

- target group
- optional target location
- optional service area

Rules:

- user location must respect privacy settings
- ad targeting can use location only when it does not expose private user data
- location should improve relevance, not become a hidden tracking mechanism

## Initial Repository Shape

When implementation starts, use a service-per-folder backend layout similar to Mindocean:

```text
api/
  auth-gateway/
  identity-service/
  community-service/
  content-service/
  knowledge-service/
  search-service/
  trust-ops-service/
  ads-service/
  notification-service/
  shared-kernel/
docs/
  product/
  roadmap/
  technology/
```

Shared code should stay small.

Allowed shared packages:

- common API error model
- correlation ID utilities
- outbox base model
- event envelope
- test utilities

Avoid shared packages that contain business rules from a domain service.

## Phase 1 Build Order

Suggested backend build sequence:

1. `auth-gateway` and `identity-service`
2. `community-service`
3. `content-service`
4. `knowledge-service`
5. `search-service` with DB-backed projections
6. `trust-ops-service`
7. `ads-service`
8. `notification-service`
9. Kafka outbox and consumer hardening
10. observability, rate limiting, and production readiness

## Open Decisions

These should be answered before implementation starts:

- will authentication use Keycloak, managed auth, or a custom identity provider?
- will Phase 1 deploy all services separately or start with selected services in a smaller deployment topology?
- will `AdPreference` live in `identity-service` or `ads-service`?
- will object storage be required in Phase 1 or will external links be enough for the first pilot?
- will search start with PostgreSQL full-text search, trigram search, or a dedicated index?
- will approvals be fully generic in `trust-ops-service` or partly owned by each domain service?
- when should external ad network monetization be introduced after owned community ads prove value?
