# Rocksoul UI

Production-oriented, code-first UI system for the **MoonWitness** product ecosystem.

- **Repository:** `rocksoul-ui`
- **Package:** `@rocksoul/ui`
- **Product umbrella:** MoonWitness
- **Character / connective thread:** Rocksoul

> `rocksoul/ui` is used as the conceptual path. npm package names cannot use an unscoped slash, so the valid package identity is `@rocksoul/ui`.

## Canonical chain

```text
rocksoul-assets
  tokens / primitives / components / patterns / 16 references
        ↓
@rocksoul/ui
  production UI grammar / Storybook / golden implementation
        ↓
rocksoul-web
  application consumer
```

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Storybook
- Storybook accessibility addon

## Design parity

Current gate: **Rocksoul UI v0.4 / MoonWitness visual grammar**.

The implementation follows the design-source contracts in `rocksoul-assets`:

- exact semantic color tokens
- Inter Tight direction for display, Inter body, IBM Plex Mono metadata
- public/community expressive dark surfaces
- platform/admin clean dense light surface
- 1440 / 1024 / 768 / 390 / 320 responsive QA
- visible focus, 44×44 touch targets, reduced motion
- status never color-only
- correlation always carries explanation
- graph always carries a text equivalent
- AWS legal boundary remains downstream from STORY/EVENT/PERSON/RGBL
- legal interpretation never presents itself as a court judgment

## 16-screen coverage

1. Landing Hero
2. Manifesto
3. Rocksoul Character
4. Repositories Overview
5. STORY
6. EVENT
7. PERSON
8. RGBL
9. AWS
10. Public Case
11. Correlation
12. AWS Legal
13. Community
14. Auth
15. Platform Admin
16. Design System

All screen surfaces and reusable patterns are represented in Storybook.

## Golden case

**MW-0042 — The Silent Flight** is synthetic/reference-only.

- STORY → supported
- EVENT → supported
- PERSON → partial
- RGBL → supported
- Correlation → 0.87, supported-not-conclusive
- AWS → disputed / jurisdiction unresolved
- Final state → unresolved

## Run

```bash
npm install
npm run dev
npm run storybook
npm run ci
```

`npm run ci` includes:

1. design-token / identity / component / pattern inventory audit
2. accessibility contract audit
3. TypeScript strict check
4. Vite build
5. Storybook build

## Branch contract

Only two long-lived branches:

```text
dev  ── verified promotion ──> main
```

- `dev` — all active implementation and integration
- `main` — stable verified baseline
- no `feature/*`, `fix/*`, or other working branches
- never implement directly on `main`


## Application framework

`@rocksoul/ui` now includes a reusable application framework for `rocksoul-web` and later MoonWitness surfaces:

- shared responsive `ApplicationShell`;
- compact/expanded AutoMenu sidebar;
- shared topbar;
- theme control;
- breadcrumbs;
- backend status;
- user menu;
- command palette with `Ctrl/Cmd+K`;
- notifications drawer;
- dashboard;
- Kanban;
- calendar;
- chat;
- AI Workspace;
- profile/settings;
- authorization UX;
- empty/loading/error states.

Resource navigation is data-driven through `applicationResources` and `AutoMenu`. Do not duplicate navigation arrays in consuming apps.

### Consumer usage

```tsx
import "@rocksoul/ui/styles.css"
import {
  ApplicationShell,
  DashboardScreen,
  applicationResources,
} from "@rocksoul/ui"
```

The package build emits:

```text
dist/index.js
dist/index.d.ts
dist/styles.css
```

React and React DOM are peer dependencies so the consuming application owns the runtime instance.
