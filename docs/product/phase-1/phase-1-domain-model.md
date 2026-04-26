# Phase 1 Domain Model

## Goal

Translate Phase 1 flows and screens into a domain model that is:

- minimal (pilot-friendly)
- consistent with the product backbone (threads, requests, library, moderation, ads)
- explicit about ownership, status, and scope

## Phase 1 Modeling Decisions (recap)

See decision log: `phase-1-decisions.md` (K1–K6).

---

## Entities (Phase 1)

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
  - `type`: `TOPIC | LOCATION` (optional but helpful for navigation rules)
  - `visibility`: `PUBLIC | PRIVATE` (optional; if absent, inherit from community)

### `Thread`

- **Purpose**: durable conversation unit (question, help request, listing as thread types).
- **Key fields**
  - `id`
  - `groupId`
  - `type`: `HELP_REQUEST | QUESTION | LISTING | DISCUSSION`
  - `status`: `OPEN | CLOSED`
  - `title`
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
  - `createdAt`
  - `editedAt` (nullable)
  - `isFirstPost` (optional convenience)

### `Resource`

- **Purpose**: curated knowledge card / solution card.
- **Phase 1 rule**: created by admin/mod.
- **Key fields**
  - `id`
  - `communityId` (**Open decision O1** in decision log: confirm community vs group scope)
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

### `Report`

- **Purpose**: user-generated report against content or users.
- **Key fields**
  - `id`
  - `reporterUserId`
  - `targetType`: `THREAD | POST | RESOURCE | AD | USER`
  - `targetId`
  - `reasonCode`: `SPAM | SCAM | HARASSMENT | OFF_TOPIC | OTHER`
  - `note` (nullable)
  - `status`: `SUBMITTED | IN_REVIEW | RESOLVED | DISMISSED`
  - `createdAt`, `resolvedAt` (nullable)
  - `resolvedByUserId` (nullable)

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
  - `status`: `DRAFT | SUBMITTED | APPROVED | REJECTED`
  - `createdAt`, `updatedAt`

### `Approval`

- **Purpose**: decision record for ad approvals (and optionally other items later).
- **Key fields**
  - `id`
  - `targetType`: `AD` (Phase 1)
  - `targetId` (adId)
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

### `SavedSearch`

- **Purpose**: retention + “memory-first” utility (Phase 1 enables save/run/delete).
- **Key fields**
  - `id`
  - `userId`
  - `query`
  - `filtersJson` (type, group, etc.)
  - `createdAt`
  - `lastRunAt` (nullable)

---

## Relationships (high-level)

- `Community 1..* Group`
- `Group 1..* Thread`
- `Thread 1..* Post`
- `Community/Group 1..* Resource`
- `Resource 0..* ResourceSource -> Thread`
- `User 1..* Report`
- `User 0..* RoleAssignment`
- `User 0..* SavedSearch`
- `User 0..1 AdPreference`
- `User(CREATOR) 0..* Ad`
- `Ad 0..1 Approval` (Phase 1: one approval record per ad)

---

## Phase 1 “Must-have” invariants

- A `Thread` must always belong to exactly one `Group`.
- A `Post` must always belong to exactly one `Thread`.
- A `HELP_REQUEST` thread must have a `title` and a non-empty first `Post.body`.
- `Ad` delivery must check `AdPreference.showAds == true` for the receiving user.
- `Approval.status=REJECTED` requires a `reason`.

