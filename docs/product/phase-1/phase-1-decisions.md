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

## K3 — Anonymous access (Phase 1)

- **Decision**: No anonymous library/content browsing.
- **Allowed**: auth landing + join/login/verification, plus any minimal invite/preview entry point required by the join flow.

## K4 — Search scope (Phase 1)

- **Decision**: Search targets `Thread` and `Resource`.
- **Non-goal**: ads are not searchable in Phase 1.

## K5 — Resource creation (Phase 1)

- **Decision**: `Resource` creation is admin/mod only in Phase 1.
- **Reason**: curated-first content backbone for a pilot.

## K6 — Ads (Phase 1 minimum)

- **Decision**: No budget/schedule in Phase 1.
- **Targeting**: `Group` targeting only.
- **Workflow**: `Ad` DRAFT → SUBMITTED → APPROVED/REJECTED via `Approval`.

---

## Phase 1 boundary decisions (global)

### B1 — Not chat-first

- **Decision**: The home experience must not degrade into a general chat feed.

### B2 — Memory-first

- **Decision**: Search + library are first-class; “find old answers fast” is a Phase 1 requirement.

### B3 — Moderation is required (not optional)

- **Decision**: Reporting + admin resolution must exist end-to-end in Phase 1.

---

## Open decisions (must be resolved before implementation)

These are intentionally centralized here so they don’t appear as inconsistencies across docs.

- **O1 — Resource scope**: does a `Resource` belong to a `Community` or a `Group`?  
  Current docs: **mixed**; Phase 1 should pick one.
- **O2 — Public preview depth**: if preview is used for acquisition, what is visible pre-join and what is always locked?

