# Community Platform Roadmap

This roadmap explains how to build, step by step, a product that can replace many WhatsApp, Facebook Groups, and Telegram communities.

This is not a classic chat-first app. The core promise is:

- preserve community knowledge without losing it
- help newcomers find old answers quickly
- maintain topic-based groups and enforce group rules
- organize listings, recommendations, and questions
- capture help/need requests in structured formats
- put ad visibility under user control

## Product Principles

Decisions that must remain stable across the plan:

1. Not `chat-first`, but `community memory + structured actions`. A controlled chat layer may be added later to keep the community alive, but it must not dominate.
2. Instead of a single feed, there should be a `community > location > topic group` hierarchy.
3. Each topic group should stay on-topic; off-topic content should be managed via moderation.
4. Ads may be allowed, but ad delivery must be fully dependent on user preference.
5. Normal posts and sponsored ads must not share the same data model or visibility logic.
6. Top-level community creation must be controlled; sub-structures can be managed via delegated permissions.
7. The first entry use-case must be clear: jobs, housing, services, and help requests are the initial wedge.
8. Early revenue should not come from end users; it should come from advertisers/providers and community admins who want to reduce operational load.
9. Location is a core signal, but users, posts, and ads should not all share the exact same location model.
10. Location data should not be sensitive by default; store at city/area/postcode-district level and let users control visibility.
11. Even if chat exists, it must not damage community memory; valuable conversations should be convertible into threads/FAQs/resources.
12. An ad network can exist, but as a controlled incremental revenue/fill layer, not as a replacement for native community advertising.
13. Content strategy should follow `value first, then activity`; low-signal chatter must not fill the main feed.
14. In the pilot, content should be `curated-first, organic-second`; the platform should not be left fully organic until the first useful library is built.
15. The most repeated needs should be captured via templates and “solution cards”, not free text.

## Content Strategy and Anti-Junk Rules

If the product aims to preserve memory, content strategy must be built around that from day one.

Core rules:

- `Knowledge library`: the most asked, saved, and referenced info should be pinned as a Wiki/FAQ style library.
- `Structured templates`: listings/help requests and other high-intent content must use required fields; free text alone is not enough.
- `Solution cards`: promote content that can become step-by-step checklists or clear solutions, not only Q&A.
- `Curated-first start`: in early pilots, the backbone is built by admins/mods/migration concierge; organic content comes on top.
- `No general chat feed`: the main experience must not become a “hi/how are you” stream; chat should be limited and controlled.
- `Duplicate deflection`: before asking the same question again, the system should route users to existing threads/FAQs/guides.
- `Ads in their lane`: ads may be allowed, but must appear in sponsored placements/streams/categories, not as regular community content.
- `See first, then join`: users should see real value before signing up.

Phase sequencing can flex with feedback, but these rules should not change.

## Phase Summary

| Phase | Primary goal | Outcome |
| --- | --- | --- |
| Phase 1 | Pilot product that can migrate 1–3 existing communities | Searchable, thread-based (async), template-backed community platform with a knowledge library |
| Phase 2 | Bring users back regularly + establish early trust signals | Retention engine with saved search, keyword alerts, matching, and “community-approved” guides |
| Phase 3 | Mature admin ops, systematize curation, add early AI summaries | Role delegation, approval engine, admin dashboard, admin picks, weekly summaries, quick rooms, AI-assisted dedupe/summary |
| Phase 4 | Deepen trust and social proof | Verified profiles, provider pages, rating/reviews, reputation, event-lite, reference-community proof |
| Phase 5 | Build a sustainable revenue model | Advertiser tools, billing, commercial packages, DM/live mode, ad network |
| Phase 6 | Expand to multiple countries and community types | Global platform with intelligence layer and localization |

## Entry Strategy (Initial Wedge)

This product should not position itself as a generic “community app that solves everything”.

The initial wedge should be:

- repeated practical needs: `looking for a room`, `looking for housing`, `looking for a job`, `looking for an accountant`
- the operations admins struggle with: organization, approvals, moderation, repeated questions
- local demand areas where advertisers/providers can see measurable value

Therefore, the initial entry point is not:

- general chat
- a big social feed

but:

- `structured requests + searchable community memory + admin control`

## Initial ICP and Buyers

In the early stage, trying to sell to everyone is risky. The clearest target segments:

- `Community admin`: wants to migrate an existing WhatsApp/Facebook/Telegram setup
- `Power user`: actively answers questions or gives recommendations
- `Need-driven member`: seeking jobs/housing/services/help
- `Provider / advertiser`: wants controlled access to the community

The most likely early buyers:

- advertiser/provider packages
- pro tooling for larger community admins
- migration/setup support packages

## First Pilot Selection

The launch market should not be too broad. A sensible first pilot:

- `Community type`: UK Turks
- `Structure`: centered around one dense city or cluster of cities
- `Hero flow`: `looking for a room / housing`
- `Supporting flow`: `looking for a provider / recommendation`

This balances:

- high-frequency repeating needs
- fast “aha moment”
- clear value for community memory
- early commercial surface for providers/advertisers

## Aha Moment

Value must be felt in the first minute.

Expected “aha moment” scenarios:

- a new user searches and finds an old answer within 1 minute
- a user creates a help request and matches the right listing/provider/old thread
- an admin sees all “reduce repeats” tools (threads/FAQs/approvals) in one place

In short:

`Knowledge doesn’t get lost here, my needs get solved faster, and being an admin is easier.`

## Why the Phases Are Sequenced This Way

- Phase 1 solves the “reason to migrate”: knowledge loss, search, structured listings/requests, knowledge library. Communication is async via threads/comments.
- Phase 2 solves the “reason to return”: saved search, keyword alerts, personal feed, help-request matching; early trust/validation signals come earlier.
- Phase 3 solves “admin ops + curation”: delegation, approval engine, dashboards, admin picks, AI summaries to keep knowledge organized.
- Phase 4 solves “deep trust + social proof”: verified profiles, provider pages, reviews, event-lite, proof of reliability.
- Phase 5 solves “revenue”: advertiser tools, billing, commercial packages, optional DM/live mode.
- Phase 6 solves “scale and differentiation”: multiple countries, multiple community types, advanced intelligence.

## Phase Gates (Evidence-Based)

Phases should advance by evidence, not calendar. Minimum gates:

- `Phase 1 -> Phase 2`: 1–3 pilots actively used; search, structured requests, knowledge library, and basic moderation working.
- `Phase 2 -> Phase 3`: users return via saved search/alerts/request updates; early trust signals and approved guides show real usage.
- `Phase 3 -> Phase 4`: admin operations are not single-person dependent; approvals/delegation/admin picks/AI summaries measurably reduce workload.
- `Phase 4 -> Phase 5`: provider pages, reviews, and reputation reach enough volume; advertiser trust/ROI narrative is credible.
- `Phase 5 -> Phase 6`: at least one community model has repeatable retention + revenue; a repeatable community-launch playbook exists.

If gates are unclear, solve adoption/quality/ops problems in the current phase before moving on.

## Communication Layer Evolution

Do not jump directly to full chat. Suggested evolution:

- `Phase 1`: async communication via threads/comments/replies/mentions
- `Phase 2`: strengthens async; no chat layer
- `Phase 3`: admin-controlled “Quick Rooms” inside topic groups, short-lived live streams
- `Phase 4`: async + trust/social proof
- `Phase 5`: optional DM, provider-customer communication, optional “Group Live Mode”
- `Phase 6`: flexible communication policies per community type

The principle remains:

`Durable knowledge lives in threads; chat is for coordination and speed.`

## Layers That Justify Switching

The product will not win just because it is “more organized”. Users must feel these layers:

- `Search + solved + pinned`: old info is truly findable
- `Knowledge library`: the community’s most repeated questions live as durable FAQs/wiki
- `Saved search + alerts`: the system monitors needs on the user’s behalf
- `Admin tools + delegation`: managing a community becomes meaningfully easier
- `Admin automation`: dedupe detection, auto-FAQ, thread summaries (early AI in Phase 3; advanced semantics in Phase 6)
- `Admin picks + curation`: best content is surfaced regularly
- `Migration bridge`: preview cards and shareable thread summaries ease switching
- `Hybrid communication`: live communication if needed, without destroying memory
- `Structured requests`: people open “outcomes”, not generic posts (room/housing/job/accountant)
- `Structured listings`: required fields like price/location/status for listings
- `Solution cards`: repeated topics can become checklists/guides
- `Location relevance`: avoid irrelevant cities/service areas
- `Outcome state`: requests/listings carry statuses like open/solved/matched/closed
- `Approval engine`: join/group/resource/sensitive flows run under one logic
- `Safe sharing`: safer feeling in sensitive topics
- `Lightweight trust early`: verification/approved guides/helpful-member signals not too late
- `Join approvals + entry questions`: easy admin control in private communities
- `Resource library`: forms/checklists/guides in one place
- `Link/media archive`: direct access without digging in chat streams
- `Lightweight polls/decisions`: community decisions not lost in chat
- `Web-first discovery`: previews, shareable public threads, indexable value pages
- `Layered monetization`: native advertiser + provider packages + controlled ad-network fill

## Core Usage Scenarios

From day one, the product should support:

- join via invite link, preview, or join request
- choose location + visibility, then join topic groups
- search and find old questions/answers
- access previously shared links/videos/images directly
- create a structured help request when needed
- track request status (`open`, `match found`, `closed`)
- create a new question or listing
- admins enforce group rules and manage pinned knowledge
- admins manage join requests/group requests/resource publishing in one queue
- community admins assign sub-admins for location/topic scopes
- users report inappropriate members/content
- admins remove problematic members based on reports
- ad creation via “Advertise”, published after basic approval
- users can fully disable ads in settings

## Success Criteria

Core metrics to track across the roadmap:

- weekly active communities
- weekly posts per group
- answer rate per question
- repeat-question rate
- search-to-exit rate without posting a question
- 7-day retention of invite-driven users
- report resolution time
- rate of removed problematic members
- % of users opted in to ads
- ad click and hide rates
- positive ad action rate
- advertiser repeat campaign rate
- first-session search-or-request rate
- reduction in repeated questions per admin
- help requests converting to outcomes
- 30-day activity in migrated communities
- measurable ROI narrative for admins/advertisers
- solution-card/guides created and reused
- knowledge-library content volume and usage frequency
- % of content surfaced via admin picks/curation
- archived vs active content balance
- account deletion request rate (health signal)

## Document Structure

- [Phase 1 - Pilot Migration](phase-1-pilot-migration.md)
- [Phase 2 - Retention, Validation, and Early Trust](phase-2-retention-and-engagement.md)
- [Phase 3 - Admin Maturity, Curation, and Early AI](phase-3-admin-maturity-and-ops.md)
- [Phase 4 - Advanced Trust and Social Proof](phase-4-trust.md)
- [Phase 5 - Monetization and Commercial Model](phase-5-monetization-and-commercial.md)
- [Phase 6 - Expansion and Intelligence](phase-6-expansion-and-intelligence.md)

## Early Decisions Locked by This Roadmap

- `Community founder` should not be a separate early role; treat it as community admin in Phase 1.
- `Sub-admin` should not create new groups in Phase 1; they can request, with scoped-create opening in Phase 3.
- `Moderator` can apply mutes by default in their scope; removals should follow policy/threshold.
- `Community admin` can control local ad eligibility/placement/local rules; pricing/billing/platform-wide ad policies stay centralized.
- First productized commercial package: `Provider / Advertiser Starter`; `Admin Pro` comes next.
- First migration motion should start `concierge-led`, later evolving into a hybrid self-serve model in Phase 3.
- Validate ad capability in Phase 1; billing and full commercial packaging matures in Phase 5.

## Short Conclusion

If this product will succeed, its first question must be:

`Why would people use this instead of creating yet another WhatsApp/Facebook/Telegram group for a new community?`

Each phase of this roadmap is designed to provide a stronger answer to that question.
