# Phase 1 Domain Model

## Goal

Translate Phase 1 flows and screens into a domain model that is:

- minimal (pilot-friendly)
- consistent with the product backbone (threads, requests, library, moderation, ads)
- explicit about ownership, status, and scope

## Phase 1 Modeling Decisions (recap)

See decision log: `phase-1-decisions.md` (K1-K11).

---

## Entities (Phase 1)

### `User`

- **Purpose**: product-level user profile after authentication.
- **Key fields**
  - `id`
  - `displayName`
  - `baseLocation`
  - `locationVisibility`: `PUBLIC | MEMBERS_ONLY | HIDDEN`
  - `notificationPreferencesJson` (nullable)
  - `status`: `ACTIVE | SUSPENDED | DELETED`
  - `createdAt`, `updatedAt`

### `Community`

- **Purpose**: top-level scope for groups and admin ownership.
- **Key fields**
  - `id`
  - `name`
  - `visibility`: `PUBLIC | PRIVATE` (affects join flow)
  - `createdAt`, `createdByUserId`

### `Group`

- **Purpose**: topic or location container for threads/resources.
- **Key fields**
  - `id`
  - `communityId`
  - `name`
  - `type`: `TOPIC | LOCATION | SPECIAL_DAY` (optional but helpful for navigation rules)
  - `visibility`: `PUBLIC | PRIVATE` (optional; if absent, inherit from community)

### `Membership`

- **Purpose**: membership state for a user in a community or group.
- **Key fields**
  - `id`
  - `userId`
  - `scopeType`: `COMMUNITY | GROUP`
  - `scopeId`
  - `status`: `PENDING | ACTIVE | LEFT | REMOVED`
  - `sourceInviteId` (nullable)
  - `joinedAt` (nullable)
  - `removedAt` (nullable)
  - `createdAt`, `updatedAt`

### `Invite`

- **Purpose**: migration and private access entry point.
- **Key fields**
  - `id`
  - `communityId`
  - `groupId` (nullable)
  - `inviteType`: `LINK | QR | DIRECT | BULK_IMPORT | SPECIAL_DAY`
  - `tokenHash`
  - `createdByUserId`
  - `createdByRole`: `MEMBER | MOD | ADMIN`
  - `status`: `ACTIVE | REVOKED | EXPIRED`
  - `maxUses` (nullable)
  - `usedCount`
  - `expiresAt` (nullable)
  - `requiresApproval`: boolean
  - `allowedChannels`: `LINK | EMAIL | SMS | WHATSAPP | QR` list
  - `createdAt`

### `InviteRecipient`

- **Purpose**: delivery/status tracking for direct or bulk invites without storing unnecessary contact data in plain text.
- **Key fields**
  - `id`
  - `inviteId`
  - `targetUserId` (nullable until matched after signup)
  - `contactHash` (nullable when target user already exists)
  - `contactDisplayMasked` (nullable, e.g. `a***@mail.com` or `+44***123`)
  - `deliveryChannel`: `EMAIL | SMS | WHATSAPP | MANUAL_COPY`
  - `status`: `QUEUED | SENT | OPENED | ACCEPTED | EXPIRED | REVOKED | FAILED`
  - `lastSentAt` (nullable)
  - `acceptedAt` (nullable)
  - `createdAt`, `updatedAt`

### `JoinRequest`

- **Purpose**: request to join a private community/group.
- **Key fields**
  - `id`
  - `userId`
  - `communityId`
  - `groupId` (nullable)
  - `sourceInviteId` (nullable)
  - `answersJson` (nullable)
  - `status`: `PENDING | APPROVED | REJECTED | CANCELLED`
  - `createdAt`, `decidedAt` (nullable)

### `GroupRequest`

- **Purpose**: request to create a new location/topic group when the requester does not have direct create permission.
- **Key fields**
  - `id`
  - `requestedByUserId`
  - `communityId`
  - `proposedName`
  - `proposedType`: `TOPIC | LOCATION`
  - `reason` (nullable)
  - `status`: `PENDING | APPROVED | REJECTED | CANCELLED`
  - `createdAt`, `decidedAt` (nullable)

### `Thread`

- **Purpose**: durable conversation unit (question, help request, listing as thread types).
- **Key fields**
  - `id`
  - `groupId`
  - `type`: `HELP_REQUEST | QUESTION | LISTING | DISCUSSION`
  - `status`: `OPEN | MATCH_FOUND | SOLVED | CLOSED | REMOVED`
  - `title`
  - `templateKey` (nullable)
  - `templateDataJson` (nullable; required for structured help requests/listings)
  - `contentLocation` (nullable)
  - `createdByUserId`
  - `createdAt`, `updatedAt`
  - `closedAt` (nullable)

### `Post`

- **Purpose**: message inside a thread (first post carries the “payload”).
- **Key fields**
  - `id`
  - `threadId`
  - `authorUserId`
  - `body`
  - `status`: `ACTIVE | REMOVED`
  - `createdAt`
  - `editedAt` (nullable)
  - `isFirstPost` (optional convenience)

### `Resource`

- **Purpose**: curated knowledge card / solution card.
- **Phase 1 rule**: created by admin/mod.
- **Scope rule**: belongs to one `Community`; `primaryGroupId` is optional relevance metadata.
- **Key fields**
  - `id`
  - `communityId`
  - `primaryGroupId` (nullable)
  - `title`
  - `body` (steps/checklist)
  - `tags` (optional)
  - `status`: `DRAFT | PUBLISHED | ARCHIVED`
  - `createdByUserId`
  - `createdAt`, `updatedAt`

### `ResourceSource`

- **Purpose**: provenance links from a resource to one or more threads.
- **Key fields**
  - `id`
  - `resourceId`
  - `threadId`

### `Attachment`

- **Purpose**: media/link archive item attached to a post, resource, or ad.
- **Key fields**
  - `id`
  - `ownerType`: `POST | RESOURCE | AD`
  - `ownerId`
  - `type`: `IMAGE | VIDEO | FILE | LINK`
  - `url`
  - `title` (nullable)
  - `metadataJson` (nullable)
  - `createdByUserId`
  - `createdAt`

### `Report`

- **Purpose**: user-generated report against content or users.
- **Key fields**
  - `id`
  - `reporterUserId`
  - `targetType`: `THREAD | POST | RESOURCE | AD | USER`
  - `targetId`
  - `reasonCode`: `SPAM | SCAM | HARASSMENT | OFF_TOPIC | INAPPROPRIATE_CONTENT | OTHER`
  - `note` (nullable)
  - `status`: `SUBMITTED | IN_REVIEW | RESOLVED | DISMISSED`
  - `createdAt`, `resolvedAt` (nullable)
  - `resolvedByUserId` (nullable)

### `UserBlock`

- **Purpose**: user-level block separate from admin moderation.
- **Key fields**
  - `id`
  - `blockerUserId`
  - `blockedUserId`
  - `createdAt`

### `SavedItem`

- **Purpose**: lets users revisit useful threads, resources, or ads.
- **Key fields**
  - `id`
  - `userId`
  - `targetType`: `THREAD | RESOURCE | AD`
  - `targetId`
  - `createdAt`

### `ModerationAction`

- **Purpose**: audit and enforce admin/moderator decisions after reports or direct member review.
- **Key fields**
  - `id`
  - `sourceReportId` (nullable)
  - `targetType`: `USER | THREAD | POST | RESOURCE | AD`
  - `targetId`
  - `targetUserId` (nullable; required for user-scoped actions)
  - `createdByUserId`
  - `scopeType`: `COMMUNITY | GROUP`
  - `scopeId`
  - `actionType`: `WARN | VIEWER_MODE | REMOVE_CONTENT | REMOVE_MEMBER | ESCALATE`
  - `reasonCode`: `SPAM | SCAM | HARASSMENT | OFF_TOPIC | INAPPROPRIATE_CONTENT | OTHER`
  - `note` (nullable)
  - `startsAt`
  - `expiresAt` (required for `VIEWER_MODE`, nullable for one-off actions)
  - `status`: `ACTIVE | EXPIRED | REVOKED`
  - `createdAt`, `updatedAt`

### `AdPreference`

- **Purpose**: enforce user choice about seeing ads.
- **Key fields**
  - `userId`
  - `showAds`: boolean
  - `categoryOptIns` (optional, Phase 1 can be empty)
  - `updatedAt`

### `Ad`

- **Purpose**: creator-submitted ad creative targeted to a group.
- **Key fields**
  - `id`
  - `ownerUserId`
  - `targetGroupId`
  - `title`
  - `body`
  - `imageUrl` (nullable)
  - `status`: `DRAFT | SUBMITTED | APPROVED | REJECTED | PAUSED`
  - `submittedAt` (nullable)
  - `approvedAt` (nullable)
  - `pausedAt` (nullable)
  - `createdAt`, `updatedAt`

### `Approval`

- **Purpose**: generic decision record for admin/platform approval workflows.
- **Key fields**
  - `id`
  - `targetType`: `JOIN_REQUEST | AD | RESOURCE | THREAD | GROUP_REQUEST`
  - `targetId`
  - `submittedByUserId`
  - `scopeType`: `COMMUNITY | GROUP`
  - `scopeId`
  - `status`: `PENDING | APPROVED | REJECTED`
  - `reviewerUserId` (nullable until decided)
  - `reason` (nullable; required if rejected)
  - `createdAt`, `decidedAt` (nullable)

### `RoleAssignment`

- **Purpose**: scoped authorization for admin/mod/creator.
- **Key fields**
  - `id`
  - `userId`
  - `role`: `MEMBER | CREATOR | MOD | ADMIN`
  - `scopeType`: `PLATFORM | COMMUNITY | GROUP`
  - `scopeId` (nullable when PLATFORM)
  - `createdAt`

### `SpecialDayGroup`

- **Purpose**: time-boxed community group for special days (e.g. Eid, national holidays). Members from other groups in the same community receive an invitation banner during the active window.
- **Key fields**
  - `id`
  - `communityId`
  - `groupId` (the underlying `Group` record; type is always `SPECIAL_DAY`)
  - `name`
  - `eventDate`
  - `activeFrom`
  - `activeTo`
  - `invitedGroupIds` (list of group ids whose members receive the invitation banner)
  - `status`: `UPCOMING | ACTIVE | ENDED`
  - `createdByUserId`
  - `createdAt`, `updatedAt`

---

## Relationships (high-level)

- `User 0..* Membership`
- `User 0..* JoinRequest`
- `User 0..* GroupRequest`
- `Community 1..* Group`
- `Community 0..* SpecialDayGroup`
- `SpecialDayGroup 1..1 Group`
- `Community 0..* Invite`
- `Community 0..* Membership`
- `Community 0..* GroupRequest`
- `Group 0..* Membership`
- `Invite 0..* Membership`
- `Invite 0..* JoinRequest`
- `Invite 0..* InviteRecipient`
- `Group 1..* Thread`
- `Thread 1..* Post`
- `Community 1..* Resource`
- `Resource 0..* ResourceSource -> Thread`
- `Post/Resource/Ad 0..* Attachment`
- `User 1..* Report`
- `User 0..* UserBlock`
- `User 0..* SavedItem`
- `User 0..* ModerationAction`
- `Report 0..* ModerationAction`
- `User 0..* RoleAssignment`
- `User 0..1 AdPreference`
- `User(CREATOR) 0..* Ad`
- `Approval -> target entity by targetType/targetId`

---

## Phase 1 “Must-have” invariants

- A `Thread` must always belong to exactly one `Group`.
- A `Post` must always belong to exactly one `Thread`.
- A `HELP_REQUEST` thread must have a `title` and a non-empty first `Post.body`.
- A structured `HELP_REQUEST` or `LISTING` must include `templateKey` and valid `templateDataJson`.
- If `Resource.primaryGroupId` is set, that group must belong to the same community as `Resource.communityId`.
- A `SavedItem` must point to a visible target for that user at the time it is saved.
- A user can only create/reply in a group if they have active membership and no active viewer-mode penalty in that scope.
- An `Ad` must target exactly one group in Phase 1; budget, schedule, and advanced targeting are out of scope.
- Only an approved ad can be paused.
- `Ad` delivery must check `AdPreference.showAds == true` for the receiving user.
- `Approval.status=REJECTED` requires a `reason`.
- An active `ModerationAction(actionType=VIEWER_MODE)` must block create/reply/comment/ad actions within its scope.
- `VIEWER_MODE` must target a user, so `targetType=USER` and `targetUserId` are required.
- `VIEWER_MODE` must always have an `expiresAt` value.
- A `ModerationAction` scope is always `GROUP` or `COMMUNITY`; it is never community-wide by default. Removing or restricting a member from one group does not affect their membership or permissions in other groups.
- `SpecialDayGroup.activeTo` must be after `SpecialDayGroup.activeFrom`.
- After `activeTo`, the underlying `Group` becomes read-only (no new threads or posts); existing content is preserved as an archive.
- Invitation banners are sent to all active members of `invitedGroupIds` when `status` transitions to `ACTIVE`.
- A direct `Invite` must have at least one `InviteRecipient`.
- An invite to a group grants or requests access only for that group; it does not grant access to sibling groups.
- `InviteRecipient.contactHash` must be derived from a normalized contact value and must not expose raw email/phone in operational views.
- `InviteRecipient.status=ACCEPTED` requires either `targetUserId` or a created `Membership`/`JoinRequest` linked to the invite.
