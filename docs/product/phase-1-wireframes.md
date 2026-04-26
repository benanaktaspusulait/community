# Phase 1 Low-Fidelity Wireframes (Professional Draft)

## Goal

This is **not visual design**. It is a low-fidelity wireframe pack meant to validate Phase 1 product logic:

- navigation and information architecture
- creation flows and guardrails
- key states (loading/empty/error/no-permission)
- moderation and approvals

## Phase 1 Decisions (K1–K6)

See decision log: `docs/product/phase-1/phase-1-decisions.md` (K1–K6).

## Conventions (used across all wireframes)

- **Top bar**: Back (optional) / Title / Primary action (optional).
- **Bottom bar**: Home / Search / Create / Library / Profile (Admin appears only for roles).
- **Card**: `[Type badge] Title` + snippet + meta + tap target.
- **Modal**: used for lightweight actions like report/reason selection.

---

## Critical Journeys (Phase 1 backbone)

### J1) Join -> Onboarding -> First value

`AuthLanding` → `Join` → `VerifyCode` → `OnboardingInterests` → `OnboardingDone` → `HomeFeed`

### J2) Search -> Find -> Resolve without posting

`HomeFeed` → `Search` → (result) → `ThreadDetail` or `ResourceDetail`

### J3) Create help request -> Replies -> Close

`HomeFeed` → `CreateHelpRequest` → `ThreadDetail` → (reply loop) → close

### J4) Ads off (user) + Ad creation (creator) + Approval (admin)

User: `Profile/Settings` → `AdPreferences` (turn off)

Creator: `MyAds` → `CreateAd` → submit → `AdDetail`

Admin: `AdminApprovalQueue` → `ApprovalDetail` → approve/reject

### J5) Report content -> Admin resolves

`ThreadDetail`/`ResourceDetail` → `ReportModal` → `AdminReportsQueue` → resolve/dismiss

---

## Screens

### S1) `AuthLanding` (Anonymous)

- **Purpose**: Entry point for new/returning users. Explain value; route to join/login.
- **Primary actions**: Join, Login.
- **States**: default, maintenance banner (optional).

```
┌──────────────────────────────────────────────────────────────┐
│ COMMUNITY PLATFORM                                            │
│                                                              │
│ Find answers fast. Keep knowledge. Stay on-topic.             │
│                                                              │
│ [ Join ]                                      [ Login ]       │
│                                                              │
│ Footer links (Terms, Privacy)                                 │
└──────────────────────────────────────────────────────────────┘
```

### S2) `Join` (Anonymous)

- **Purpose**: Create account with minimal friction.
- **Primary actions**: Continue, resend code (if step combined), back.
- **Validation**: required identity; rate limit.
- **States**: editing, submitting, error (invalid identity), rate-limited.

```
┌──────────────────────────────────────────────────────────────┐
│ < Back                                 Create account         │
├──────────────────────────────────────────────────────────────┤
│ Email / Phone                                                  │
│ [________________________________________________________]     │
│                                                              │
│ [ Continue ]                                                  │
│                                                              │
│ Inline error message area                                     │
└──────────────────────────────────────────────────────────────┘
```

### S3) `VerifyCode` (Anonymous)

- **Purpose**: Verify ownership.
- **Primary actions**: Verify, Resend.
- **States**: editing, verifying, expired, invalid-code, success.

```
┌──────────────────────────────────────────────────────────────┐
│ < Back                                      Verify             │
├──────────────────────────────────────────────────────────────┤
│ Enter verification code                                        │
│ [ _ ] [ _ ] [ _ ] [ _ ] [ _ ] [ _ ]                            │
│                                                              │
│ [ Verify ]                          Resend code                │
│                                                              │
│ Helper text: “Code expires in 10 minutes.”                     │
└──────────────────────────────────────────────────────────────┘
```

### S4) `OnboardingInterests` (Authenticated)

- **Purpose**: Seed relevance quickly.
- **Primary actions**: Next, Skip.
- **States**: loading recommendations, editing, saving, error.

```
┌──────────────────────────────────────────────────────────────┐
│ Step 1/3                                 Skip                  │
├──────────────────────────────────────────────────────────────┤
│ Choose interests                                               │
│                                                              │
│ [ ] Housing   [ ] Jobs     [ ] Legal                          │
│ [ ] Health    [ ] School   [ ] Travel                         │
│ [ ] Services  [ ] Local    [ ] Other                          │
│                                                              │
│ [ Back ]                                           [ Next ]   │
└──────────────────────────────────────────────────────────────┘
```

### S5) `HomeFeed` (Authenticated)

- **Purpose**: First-value surface; show curated + high-signal items.
- **Primary actions**: Search, Create.
- **States**:
  - loading
  - empty (seed content missing) → admin hint (role-based)
  - ads off (ad slots hidden)
  - error

```
┌──────────────────────────────────────────────────────────────┐
│ Search…                                      [+ Create]        │
├──────────────────────────────────────────────────────────────┤
│ Pinned / Admin pick                                               │
│ ┌──────────────────────────────────────────────────────────┐  │
│ │ [Resource] “How to rent a room in the UK”                 │  │
│ │ Checklist • Updated 2d ago                                │  │
│ └──────────────────────────────────────────────────────────┘  │
│                                                              │
│ Feed                                                         │
│ ┌──────────────────────────────────────────────────────────┐  │
│ │ [Help request] “Looking for a room in Milton Keynes”      │  │
│ │ Budget • Move-in date • Group • 3 replies                 │  │
│ └──────────────────────────────────────────────────────────┘  │
│ ┌──────────────────────────────────────────────────────────┐  │
│ │ [Thread] “Driver’s license change steps”                  │  │
│ │ Solved • Group • 12 replies                               │  │
│ └──────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### S6) `Search` (Authenticated)

- **Purpose**: Entry to community memory.
- **Primary actions**: Open result, Save search, Create help request (if no results).
- **States**: emptyQuery, loading, results, noResults, error.
- **Filters**: Type (Thread/Resource), Group, Status (optional), Date (optional).

```
┌──────────────────────────────────────────────────────────────┐
│ [ Search ________________________________________________ ]   │
│ Type: (Thread) (Resource)   Group: [All v]   Sort: [Best v]    │
├──────────────────────────────────────────────────────────────┤
│ Results                                                      │
│ ┌──────────────────────────────────────────────────────────┐  │
│ │ [Resource] “Renting checklist”                            │  │
│ │ Tags • Updated • Open                                     │  │
│ └──────────────────────────────────────────────────────────┘  │
│ ┌──────────────────────────────────────────────────────────┐  │
│ │ [Thread] “Room contract pitfalls”                         │  │
│ │ Solved • Replies • Open                                   │  │
│ └──────────────────────────────────────────────────────────┘  │
│                                                              │
│ [ Save this search ]                                          │
└──────────────────────────────────────────────────────────────┘
```

**No-results state**

```
┌──────────────────────────────────────────────────────────────┐
│ No results for “…”                                            │
│ Try broadening filters, or create a help request.             │
│                                                              │
│ [ Create help request ]                                       │
└──────────────────────────────────────────────────────────────┘
```

### S7) `CreateHelpRequest` (Authenticated)

- **Purpose**: Capture an outcome-oriented need in a structured way.
- **Primary actions**: Publish, Save draft.
- **Validation**: group required, title required, body required, optional template fields.
- **States**: drafting, validating, submitting, success (route to thread), error.

```
┌──────────────────────────────────────────────────────────────┐
│ < Back                                Create help request     │
├──────────────────────────────────────────────────────────────┤
│ Group *                                                        │
│ [ Select group v ]                                             │
│                                                              │
│ Title *                                                        │
│ [________________________________________________________]     │
│                                                              │
│ Details *                                                      │
│ [________________________________________________________]     │
│ [________________________________________________________]     │
│                                                              │
│ Optional fields (template)                                     │
│ Budget [______]  Location [______]  Move-in date [____]        │
│                                                              │
│ [ Save draft ]                                [ Publish ]      │
└──────────────────────────────────────────────────────────────┘
```

### S8) `ThreadDetail` (Authenticated)

- **Purpose**: Durable conversation and resolution.
- **Primary actions**: Reply, Report; Close (owner).
- **States**: loading, open, closed, removed, no-permission (private group).

```
┌──────────────────────────────────────────────────────────────┐
│ < Back                         “Looking for a room”  [OPEN]   │
├──────────────────────────────────────────────────────────────┤
│ Original post                                                  │
│ Body…                                                         │
│ Meta: Group • Created by • Time                                │
│                                                              │
│ Replies                                                       │
│ ┌──────────────────────────────────────────────────────────┐  │
│ │ Author • Time                                              │  │
│ │ Reply body…                                                │  │
│ └──────────────────────────────────────────────────────────┘  │
│                                                              │
│ Reply                                                         │
│ [________________________________________________________]     │
│ [ Send ]        [ Report ]                 [ Close ] (owner)   │
└──────────────────────────────────────────────────────────────┘
```

### S9) `LibraryHome` (Authenticated)

- **Purpose**: Curated, evergreen knowledge.
- **Primary actions**: Open category, open resource.
- **States**: loading, empty (needs seeding), error.

```
┌──────────────────────────────────────────────────────────────┐
│ Library                                                       │
├──────────────────────────────────────────────────────────────┤
│ Categories                                                    │
│ [ Housing ] [ Legal ] [ Health ] [ Jobs ] [ Services ]        │
│                                                              │
│ Featured                                                      │
│ ┌──────────────────────────────────────────────────────────┐  │
│ │ “Renting checklist (UK)”                                  │  │
│ └──────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### S10) `ResourceDetail` (Authenticated)

- **Purpose**: Read a solution/FAQ with provenance.
- **Primary actions**: Report, Share, Open source threads (if shown).
- **States**: loading, ready, removed, error.

```
┌──────────────────────────────────────────────────────────────┐
│ < Back                                     Resource            │
├──────────────────────────────────────────────────────────────┤
│ Title                                                         │
│ Updated: …   Category: …   Tags: …                             │
│                                                              │
│ Content body (steps/checklist)                                 │
│ - step                                                        │
│ - step                                                        │
│                                                              │
│ Sources (optional)                                            │
│ - Thread link                                                 │
│                                                              │
│ [ Report ]   [ Share ]                                        │
└──────────────────────────────────────────────────────────────┘
```

### S11) `ReportModal` (Modal/Screen)

- **Purpose**: Fast reporting with reason codes.
- **Primary actions**: Submit.
- **States**: editing, submitting, submitted, error, alreadyReported.

```
┌──────────────────────────────────────────────────────────────┐
│ Report                                                        │
├──────────────────────────────────────────────────────────────┤
│ Reason *                                                      │
│ ( ) Spam   ( ) Scam   ( ) Harassment   ( ) Off-topic          │
│ ( ) Other                                                     │
│                                                              │
│ Optional note                                                 │
│ [________________________________________________________]     │
│                                                              │
│ [ Cancel ]                                   [ Submit ]       │
└──────────────────────────────────────────────────────────────┘
```

### S12) `AdPreferences` (Authenticated)

- **Purpose**: Explicit user control over ad visibility.
- **Primary actions**: Save.
- **States**: loading, editing, saving, error.

```
┌──────────────────────────────────────────────────────────────┐
│ Ad preferences                                                │
├──────────────────────────────────────────────────────────────┤
│ Show ads                                                      │
│ ( ) Yes   ( ) No                                              │
│                                                              │
│ Optional categories                                           │
│ [ ] Housing  [ ] Jobs  [ ] Legal  [ ] Services                │
│                                                              │
│ [ Save ]                                                      │
└──────────────────────────────────────────────────────────────┘
```

### S13) `MyAds` (Role: CREATOR)

- **Purpose**: Manage ads and track status.
- **Primary actions**: Create ad, open ad.
- **States**: empty, list, error.

```
┌──────────────────────────────────────────────────────────────┐
│ My ads                                         [ Create ]     │
├──────────────────────────────────────────────────────────────┤
│ - “Accountant service”        SUBMITTED   Updated …           │
│ - “Room cleaning”             APPROVED    Updated …           │
│ - “Moving van”                REJECTED    Updated …           │
└──────────────────────────────────────────────────────────────┘
```

### S14) `CreateAd` (Role: CREATOR)

- **Purpose**: Create an ad and submit for approval.
- **Primary actions**: Submit for review, Save draft.
- **Validation**: target group required, title/body required.
- **States**: drafting, validating, submitting, error, submitted.

```
┌──────────────────────────────────────────────────────────────┐
│ < Back                                       Create ad         │
├──────────────────────────────────────────────────────────────┤
│ Target group *                                                │
│ [ Select group v ]                                            │
│                                                              │
│ Title *                                                      │
│ [________________________________________________________]     │
│                                                              │
│ Body *                                                       │
│ [________________________________________________________]     │
│ [________________________________________________________]     │
│                                                              │
│ Image (optional)                                              │
│ [ Upload ]                                                    │
│                                                              │
│ [ Save draft ]                      [ Submit for review ]      │
└──────────────────────────────────────────────────────────────┘
```

### S15) `AdminApprovalQueue` (Role: ADMIN/MOD)

- **Purpose**: Centralize decisions.
- **Primary actions**: Open item, filter.
- **States**: empty, list, error.

```
┌──────────────────────────────────────────────────────────────┐
│ Approval queue                           Filter: [All v]       │
├──────────────────────────────────────────────────────────────┤
│ - Ad #123   SUBMITTED   Owner • Group • Time                   │
│ - Ad #124   SUBMITTED   Owner • Group • Time                   │
└──────────────────────────────────────────────────────────────┘
```

### S16) `ApprovalDetail` (Role: ADMIN/MOD)

- **Purpose**: Make an approval decision with context.
- **Primary actions**: Approve, Reject.
- **States**: loading, pending, alreadyHandled.

```
┌──────────────────────────────────────────────────────────────┐
│ < Back                                   Approval detail       │
├──────────────────────────────────────────────────────────────┤
│ Preview                                                       │
│ Target group • Owner info • Submission time                    │
│ Title                                                         │
│ Body…                                                         │
│ Image (optional)                                              │
│                                                              │
│ Reject reason (required if rejecting)                          │
│ [________________________________________________________]     │
│                                                              │
│ [ Approve ]                                [ Reject ]          │
└──────────────────────────────────────────────────────────────┘
```

---

## What this wireframe pack validates (checklist)

- Join + onboarding produces a non-empty first-value experience
- Search can resolve needs without forcing posting
- Help request creation is structured and guarded by required fields
- Thread detail supports durable replies + closure
- Reporting is lightweight and feeds admin workflows
- Ad preference is explicit and enforceable in surfaces
- Ad creation and approval loop is coherent

