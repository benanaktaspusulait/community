# Community Phase 1 Design Prototype

This folder contains the high-fidelity React prototype for the Phase 1 Community product.

The prototype is intentionally mobile-first. It validates the product promise:

- replace noisy WhatsApp/Facebook/Telegram groups with structured community memory
- make old answers, links, files, and resources findable
- keep topic groups disciplined
- support scoped invites, reports, viewer-mode penalties, ads, and admin operations

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide icons

## Run Locally

```bash
npm ci
npm run dev
```

Open the local Vite URL and start from:

```text
/screens
```

The `/screens` index links to every prototype screen inside a mobile phone shell.

## Validation

```bash
npm run lint
npm run build
```

Both commands should pass before committing design changes.

## Key Routes

| Route | Purpose |
| --- | --- |
| `/screens` | Prototype screen index |
| `/preview` | Public community preview |
| `/invite/landing` | Scoped invite landing |
| `/join/pending` | Private group join pending |
| `/feed` | Member home feed |
| `/group` | Topic group |
| `/invite` | Member/admin invite people flow |
| `/search` | Community memory search |
| `/create` | Structured create picker and help request |
| `/library` | Knowledge library |
| `/media` | Media and links archive |
| `/admin` | Admin operations home |
| `/admin/invites` | Invite links and direct user invites |
| `/admin/library` | Knowledge library manager |
| `/admin/moderation` | Group-scoped moderation actions |

## Design Notes

- The prototype is not a production app. It is a clickable design artifact.
- The visual direction uses warm community colors, glass panels, and a premium phone shell.
- Viewer mode and member removal are group-scoped in Phase 1.
- Direct invites are scoped to a community preview or a specific group; they must not grant broader access than the invite scope.
- Ads can be created by users, but ad visibility remains user-controlled.
