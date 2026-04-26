# Community Platform

Product, UX, and architecture discovery workspace for a community platform that helps people move from noisy WhatsApp, Facebook, and Telegram groups into searchable, structured, and moderated community spaces.

The product direction is intentionally memory-first rather than chat-first: users should be able to find trusted historical answers, structured listings, media, links, and community guidance without asking the same question again.

## Current Status

- Phase 1 product scope, flows, screen map, wireframes, and domain model are documented.
- C4 architecture diagrams are modeled with Structurizr DSL.
- Technology standards and Phase 1 microservice boundaries are drafted.
- A high-fidelity React prototype covers the core Phase 1 user and admin journeys.
- A dedicated Angular admin console prototype covers operational workflows for admins/moderators.

## Read First

1. [Roadmap](docs/roadmap/README.md)
2. [Product Discovery](docs/product/README.md)
3. [Technology Standards](docs/technology/README.md)
4. [Structurizr C4 Workspace](docs/architecture/structurizr/README.md)
5. [High-Fidelity Prototype](design/README.md)
6. [Admin Console Prototype](admin/README.md)

## Phase 1 Commitments

- Location, topic, help, marketplace, and special-day groups.
- Structured posts for questions, help requests, listings, services, ads, and resources.
- Searchable community memory through threads, resources, links, images, and videos.
- User-controlled ad visibility, while still allowing approved ad submissions.
- Direct invite flows for moving members from existing WhatsApp, Facebook, and Telegram groups.
- Group-scoped moderation with report, warning, temporary viewer mode, and group removal.
- Admin approval flows for join requests, ads, resources, service providers, and flagged content.

## Prototype

```bash
cd design
npm ci
npm run dev
```

Open `/screens` in the prototype to review all available Phase 1 screens.

## Admin Console

```bash
cd admin
npm ci
npm start
```

The Angular admin console focuses on approval queues, reports, members, groups, special-day operations, and knowledge-library curation.

## Validation

```bash
cd design
npm run lint
npm run build
```

```bash
cd admin
npm run build
```

The repository should also pass:

```bash
git diff --check
```

## Recommended Next Work

1. Define Phase 1 API contracts from the documented user journeys.
2. Draft the database schema from the Phase 1 domain model.
3. Convert the product journeys into an implementation backlog.
4. Start backend and frontend scaffolding only after the contracts and schema are stable.
