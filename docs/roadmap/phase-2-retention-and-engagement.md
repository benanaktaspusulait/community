# Phase 2 — Retention, Validation, and Early Trust

## Goal of the Phase

Phase 2 makes users return not only when they have an urgent need, but **regularly**—and helps them begin to understand what (and who) is trustworthy.

Phase 1 is sufficient for migration. Phase 2 is required for repeat usage and early trust signals.

## The Problem Phase 2 Solves

Typical issues after Phase 1:

- users arrive only at the moment of need, then leave
- they miss relevant new content
- they must repeat the same searches
- help requests stay “open” without meaningful matching

Phase 2 answers:

> Why would a user come back more than once a week?

Key decision added via feedback:

> Basic trust/validation signals should not wait until Phase 4; they must arrive earlier as part of retention.

## Success Definition

Phase 2 is successful if:

- users don’t need to run the same search repeatedly
- users return via saved searches or alerts
- users can keep track of open help requests and outcomes
- following topics/links is frictionless
- the product creates a clear weekly “pull”
- users can distinguish admin/community-validated information from unvalidated content

## Scope

### 1) Subscriptions and Personal Feed

Users should follow what they care about, not the entire community.

Phase 2 includes:

- following topic groups
- following locations (with multi-location support)
- a personal feed that boosts selected topics
- mute/unfollow controls
- optionally: a dedicated “Help Requests” feed

### 1.1) Location Preferences and Sensitivity

The user-side location model matures:

- update base location
- follow multiple locations
- narrow/widen location scope for search and alerts
- adjust location visibility granularity

Example:

- a user lives in Manchester but follows London jobs
- their profile shows only “North West”

### 2) Saved Search and Keyword Alerts (Core Differentiator)

Make the system monitor needs on the user’s behalf:

- alerts like “MK room”, “Turkish accountant”, “contractor jobs”
- notifications when saved search matches appear
- push/email notifications (configurable)
- pause/mute/edit alerts

### 3) Duplicate Reduction Flows

When creating a new post/request, show similar content first:

- suggest near-title threads
- if a close match exists, show it before allowing a new one
- if existing answers are sufficient, redirect instead of duplicating

**Guidance now, merges later:**

- Phase 2 focuses on deflection and reducing duplicates
- admin/mod can mark a duplicate thread as “redirected to main thread”
- full thread merge/move of replies becomes Phase 3 admin-ops maturity
- notify users who posted a duplicate with a link to the main thread

### 4) Help Request Matching

Help requests become active matching surfaces:

- “looking for a room” can match relevant listings
- “looking for an accountant” can match providers or past recommendation threads
- optionally notify eligible providers/advertisers (policy-controlled)

Matching quality signals:

- “Helpful” / “Not relevant” feedback on suggestions
- ability to mark request state as “Match found”

### 4.1) Outcome and Lifecycle

Phase 1 status becomes a meaningful lifecycle:

- clearer transitions (open → in progress → matched → solved/closed)
- reminders/pings to update status (opt-in)
- “solved” artifacts feed back into search and library

### 5) Early Trust and Validation (Lightweight)

Introduce minimal trust signals that improve retention without heavy verification:

- admin-validated resources/solution cards badges
- “community-approved” provider guide pages (initially curated)
- basic contributor signals (e.g. “helpful contributor”)

## Expected Outcome at the End of Phase 2

- users return because the platform tracks their needs (saved search + alerts)
- help requests convert more often due to matching
- duplicates decrease materially
- early trust signals are visible and used in decisions

