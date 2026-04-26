# Phase 1 Screen Map

## Goal

This document translates Phase 1 product flows into a screen-level map. The goal is not detailed UI design; it is to clarify which screens are required for the pilot, which can wait, and what the primary actions and critical states are on each screen.

## Global Navigation

Phase 1 navigation should remain simple.

| Area | Goal |
| --- | --- |
| Home | Show a useful feed based on community, location, and topic |
| Search | Find past information: threads and knowledge cards; media/links are surfaced through their owning thread/resource |
| Create | Start a structured post, help request, listing, or ad |
| Library | Knowledge cards, FAQs, resources, and media/link archive |
| Profile | Profile, saved items, settings |
| Admin | Operations area visible only to authorized users |

## Screen Priority

| Priority | Meaning |
| --- | --- |
| P0 | Required for the pilot to work |
| P1 | Very valuable for a safe and convincing pilot |
| P2 | Can be designed within Phase 1, but should not block the first usable release |

## Visitor and Join Screens

| Screen | Priority | Goal | Primary Actions | Critical States |
| --- | --- | --- | --- | --- |
| Public Community Preview | P0 | Show value before joining | Join, request to join, view preview cards | Public, private, empty, invite-only |
| Public Thread Preview | P1 | Acquire via shared solved thread/resource | Join to read full thread, open community | Preview snippet, login required, removed |
| Public Resource Preview | P1 | Build trust via knowledge card | Join, share, view related topics | Limited preview, full access after join |
| Invite Landing | P0 | Route invite-link traffic to the right community/group | Continue, login, create account | Valid, expired, revoked, usage limit reached |
| Join Request | P0 | Capture join request for private communities | Submit request, answer entry questions | Pending, approved, rejected |
| Join Pending | P0 | Explain waiting status | View preview, cancel request | Pending, rejected, approved |

## Auth and Onboarding Screens

| Screen | Priority | Goal | Primary Actions | Critical States |
| --- | --- | --- | --- | --- |
| Login / Sign Up | P0 | Low-friction entry | Google, Apple, email | New user, returning user, blocked user |
| Create Profile | P0 | Collect minimum profile info | Display name, optional photo | Missing name, duplicate identity |
| Location Setup | P0 | Choose base location and visibility | Select city/area, set visibility | No location, location hidden, invalid location |
| Topic Selection | P0 | Establish initial feed relevance | Select groups, skip with default | No groups, recommended groups |
| Notification Preference | P1 | Reduce “spam” feeling | Choose topics, comment alerts | All off, topic-only, mentions only |
| Ad Preference | P0 | User controls ad visibility | Show ads, hide ads | Ads on, ads off |
| Welcome / First Value | P0 | Show value in the first session | Open solved thread, open help request, search | Empty community, seeded content available |

## Member Screens

| Screen | Priority | Goal | Primary Actions | Critical States |
| --- | --- | --- | --- | --- |
| Home Feed | P0 | Relevance-first feed | Open item, filter by topic/location, create | Empty, ads off, no permission |
| Community Home | P0 | Show core community info | Join topic, view rules, search community | Member, visitor, pending |
| Location Community | P0 | Separate location-based content | Open feed, create local post, view groups | No local posts, not joined |
| Topic Group | P0 | Maintain topic discipline | View posts, create in topic, view rules | Joined, not joined, post approval on |
| Special Day Group | P1 | Time-boxed community event space | View posts, post, join from invitation banner | Upcoming, active, ended (read-only archive) |
| Post Detail / Thread | P0 | Durable conversation and answers | Comment, reply, save, report, mark solved | Open, solved, locked, removed |
| Comment Composer | P0 | Compose a proper reply | Add comment, attach link/image | Rate limited, approval required |
| Search Home | P0 | Quick entry to community memory | Search, recent searches, filters | No query, popular queries |
| Search Results | P0 | Filter and navigate results | Filter, sort, open result, create if none | No results, duplicate suggestions |
| Create Type Picker | P0 | Enforce correct template (vs free-form post) | Question, help request, listing, ad | Permission missing, topic required |
| Help Request Form | P0 | Capture need in a structured form | Fill fields, preview, publish | Missing required fields, duplicate found |
| Listing Form | P0 | Make listings filterable | Fill price/location/status, upload image | Missing price, invalid location |
| Question Form | P0 | Bind question to topic and location | Title, details, topic, location | Similar thread found |
| Status Update Modal | P0 | Mark outcome for request/listing | Open, matched, solved, closed | Owner only, admin override |
| Saved Items | P1 | Make value revisitable | Open saved, remove save | Empty saved |
| Media & Links Archive | P1 | Find past links, videos, files, images | Filter by type/topic/date, open thread | No media, removed source |
| Library Home | P0 | Access knowledge cards and FAQs | Browse categories, search library | Empty, curated sections |
| Solution Card Detail | P0 | Provide checklist-style guidance | Save, share, suggest update, open sources | Outdated, pending update |
| Profile | P0 | Identity and contributions | View posts, edit profile, settings | Private profile, blocked |
| Settings | P0 | Manage account and preferences | Location, notifications, ads, account | Ads off, data request pending |
| Report Modal | P0 | Lightweight reporting | Select reason, add note, submit | Already reported, blocked |
| Block Confirmation | P1 | Reduce user-level harassment | Confirm block, cancel | Already blocked |

## Advertiser / Provider Screens

| Screen | Priority | Goal | Primary Actions | Critical States |
| --- | --- | --- | --- | --- |
| “Advertise” Entry | P1 | Start the ad flow | Choose ad type, continue | User not eligible, ads policy |
| Ad Create Form | P1 | Capture ad in a structured form | Title, description, image, link | Missing fields, policy warning |
| Ad Targeting | P1 | Choose the target group | Select group; location/topic inherited from group | No eligible group, policy warning |
| Ad Preview | P1 | Show how the ad will look | Submit for review, edit | Ads off note, mobile preview |
| Ad Status | P1 | Keep advertiser informed | View pending, edit rejected, pause | Pending, approved, rejected, paused |
| Basic Ad Report | P2 | Show early value | View impressions, clicks, saves, hides, reports | Low data, no delivery |

## Admin Screens

| Screen | Priority | Goal | Primary Actions | Critical States |
| --- | --- | --- | --- | --- |
| Admin Home | P0 | Summarize operational status | Open queues, view alerts, quick actions | No pending work, high risk |
| Approval Queue | P0 | Centralize approvals | Approve, reject, request edit, escalate | Empty, filtered, overdue |
| Approval Detail | P0 | Provide context for decisions | View item, view user, decide | Missing context, already handled |
| Join Requests | P0 | Manage private community memberships | Approve, reject, message reason | Bulk pending, duplicate user |
| Reports Queue | P0 | Process reports | Warn, set viewer mode, remove, no action | Multiple reports, active viewer mode, high risk |
| Member Detail (Admin) | P0 | View member history and actions | View reports, set viewer mode, extend/end penalty, remove from group | Scoped permission, active viewer mode, platform escalation |
| Community Structure | P0 | Manage location/topic structure | Add/edit group, assign admin | Duplicate group, permission missing |
| Topic Group Settings | P0 | Enforce topic rules | Edit rules, post approval, pinned items | Approval on/off, locked group |
| Role Management | P0 | Assign sub-admin and moderator roles | Assign role, revoke role | Scope required, owner protected |
| Invite Links | P0 | Start migration | Create link, revoke, copy, QR | Expired, limit reached |
| Knowledge Library Manager | P0 | Curate the library | Create card, edit, publish, archive | Draft, pending, published |
| Admin Picks | P1 | Promote weekly high-value content | Pick thread, write summary, publish | No picks, draft |
| Ad Approval | P1 | Protect ad quality | Approve, reject, request edit | Sensitive category, reported advertiser |
| Migration Checklist | P1 | Help admin complete migration | Seed content, create invites, publish preview | Incomplete, ready |
| Audit Log | P1 | Make admin decisions traceable | Filter actions, open decision | No permission, retention limit |

## Platform Admin Screens

| Screen | Priority | Goal | Primary Actions | Critical States |
| --- | --- | --- | --- | --- |
| Platform Admin Home | P1 | Monitor all pilots | View communities, risk alerts | No pilots, active pilots |
| Community Create / Approve | P1 | Keep community creation controlled | Create, approve, reject | Duplicate community |
| Community Admin Assignment | P1 | Manage lead admins | Assign admin, revoke admin | Owner conflict |
| Platform Policy Settings | P2 | Manage global policies | Edit ad policy, report thresholds | Requires rollout |
| Platform Ad Review | P2 | Review high-risk ads | Approve, reject, escalate | Sensitive category |

## Required Cross-Screen States

For each critical screen, the following states should be considered:

| State | Why it matters |
| --- | --- |
| Loading | Network delays are normal on mobile |
| Empty | A new pilot will have empty areas |
| No permission | Required for scoped admins and private communities |
| Pending approval | Needed for join, ads, resources, and sensitive posts |
| Rejected | Explain reason and next step to the user |
| Removed | Old shared links should not break after moderation |
| Reported | Owner/admin behavior must be defined for reported content |
| Viewer mode active | User can read/search but cannot create or reply in the scoped area |
| Ads off | If the user disabled ads, ad placements must be hidden |
| No results | Transition from search to structured request creation |
| Duplicate found | Deflect to existing knowledge before posting |
| Expired invite | Critical for migration links |
| Rate limited | Needed to prevent spam/abuse |

## Phase 1 MVP Screen Set

In the first design sprint, P0 screens are sufficient:

- Public Community Preview
- Invite Landing
- Join Request
- Login / Sign Up
- Profile, location, topic, and ad-preference onboarding
- Home Feed
- Topic Group
- Search Home and Search Results
- Post Detail / Thread
- Create Type Picker
- Help Request Form
- Listing Form
- Question Form
- Library Home
- Solution Card Detail
- Settings
- Report Modal
- Admin Home
- Approval Queue
- Join Requests
- Reports Queue
- Member Detail (Admin)
- Community Structure
- Invite Links
- Knowledge Library Manager

## Decisions to Preserve in Design

- The home experience must not turn into a general chat feed.
- The create flow must force the user into the correct template.
- Search is not just text search; it is the entry point to community memory.
- Ad preference must be explicit in onboarding and settings.
- The ad-create flow must be separate from the normal post-create flow.
- Admin actions must work with scoped permissions.
- Report and block must be reachable in 1–2 taps.
- Viewer mode must be visible to both admin and affected user with scope, reason, and expiry date.
- Library and knowledge cards must be visible in primary navigation.
- Media/link archive must be directly accessible under Library.

## Next Step

After this screen map, the first artifact to produce is the low-fidelity wireframe set.

The wireframe set should first cover these 5 critical journeys:

1. A visitor joins from a preview.
2. A user searches and finds existing knowledge.
3. A user creates a “I’m looking for a room” help request.
4. A user disables ads; an advertiser creates an ad.
5. An admin manages join requests, reports, and knowledge-card approvals.
