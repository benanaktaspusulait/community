# Product Discovery Docs

This folder contains product documents that connect roadmap decisions to UX and technical architecture.

The goal is to clarify the following before implementation and keep UX, domain, and architecture aligned:

- which user flows create value
- which admin flows reduce operational load
- which screens are truly required for Phase 1
- which data and permission decisions must translate into the technical model

## Phase 1 Reading Order

1. [Phase 1 Product Flows](phase-1/phase-1-flows.md)
2. [Phase 1 Screen Map](phase-1/phase-1-screen-map.md)
3. [Phase 1 Low-Fidelity Wireframes](phase-1/phase-1-wireframes.md)
4. [Phase 1 Decision Log](phase-1/phase-1-decisions.md)
5. [Phase 1 Domain Model](phase-1/phase-1-domain-model.md)
6. [Phase 1 C4 Diagrams](phase-1/phase-1-c4.md)

## Phase 1 Critical Journeys

These are the journeys that must stay coherent across flows, screens, wireframes, domain model, and C4:

- `J1`: Join -> onboarding -> first value
- `J2`: Search -> find -> resolve without posting
- `J3`: Create help request -> replies -> close
- `J4`: Ads off + ad creation + admin approval
- `J5`: Report content -> admin resolves with warn/viewer-mode/remove
- `J6`: Admin creates special day group -> cross-group invitations sent -> members participate -> group ends as read-only archive

## Consistency Guardrails

- Screen names in wireframes must map clearly to screen map wording.
- `Resource`, `Knowledge card`, and `Solution card` refer to the same Phase 1 concept.
- Phase 1 search scope is `Thread + Resource`.
- Anonymous users only see preview cards/snippets, not full content browsing.
- Viewer-mode penalty is scoped to a specific group by default; community-wide restriction requires explicit escalation.
- Moderation actions (viewer mode, removal) are group-scoped; they do not affect the member's access in other groups.
- Special day groups are time-boxed; they become read-only archives after the event window ends.

## Next Work

After this documentation pack is stable, the suggested next work is:

1. [Technology documentation](../technology/README.md)
2. API contract draft for Phase 1 journeys
3. Database schema draft from the domain model
4. Mobile/web implementation backlog
