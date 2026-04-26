# Phase 1 — Decision Log (Source of Truth)

## Purpose

This document holds **the small set of decisions** that keep Phase 1 coherent.

If a doc needs one of these decisions, it should **reference it** instead of redefining it.

---

## K1 — Thread vs Post

- **Decision**: `Thread` is the parent entity; `Post` is a message inside the thread.
- **Implication**:
  - Help request = `Thread(type=HELP_REQUEST)` + first `Post`
  - Replies/comments = additional `Post`s

## K2 — Replies in Phase 1

- **Decision**: Replies/comments exist in Phase 1 (add `Post` to a `Thread`).
- **Non-goal**: reactions/likes are out of scope.

## K3 — Anonymous access and public previews (Phase 1)

- **Decision**: No anonymous full library/content browsing.
- **Allowed**: auth landing, invite landing, public community preview, and preview cards/snippets for selected threads/resources.
- **Locked**: full thread bodies, comments, search, library browsing, create actions, save actions, and member profiles require signup and the correct membership state.
- **Reason**: users should see enough value to switch, but the product should not become a fully public content site in Phase 1.

## K4 — Search scope (Phase 1)

- **Decision**: Search targets `Thread` and `Resource`.
- **Non-goal**: ads are not searchable in Phase 1.

## K5 — Resource creation (Phase 1)

- **Decision**: `Resource` creation is admin/mod only in Phase 1.
- **Reason**: curated-first content backbone for a pilot.

## K6 — Ads (Phase 1 minimum)

- **Decision**: No budget/schedule in Phase 1.
- **Targeting**: `Group` targeting only.
- **Workflow**: `Ad` DRAFT -> SUBMITTED -> APPROVED/REJECTED via the generic `Approval` queue with `targetType=AD`.

## K7 — Temporary viewer mode penalty

- **Decision**: Phase 1 moderation includes a temporary `VIEWER_MODE` enforcement action.
- **Behavior**: the user stays in the scoped group but can only read/search/save until the penalty expires.
- **Scope**: group scoped in Phase 1.
- **Duration**: admins/moderators must choose an expiry duration (for example 1, 3, 7, 14, or 30 days).
- **Non-goal**: viewer mode is not the same as removing a user and should not silently hide the penalty from the affected user.

## K8 — Resource scope

- **Decision**: a `Resource` belongs to exactly one `Community`.
- **Optional relevance**: a resource may have a `primaryGroupId` for topic/location filtering, but the community remains the canonical owner.
- **Reason**: the knowledge library should feel like community memory, while still being discoverable from relevant groups.

## K9 — Approval queue scope

- **Decision**: Phase 1 uses one generic approval model for join requests, ads, resources, sensitive posts, and group requests.
- **Workflow**: every approval item has a target type, target id, status, reviewer, reason, and audit timestamps.
- **Reason**: admins should not need separate operational patterns for every approval type.

## K10 — Special day groups

- **Decision**: Special day groups (e.g. Eid, 23 Nisan, Ramazan Bayramı) are time-boxed `Group` records with `type=SPECIAL_DAY`, managed via a `SpecialDayGroup` entity.
- **Behavior**: when the active window starts, invitation banners are sent to all active members of the selected invited groups. Participation is opt-in.
- **After event**: the group transitions to `ENDED` and becomes read-only. Content is preserved as an archive.
- **Creation**: admin/mod only.

## K11 — Moderation scope is group-based by default

- **Decision**: viewer mode and removal actions are scoped to a specific group in Phase 1.
- **Implication**: a member restricted in one group can still participate normally in all other groups they belong to.
- **Escalation**: platform/community suspension is a separate escalation action, not the normal viewer-mode/remove flow.
- **Reason**: proportional moderation; a member who posts off-topic in one group should not lose access to unrelated groups.

---

## Phase 1 boundary decisions (global)

### B1 — Not chat-first

- **Decision**: The home experience must not degrade into a general chat feed.

### B2 — Memory-first

- **Decision**: Search + library are first-class; “find old answers fast” is a Phase 1 requirement.

### B3 — Moderation is required (not optional)

- **Decision**: Reporting + admin resolution must exist end-to-end in Phase 1.
- **Implication**: admin resolution includes at least warn, temporary viewer mode, content removal, and scoped member removal.

---

## Implementation readiness

There are no open product decisions blocking Phase 1 implementation in this log.

If new uncertainty appears during coding, add it here as an explicit decision before changing the model or API.
