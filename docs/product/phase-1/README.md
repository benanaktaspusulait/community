# Phase 1 — Product Backbone (Single Entry Point)

## Why this exists

This is the **single entry point** for Phase 1 product work.

Phase 1 success depends on coherence more than volume:

- flows → screens → low-fi wireframes → domain → C4 must tell **one story**
- key decisions must be explicit and referenced, not re-litigated in every doc

## How to read (and what each doc produces)

1. **Flows** → what must happen and why  
   Input: roadmap goals  
   Output: Phase 1 journeys + constraints  
   - `phase-1-flows.md`

2. **Screen map** → which screens exist and who sees them  
   Input: flows  
   Output: screen inventory + states + actions  
   - `phase-1-screen-map.md`

3. **Low-fi wireframes** → what we will test (logic, states, guardrails)  
   Input: screen map  
   Output: review-ready wireframe pack + critical journeys  
   - `phase-1-wireframes.md`

4. **Decision log** → the few decisions that keep everything aligned  
   Input: product intent  
   Output: stable reference (K1–K6 + Phase 1 boundaries)  
   - `phase-1-decisions.md`

5. **Domain model** → entities, relationships, invariants  
   Input: screens + decision log  
   Output: implementation-ready model language  
   - `phase-1-domain-model.md`

6. **C4 (Structurizr)** → architecture views driven by behavior  
   Input: domain + boundaries  
   Output: context/container/component diagrams  
   - `phase-1-c4.md`
   - `../../architecture/structurizr/phase-1/workspace.dsl`

---

## Phase 1 critical journeys (what we must be able to demo)

- **J1**: Join → onboarding → first value (non-empty)
- **J2**: Search → find → resolve without posting
- **J3**: Create help request → replies → close
- **J4**: Ads off (member) + Ad create (creator) + Admin approval
- **J5**: Report content → Admin resolves

---

## Consistency rules (packaging guardrails)

- Screen names in wireframes must match screen map wording.
- “Resource / Knowledge card / Solution card” must be treated as the same concept (Phase 1: `Resource`).
- Phase 1 search scope must remain `Thread + Resource` unless explicitly changed in the decision log.
- Anonymous access must be consistent across flows/screen map/wireframes (no hidden exceptions).

