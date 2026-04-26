# Phase 1 Product Flows

## Goal

This document translates the Phase 1 roadmap into real user and admin flows.

The goal of Phase 1 is not to build a new social media or chat app. The goal is to turn the knowledge inside existing WhatsApp, Facebook Groups, and Telegram communities into something that is:

- searchable
- durable
- topic-based
- approvable
- filterable
- respectful of ad preferences

## Design Principles

- `Memory-first`: If past knowledge cannot be found, the product fails.
- `Structured-first`: Help requests, listings, questions, and recommendations must not be created as plain messages.
- `Curated-first`: At pilot start, valuable knowledge should be created with admin/mod support.
- `No general chat feed`: The main experience must not degrade into a free-form chat feed.
- `Topic discipline`: Off-topic drift must be controllable (e.g. travel in health group, ads in travel group).
- `User-controlled ads`: Anyone may create ads; seeing ads is a user choice.
- `Scoped moderation`: Admins manage only the communities/locations/topics they are responsible for.

## Actors

| Actor | Definition |
| --- | --- |
| Visitor | Arrives via a public preview or shared link, not yet a member |
| Member | A normal user who joined a community or group |
| Power user | Answers questions, suggests resources, generates high-signal contributions |
| Advertiser / provider | Person or business that wants to post an ad/service/commercial notice |
| Moderator | Scoped authority managing content and member behavior |
| Sub-admin | Admin responsible for a specific location group or topic group |
| Community admin | Responsible for operating a community |
| Platform admin | Controls platform-level policies and community creation |

## Phase 1 Flow Priorities

| Priority | Flow |
| --- | --- |
| P0 | Public preview, invite/join, direct user invite, onboarding, feed, search, structured post, help request, comment/thread, report, ad preference |
| P0 | Admin approval queue, viewer-mode penalty, member removal, pinned/knowledge-card management, topic/location setup |
| P1 | Ad creation + basic ad approval, QR invite, data request, media/link archive |
| P1 | Public thread/resource preview, duplicate deflection, account deletion |
| P2 | Bulk invite import, advanced migration tooling, advanced ad reporting, manual weekly summary support |

Without P0 flows, pilot migration cannot work. P1 flows make the pilot safer and more convincing. P2 can be explored within Phase 1 but must not block the first usable release.

## Flow 1: Public Preview -> Join

### Problem

Before leaving WhatsApp/Facebook/Telegram, users want to see real value here.

### Entry Points

| Entry | Example |
| --- | --- |
| Invite link | A join link shared in the WhatsApp group |
| Direct invite | A phone/email invite sent to a specific person |
| Public community preview | A community page opened via Google or a shared web link |
| Public thread/resource preview | A shared solved thread, FAQ, or knowledge card |
| QR code | Scanned at an event, school, local business, etc. |

### Happy Path

1. The visitor opens a public preview page.
2. The system shows the community name, location, topic groups, and selected high-value content.
3. Without login, the visitor sees preview cards/snippets for selected solved threads, knowledge cards, and active help requests.
4. Full thread bodies, comments, search, library browsing, save, reply, and create actions remain locked until signup and membership.
5. The visitor selects `Join` or `Request to join`.
6. If the community is public, the user joins after signup.
7. If the community is private, a join request is created and awaits admin approval.
8. If the visitor arrived via an invite link, they are routed directly to the relevant group.

### Decision Points

| Question | Decision |
| --- | --- |
| Is the community public or private? | Public: fast join; private: approval queue |
| Is the invite link valid? | If valid: join flow; if not: expired invite screen |
| Is the user already a member? | Route directly to the community or content |
| Is the profile incomplete? | Route to onboarding |

### Output

- new member record
- membership status
- source attribution: invite, public preview, QR, shared thread
- initial topic/location selection

## Flow 1b: Invite People from Existing Groups

### Problem

Admins and active members need a practical migration bridge. Sharing one generic link is not enough when they want to invite specific people from an existing WhatsApp, Facebook, or Telegram group.

### Happy Path

1. Admin/mod opens `Invite People` from Admin tools or a topic group.
2. They select the invite scope: community preview, location group, or topic group.
3. They choose invite mode: shareable link, QR code, direct email/phone invite, or bulk paste.
4. For direct invites, the system stores only a normalized/hashable contact reference until the recipient signs up.
5. The recipient receives the invite and opens the scoped invite landing.
6. If the target group is public, signup creates the scoped membership.
7. If the target group is private, signup creates a join request linked to the invite.
8. Admin can see sent, opened, accepted, expired, and revoked invite statuses.

### Rules

- Direct invites are always scoped. Inviting someone to `Housing` does not automatically give access to `Health` or other groups.
- Members may share invite links only when the group setting allows member invites.
- Admin/mod direct invites can bypass generic discovery but still respect private-group approval rules if configured.
- Duplicate invites to the same normalized contact and scope should be merged or shown as already invited.
- Revoking an invite stops future acceptance but does not remove members who already joined.

### Output

- invite record
- optional invite recipient records
- source attribution for accepted users
- migration funnel metrics: sent, opened, accepted, expired, revoked

## Flow 2: Onboarding

### Problem

Users should see value without filling long forms, but the system still needs minimum signals to produce relevance.

### Happy Path

1. The user signs in with Google, Apple, or email.
2. They complete name/display name and basic profile fields.
3. They choose a base location (city/area/postcode district).
4. They choose location visibility.
5. They select topic groups of interest.
6. They set notification preferences.
7. They set ad-visibility preference.
8. The system shows a first-value screen: popular solved threads, knowledge cards, and active help requests.

### Minimum Fields

| Field | Phase 1 decision |
| --- | --- |
| Display name | Required |
| Login identity | Required |
| Base location | Required (not a precise address) |
| Location visibility | Required choice |
| Topic interest | At least one is recommended |
| Ad preference | Must be explicit by default and user-changeable |

### Output

- member profile
- base location
- visibility preference
- topic memberships
- notification preference
- ad visibility preference

## Flow 3: Home Feed and Topic Discovery

### Problem

If the home screen looks empty or chaotic, the user returns to the existing group.

### Happy Path

1. The member opens the home feed.
2. The system builds the feed based on base location, topic memberships, and ad preference.
3. Pinned knowledge/admin picks appear at the top.
4. Then open help requests, solved threads, and new structured posts.
5. Ads are shown only if the user opted in to seeing ads.
6. The user can enter a topic group to view a scoped feed for that topic.

### Feed Content Types

| Type | Feed behavior |
| --- | --- |
| Pinned resource | Fixed/featured at the top |
| Solved thread | High-signal in search and feed |
| Help request | Shown with status |
| Listing | Summarized via template fields |
| Question | Opens as a thread |
| Ad | Only if ad preference allows |

### Anti-Junk Rules

- General chat must not appear in the main feed.
- Off-topic posts must be movable/removable by admins/moderators.
- Free-text listings must not be published without conversion into the correct template.

## Flow 4: Search and Duplicate Deflection

### Problem

The biggest differentiation vs WhatsApp/Facebook/Telegram is access to past knowledge.

### Happy Path

1. The user types a need into search.
2. The system searches across threads and resources; listings/help requests are thread types, and FAQs/knowledge cards are resource types.
3. The user filters by category, location, topic group, status, and date.
4. Results are ranked by solved/saved/admin-pick/high-engagement signals.
5. If there are no results, the user is nudged to create a structured post or help request.
6. While creating a new post, the system shows similar existing content (duplicate deflection).

### Search Result Types

| Result | Example |
| --- | --- |
| Thread | `How do I change my driver’s license?` |
| Knowledge card | `Things to watch for when renting a room in the UK` |
| Help request | `Looking for a room in Milton Keynes` |
| Listing | `Stroller for sale` |
| Media/link reference | A thread/resource that contains a previously shared video, document, or link |

### Phase 1 Boundary

Semantic/AI search is not required in Phase 1. Phase 1 search targets `Thread` and `Resource`; media/link archive can be browsed separately and surfaced through the owning thread/resource. Keyword search, filters, boosting solved/pinned content, and duplicate deflection before posting are required.

## Flow 5: Help Request

### Problem

Sometimes users want an outcome, not information (e.g. “I’m looking for a room”, “I’m looking for a job”).

### Happy Path

1. The user selects `Help request` from the `Create` flow.
2. The system asks for the request type.
3. The user fills in template fields.
4. The system shows similar active requests and relevant knowledge cards.
5. The user publishes the request.
6. Other members add comments/offers/referrals/resources.
7. The user updates status: `open`, `match found`, `solved`, `closed`.
8. A solved request becomes a useful artifact for future search.

### “Looking for a room” Template Example

| Field | Required? |
| --- | --- |
| Location | Yes |
| Budget range | Yes |
| Move-in date | Yes |
| Short description | Yes |
| Preferences | No |
| Contact preference | Yes |

### Output

- structured request
- request status
- comments/offers
- solved signal
- future search artifact

## Flow 6: Structured Post and Listing

### Problem

Free-text listings break search, filtering, and moderation.

### Happy Path

1. The user selects a post type: question, listing, recommendation, service, for sale, for rent, looking for work.
2. The system opens the relevant template.
3. It cannot be published until required fields are filled.
4. If the topic is sensitive or resembles an ad, it may enter an approval queue.
5. After publishing, the thread receives comments.
6. The owner can update status, price, location, or availability.

### Template Decisions

| Post type | Example required fields |
| --- | --- |
| For sale | Price, condition, location, photo |
| For rent | Location, price, date, availability |
| Looking for work | Role, location, work type, experience |
| Service | Service type, location, price range, availability |
| Question | Topic, location relevance, title |

### Phase 1 Boundary

Payment, escrow, booking, full CRM, and delivery tracking must not be in Phase 1.

## Flow 7: Knowledge Cards and Solution Cards

### Problem

The most valuable community knowledge must not get lost in message streams.

### Happy Path: Reading

1. The user reaches a knowledge card via Library or Search.
2. The solution card shows step-by-step guidance, checklists, links, and related threads.
3. The user saves, shares, or suggests an update.

### Happy Path: Creation

1. Admin/mod identifies a repeating thread.
2. They draft a solution card from the thread summary.
3. They add source links, media, and checklists if needed.
4. After review, the card is published.
5. The card is boosted in relevant topic groups and search results.

### Output

- durable knowledge artifact
- source-thread link
- owner/editor info
- last updated time
- helpful/save signals

## Flow 8: Media and Link Archive

### Problem

It is hard to find previously shared links/videos/files/images in WhatsApp/Telegram groups.

### Happy Path

1. The user opens `Media & Links` within a topic group.
2. The system lists links, videos, images, and files by type/date/post/topic.
3. The user filters and jumps to the original thread.
4. Admin can attach a valuable link/file to a knowledge card.

### Phase 1 Boundary

In Phase 1, the media archive should be basic listing and filtering. OCR, transcripts, video summaries, and file-content search belong to Phase 6.

## Flow 9: Report, Block, Viewer Mode, and Removal from Group

### Problem

Member behavior can deteriorate. Admins need a simple, traceable workflow to handle it.

### Happy Path: Report

1. The user selects `Report` on a post/comment/profile.
2. The system asks for a reason: spam, harassment, off-topic, scam, inappropriate content, other.
3. The report enters the admin/mod queue.
4. The reported user’s history and report count are visible.
5. The moderator takes action: no action, warn, temporary viewer mode, remove content, remove from group, escalate to platform.

### Happy Path: Temporary Viewer Mode

1. The admin/moderator opens a reported member or member detail.
2. They choose `Set viewer mode`.
3. They select the scope: **a specific topic group/location group**.
4. They select a duration, for example 1, 3, 7, 14, or 30 days.
5. The affected user remains a member of all other groups and can participate normally there. Only the scoped group is restricted.
6. During viewer mode in the scoped group, the user can read/search/save content but cannot create threads, reply, comment, advertise, or react.
7. The system shows the user why the restriction exists and when it expires.
8. When the duration ends, the restriction automatically expires unless an admin extends or escalates it.

> **Scope rule**: Phase 1 moderation actions are group-scoped. Removing or restricting a member from one group does not affect their membership or permissions in other groups. A platform/community suspension is a separate escalation path.

### Happy Path: Block

1. A user blocks another user.
2. The blocked user’s comments and profile interactions are limited for that user.
3. Block is separate from admin moderation actions.

### Decision Points

| Signal | Action |
| --- | --- |
| Single low-risk report | Moderator review |
| Repeated off-topic behavior | Temporary viewer mode for a short duration |
| Repeated spam | Temporary viewer mode or remove from group |
| Scam suspicion | Remove content, remove from group, platform escalation |
| Harm in sensitive topics | Stricter review and disclaimers |

### Output

- report record
- moderation decision
- audit trail
- scoped viewer-mode penalty or removal

## Flow 10: Ad Visibility Preference

### Problem

Creating ads may be allowed, but users should not see ads if they opted out.

### Happy Path

1. The user sees ad preference in onboarding or settings.
2. They choose `Show ads` or `Hide ads`.
3. The system respects this at feed ranking and (later) ad-delivery layers.
4. The user can change the preference any time.

### Decision

Ad preference is not only a UI setting; it must be enforced at ranking and delivery.

### Output

- ad visibility preference
- delivery eligibility signal
- consent/change history

## Flow 11: Ad Creation and Basic Approval

### Problem

Providers/local businesses want to reach the community, but uncontrolled ads harm the community.

### Happy Path

1. The user enters the “Advertise” flow.
2. They choose an ad type: service, business, event, announcement, product.
3. They enter title, description, target group, optional image, and optional link.
4. The system shows an ad preview.
5. The ad moves to `pending review`.
6. After admin/platform approval, the ad becomes active.
7. Ads are shown only to users who opted in and match targeting.
8. The advertiser sees basic performance signals.

### Basic Reporting Signals

| Signal | Phase 1 / Phase 2 note |
| --- | --- |
| Impression | Can be a simple counter in Phase 1 |
| Click | Can be a simple counter in Phase 1 |
| Save | Strong usefulness signal |
| Helpful/like | Not Phase 1; future sentiment signal after reactions/feedback exist |
| Report/hide | Quality/policy signal |

### Phase 1 Boundary

Billing, campaign budgets, scheduling, advanced targeting, and detailed ROI dashboards belong to Phase 5. However, Phase 1 should still answer early: “Was my ad published? Was it seen? Was it clicked?”

## Flow 12: Admin Migration and Community Setup

### Problem

Existing WhatsApp/Facebook/Telegram admins want control, ease, and trust to migrate.

### Happy Path

1. Platform admin or community admin creates the community draft.
2. Location and topic-group structure is defined.
3. Rules and post types are configured.
4. Initial knowledge cards, FAQs, and seed threads are added.
5. Invite links and QR codes are created.
6. Admin shares preview and invite links in the existing group.
7. First members join, complete onboarding, and the pilot starts.

### Minimum Setup Checklist

| Item | Required? |
| --- | --- |
| Community name | Required |
| Location scope | Required |
| Topic groups | At least 3–5 starter groups |
| Rules | Required |
| Seed content | At least basic FAQs and solution cards |
| Admin roles | At least a community admin |
| Invite link | Required |

## Flow 13: Approval Queue

### Problem

If join requests, ads, resources, and sensitive post approvals are in different places, admin operations become fragmented.

### Happy Path

1. Admin opens the `Approval Queue`.
2. They see item types: join request, ad review, resource publish, sensitive post, group request.
3. In the detail view they see context, risk signals, and suggested actions.
4. Admin decides: approve, reject, request edits, or escalate.
5. The system notifies the user of the outcome.

### Output

- approval decision
- audit trail
- notification
- published/rejected/pending status

## Flow 14: Account and Data Rights

### Problem

Even in a pilot, users need trust in account, privacy, and data rights.

### Happy Path

1. The user opens account settings.
2. They see actions for account deletion or data request.
3. In Phase 1, data requests can be processed manually or semi-manually.
4. Account deletion is processed after a confirmation step.

### Phase 1 Boundary

Full self-service export and advanced data management can wait until Phase 4, but the request path and support process must be clear in Phase 1.

## Flow 14b: Session Management and Logout

### Problem

Users need a clear and safe way to end their session, especially on shared devices.

### Happy Path

1. The user opens Settings.
2. They tap `Log out`.
3. The system clears the local session and returns the user to the Auth Landing screen.
4. No confirmation step is required for logout (unlike account deletion).

### Rules

- Logout must be reachable from Settings and from the Profile screen.
- Logout clears the local auth token and any cached user context.
- Logout does not delete the account or any content.

### Output

- session cleared
- user returned to Auth Landing

## Flow 14c: 1-to-1 Private Messaging — Phase 1 Decision

### Problem

Users coming from WhatsApp and Telegram expect to be able to message each other privately. This creates pressure to add DMs.

### Decision: Out of Scope for Phase 1

Full 1-to-1 private messaging (DMs) is explicitly out of scope for Phase 1.

### Rationale

- The product goal is structured community memory, not a chat replacement.
- Adding DMs in Phase 1 would recreate the same unstructured, unsearchable message noise that the product is designed to replace.
- DMs require significant infrastructure: real-time delivery, read receipts, message history, moderation, and abuse prevention.
- Phase 1 must prove that structured threads and knowledge cards retain users before adding chat.

### Phase 1 Alternative: Contact Preference

Users who need to connect privately can use the `Contact preference` field on help requests and listings:

- `Reply in thread` — keeps the conversation visible and searchable
- `WhatsApp` — user provides their own WhatsApp contact
- `Email` — user provides their own email

This is intentional: the platform facilitates the connection but does not own the private channel in Phase 1.

### Future Path

1-to-1 messaging may be introduced in a later phase after:
- structured threads prove retention
- the moderation infrastructure is mature enough to handle private abuse
- the product has a clear reason why in-app DMs are better than the user's existing WhatsApp

## Flow 15: Special Day Groups

### Problem

Community events like Eid, national holidays (23 Nisan), or local celebrations need a dedicated space. Members from other topic groups should be aware and able to participate without permanently joining a new group.

### Happy Path

1. Admin creates a special day group with a name, event date, active window (from/to), and selects which groups to invite.
2. When the active window starts, an invitation banner appears in the feeds of all members belonging to the invited groups.
3. Members can tap the banner to enter the special day group and participate.
4. During the active window, the group behaves like a normal topic group: threads, replies, and moderation all apply.
5. When the active window ends, the group transitions to `ENDED` status and becomes read-only. Existing content is preserved as an archive.
6. Members can still browse the archive after the event.

### Decision Points

| Question | Decision |
| --- | --- |
| Who can create a special day group? | Admin/mod only |
| Are invitations mandatory? | No; members can ignore the banner |
| Does joining the special day group affect other memberships? | No; it is a separate, time-boxed membership |
| What happens to content after the event? | Read-only archive; not deleted |

### Output

- special day group record
- invitation banners sent to invited group members
- time-boxed participation
- read-only archive after event ends

## Phase 1 Design Gap Review

The current design/prototype should explicitly cover:

| Flow | Screen(s) | Status |
| --- | --- | --- |
| F1 Public preview → join | `/preview`, `/invite/landing`, `/join`, `/join/pending` | ✅ |
| F1b Direct user invite | `/invite`, `/admin/invites` | ✅ |
| F2 Onboarding | `/join`, `/verify`, `/onboarding/location`, `/location/map`, `/onboarding` | ✅ |
| F3 Home feed | `/feed`, `/community`, `/group` | ✅ |
| F4 Search + duplicate deflection | `/search` | ✅ |
| F5 Help request | `/create`, `/thread` | ✅ |
| F6 Structured listing | `/listing/create`, `/thread` | ✅ |
| F7 Knowledge cards | `/library`, `/resource`, `/admin/library` | ✅ |
| F8 Media archive | `/media` | ✅ |
| F9 Report / block / viewer mode / removal | `/report`, `/admin/reports`, `/admin/moderation`, `/member` | ✅ |
| F10 Ad preference | `/settings`, `/onboarding` | ✅ |
| F11 Ad creation + approval | `/ad/create`, `/admin/approvals` | ✅ |
| F12 Admin migration setup | `/admin`, `/admin/invites`, `/group/create` | ✅ |
| F13 Approval queue | `/admin/approvals` | ✅ |
| F14 Account + data rights | `/settings` (delete account, request data) | ✅ |
| F14b Session / logout | `/settings` (log out button → `/`) | ✅ |
| F14c 1-1 chat decision | Documented as out of scope; contact preference shown in `/listing/create` and `/create` | ✅ |
| F15 Special day groups | `/special-day`, `/group/create` (SPECIAL_DAY type) | ✅ |
| Map location picker | `/location/map` — reachable from `/onboarding/location` via "Pick from map" button | ✅ |
| Push notification preview | `/notifications/push-demo` | ✅ |
| Splash screen | `/splash` | ✅ |

## Out of Scope for Phase 1

- full chat or DMs
- payment, escrow, booking, delivery
- full rating/review system
- advanced AI assistant
- advanced event management
- full ad billing and campaign optimization
- public API
- heavy verification
- users creating top-level communities freely

## Key Objects That Translate into the Technical Model

| Product object | Candidate technical model |
| --- | --- |
| User | user |
| Community | community |
| Location community | community node / location scope |
| Topic group | group / channel |
| Membership | membership |
| Join request | join request + approval |
| Role assignment | role binding |
| Structured post | thread + template data + first post |
| Help request | thread(type=HELP_REQUEST) + template data |
| Comment | post |
| Knowledge card | resource / knowledge card |
| Media/link archive item | attachment |
| User block | user block |
| Report | report |
| Moderation decision | moderation action |
| Viewer-mode penalty | moderation action / enforcement |
| Ad preference | user preference |
| Advertisement | ad |
| Approval item | approval |
| Invite link | invite |
| Direct invite | invite + invite recipient |
| Invite recipient | invite recipient |
