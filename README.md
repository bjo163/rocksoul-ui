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


### Git dependency handoff

For a separate application repository such as `rocksoul-web`, the internal package can be consumed from the stable branch:

```bash
npm install github:bjo163/rocksoul-ui#main
```

The package `prepare` lifecycle builds `dist/` automatically for Git-based installs. Consumers should still import the stylesheet explicitly:

```ts
import "@rocksoul/ui/styles.css"
```

Keep application-specific routing, API clients, authentication providers, persistence, and backend state in `rocksoul-web`; keep reusable visual/application contracts in `@rocksoul/ui`.


## Assets v2 synchronization

Current UI sync point:

```text
rocksoul-assets/main
5abae50b6b994d2cd4fcb12360db620acbac37bd
        ↓
@rocksoul/ui 0.6.0
```

Asset repository release: **v1.0.0** — repository acceptance **PASSED**. Live Penpot native reconstruction / interaction / font / final contrast verification remains an explicitly manual follow-up and is not falsely marked complete.

The v2 application contract is mirrored from the asset source:

- canonical 9-item AutoMenu navigation;
- 5 resource descriptors;
- application screens 17–27;
- 220px desktop / 72px tablet / mobile drawer shell;
- light / dark / system theme preference;
- loading / empty / error / offline / forbidden semantics;
- canonical MoonWitness editable-vector brand source family;
- compact mobile MW-0042 record treatment.

`npm run audit:assets-sync` verifies the implemented v2 contract, while `npm run audit:assets-freshness` compares the recorded sync SHA against the live `rocksoul-assets/main` tip. A newer asset commit therefore fails UI CI until the delta is reviewed.
