# Phase 3 — Admin Maturity, Curation at Scale, and Early AI

## Goal of the Phase

Phase 3 makes community operations scalable: delegation, approvals, repeatable curation, and early AI assistance—so the platform stays organized as activity grows.

## The Problems Phase 3 Solves

- admin workload depends on one person
- approvals/reviews are fragmented across screens
- curation is manual and inconsistent
- duplicates and long threads make knowledge hard to reuse
- weekly “what happened” summaries are missing

## Success Definition

Phase 3 is successful if:

- roles are delegated safely (sub-admin/mod scopes work)
- approval workflows are consistent and auditable
- curation can be executed weekly with low effort
- the system reduces admin load with summaries/deduping assistance
- “community memory” stays clean as the community scales

## Scope

### 1) Delegated Roles and Scoped Permissions

- sub-admin/mod assignment by community/location/topic scope
- permission boundaries and owner protections
- audit trail for role changes

### 2) Approval Engine (Unified)

One queue and one decision model for:

- join requests (private communities)
- ad approvals
- resource publishing
- sensitive posts
- group creation requests (if enabled)

Features:

- filters, SLAs, escalation flags
- decision templates + required reasons
- automatic user notifications
- audit log

### 3) Curation System (Repeatable)

- knowledge card lifecycle: draft → review → publish → archive
- “admin picks” and featured surfaces (weekly)
- “convert thread to knowledge card” flow
- “link resource to thread” flow

### 4) Duplicate Operations (Admin Tools)

- mark duplicates, redirect to canonical thread
- consolidate or link related threads into a single “hub”
- optional: soft-merge UX (full merge can be future work)

### 5) Early AI Assistance (Controlled)

AI should be introduced as assistive tooling, not as core semantics yet:

- thread summarization drafts for moderators
- suggested titles/tags for knowledge cards
- suggested duplicate candidates (human-reviewed)

Constraints:

- always human-in-the-loop
- no “hallucinated” authoritative answers
- explicit provenance: summaries link back to source posts

### 6) Quick Rooms (Optional, Controlled Live Layer)

If needed for community vitality:

- topic-group scoped “quick rooms”
- time-boxed, ephemeral live conversation
- valuable outcomes must be convertible into threads/resources

## Expected Outcome at the End of Phase 3

- admin ops no longer depends on a single person
- approvals + moderation are traceable and consistent
- curation is a weekly habit supported by tooling
- early AI reduces effort without compromising trust

