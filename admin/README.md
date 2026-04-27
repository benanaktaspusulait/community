# Community Admin Console

Angular-based admin console prototype for Community Platform operations.

This app focuses on the operational workflows that make migration from WhatsApp, Facebook, and Telegram groups manageable:

- approval queues for joins, ads, resources, sensitive posts, and group requests
- report triage with group-scoped moderation decisions
- member visibility, roles, and temporary viewer-mode enforcement
- group health, special-day groups, and invitation readiness
- knowledge-library curation and stale content management

## Run Locally

```bash
npm ci
npm start
```

The local dev server runs at `http://localhost:4200/`.

Start from `/login`; signing in routes to the admin command center.

## Validate

```bash
npm run build
```

`dist/`, `.angular/cache`, and `node_modules/` are local build artifacts and should not be committed.
