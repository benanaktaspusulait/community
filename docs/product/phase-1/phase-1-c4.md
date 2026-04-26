# Phase 1 C4 Diagrams (Structurizr)

## Goal

Describe the Phase 1 architecture in a way that is anchored in product behavior (flows + screen map) and can drive backend boundaries.

This C4 model is authored in **Structurizr DSL**.

## Source of truth

- `docs/architecture/structurizr/phase-1/workspace.dsl` is the single source of truth.

## Views included

- **System Context**: `context`
- **Container**: `containers`
- **Component (Backend API)**: `components`
- **Dynamic journeys**: `J1` to `J6` covering join, search, help request, ads, moderation, and special day groups.

## How to render

Open `docs/architecture/structurizr/phase-1/workspace.dsl` in Structurizr tooling (e.g. Structurizr Lite, or an IDE plugin) and render the views above.

Notes:

- Phase 1 may start with DB-backed keyword search; the `Search (optional)` container becomes relevant when dedicated indexing is introduced.
