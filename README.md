<div align="center">

<img src="https://raw.githubusercontent.com/bjo163/rocksoul-assets/main/moonwitness/brand/logo-horizontal.svg" alt="MoonWitness" width="420" />

# ROCKSOUL UI

## **THE IMPLEMENTATION GRAMMAR**

### **DESIGN ONCE. IMPLEMENT CONSISTENTLY.**

Production-oriented, code-first UI system for the **MoonWitness × Rocksoul** product ecosystem.

![Package](https://img.shields.io/badge/package-%40rocksoul%2Fui-3178C6)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Storybook](https://img.shields.io/badge/Storybook-ready-FF4785)
![Design](https://img.shields.io/badge/source-rocksoul--assets-B43A32)
![Role](https://img.shields.io/badge/role-UI%20SYSTEM-6F6F6F)

[Design Source](https://github.com/bjo163/rocksoul-assets) · [Public Web](https://github.com/bjo163/rocksoul-web) · [Community](https://github.com/bjo163/rocksoul-community) · [Platform](https://github.com/bjo163/rocksoul-platform) · [Console](https://github.com/bjo163/rocksoul-crayon)

</div>

---

> **`rocksoul-assets` defines the visual truth. `@rocksoul/ui` turns that truth into reusable production code. Applications consume it; they do not fork it.**

## Canonical chain

```mermaid
flowchart LR
    A["ROCKSOUL-ASSETS\nbrand · tokens · screens"] --> U["@ROCKSOUL/UI\ncomponents · patterns · shell"]
    U --> W["ROCKSOUL-WEB"]
    U --> C["ROCKSOUL-COMMUNITY"]
    U --> P["ROCKSOUL-PLATFORM"]
    U --> R["ROCKSOUL-CRAYON"]
```

## Identity

| Concern | Contract |
|---|---|
| Repository | `rocksoul-ui` |
| Package | `@rocksoul/ui` |
| Product umbrella | **MoonWitness** |
| Connective thread | **Rocksoul** |
| Canonical design source | [`rocksoul-assets`](https://github.com/bjo163/rocksoul-assets) |
| Canonical design tool | **Penpot** |

`rocksoul/ui` is the conceptual path; the valid npm package identity is `@rocksoul/ui`.

## Stack

```text
React 19
TypeScript strict
Vite
Tailwind CSS v4
Storybook
Accessibility addon
```

## Visual grammar

The implementation follows the canonical contracts from `rocksoul-assets`:

- semantic color tokens and typography hierarchy;
- Inter Tight direction for display, Inter body, IBM Plex Mono metadata;
- expressive public/community surfaces;
- clean, dense platform/admin surfaces;
- shared responsive application shell;
- visible focus and 44×44 minimum touch targets;
- reduced-motion support;
- status never color-only;
- graph always has a text equivalent;
- correlation always carries explanation;
- legal interpretation never presents itself as a court judgment.

<div align="center">

<img src="https://raw.githubusercontent.com/bjo163/rocksoul-assets/main/moonwitness/ui/v2/application-shell.svg" alt="Canonical application shell" width="940" />

</div>

## Surface coverage

| Range | Surface | Primary consumer |
|---|---|---|
| 01–12 | public observatory / research / case / legal | `rocksoul-web` |
| 13–14 | community + authentication | `rocksoul-community` |
| 15 | platform administration | `rocksoul-platform` |
| 16 | design-system reference | `@rocksoul/ui` |
| 17–27 | authenticated shell + workspaces | `rocksoul-crayon` / shared app UI |

## Application framework

`@rocksoul/ui` provides reusable contracts for:

```text
ApplicationShell
AutoMenu sidebar
Topbar
Theme control
Breadcrumbs
Backend status
User menu
Command Palette
Notifications
Dashboard
Kanban
Calendar
Chat
AI Workspace
Profile / Settings
Authorization UX
Loading / Empty / Error states
```

Resource navigation is data-driven through `applicationResources` and AutoMenu. Consuming apps must not duplicate navigation arrays or redefine the design system locally.

### Consumer usage

```tsx
import "@rocksoul/ui/styles.css"
import {
  ApplicationShell,
  DashboardScreen,
  applicationResources,
} from "@rocksoul/ui"
```

Build output:

```text
dist/index.js
dist/index.d.ts
dist/styles.css
dist/brand/*
dist/assets/*
```

React and React DOM remain peer dependencies so the consumer owns the runtime instance.

## Browser and consumer QA

Repository CI now verifies both code contracts and real-browser behavior:

```bash
npm run test:unit
npm run build:lib
npm run test:consumer
npm run test:browser
```

The Playwright matrix covers desktop `1440×1024` and mobile `390×844`, rejects serious/critical WCAG violations and horizontal overflow, checks the application-shell skip link with keyboard navigation, and smoke-tests reduced-motion rendering. CI installs Chromium explicitly; local browser runs require a Playwright Chromium install.

`test:consumer` imports the package through its own public `@rocksoul/ui` exports after build, so broken export maps cannot hide behind source-level tests.

## Git dependency handoff

```bash
npm install github:bjo163/rocksoul-ui#main
```

Application-specific routing, API clients, authentication providers, persistence, and backend state belong to the consuming application. Reusable visual/application contracts stay in `@rocksoul/ui`.

## Asset synchronization

The repository keeps an explicit recorded sync point to `rocksoul-assets/main` and validates it with:

```text
npm run audit:assets-sync
npm run audit:assets-freshness
```

A newer `rocksoul-assets` commit must be reviewed before UI CI is allowed to claim parity. Generated browser/app/social delivery files are mirrored read-only from canonical SVG-derived assets; edit the source in `rocksoul-assets`, then resynchronize.

## Asset packs v1.3

`@rocksoul/ui` consumes the stable MoonWitness asset release through the typed registry and immutable provenance contract:

- `ROCKSOUL_ASSETS_SYNC` records repository/ref plus runtime and accepted-head provenance;
- `ROCKSOUL_ASSETS_REGISTRY` derives pack count, canonical SVG count, delivery-file count and coverage from the generated registry;
- `MoonWitnessAssetProvider` resolves app-hosted assets or the canonical immutable remote base;
- product UI prefers SVG while raster/video derivatives remain delivery formats;
- core/runtime mirrors are byte-locked by `public/assets/asset-lock.json`;
- canonical OG-card SVG/PNG delivery is synchronized automatically from the recorded asset commit.

Canonical resources remain:

```text
STORY        → rocksoul-mftl
EVENT        → rocksoul-legend
PERSON       → rocksoul-superhero
TEXT         → rocksoul-rgbl
LAW          → rocksoul-aws
PERSPECTIVE  → rocksoul-jizz
RELATIONSHIP → rocksoul-correlation
```

`RELATIONSHIP` owns reviewed cross-domain edges and explainability metadata, not verdicts or duplicate canonical records. Inventory values are intentionally not duplicated in this README; inspect the generated registry or `AssetExplorer` for the current release.

## Visual language v1.3

The former v1.3 candidate has been promoted upstream to `rocksoul-assets/main`. UI inventory is resolved from the generated registry, while immutable commit pins remain explicit only where provenance requires them.

## Run

```bash
npm install
npm run dev
npm run storybook
npm run ci
```

`npm run ci` covers design-contract audits, accessibility, TypeScript strict checks, Vite build, and Storybook build.

## Branch contract

```text
dev  ── verified promotion ──> main
```

- `dev` — active implementation and integration;
- `main` — stable verified baseline;
- no long-lived feature/fix branches;
- implementation changes land through `dev`, not directly on `main`.

---

<div align="center">

<img src="https://raw.githubusercontent.com/bjo163/rocksoul-assets/main/moonwitness/brand/rocksoul-lockup.svg" alt="MoonWitness Rocksoul" width="520" />

## **ONE VISUAL LANGUAGE. MANY SURFACES.**

`UI / MoonWitness × Rocksoul`

</div>

## Research observatory components

Reusable research surfaces available in v0.12.2:

- `DossierHeader` — editorial/cinematic record header backed by canonical Rocksoul assets;
- `EvidenceMatrix` — sticky, keyboard-accessible claim × evidence inspection;
- `ObservatorySectionNav` — sticky long-form section navigation with active-section tracking;
- `ProvenanceRail` — STORY / CLAIM / EVIDENCE / SOURCE / TEXT / EVENT / PERSON / LAW flow using canonical correlation-semantics assets.

These components keep live semantics in HTML and use Rocksoul assets as visual support rather than baking research content into imagery.


## Cinematic public hero

`CinematicWebHero` implements the application-facing `moonwitness/cinematic-web-hero/manifest.json` delivery profile. It uses the photographic desktop/mobile masters from `rocksoul-assets` while keeping navigation, headline, CTA, evidence semantics, archive labels and accessibility as live HTML/SVG.

The component is static under reduced-motion preferences, keeps correlation distinct from causation, and exposes its asset set as a replaceable typed prop for consumers.


## PERSON consumer semantics

Historical PERSON surfaces should consume the generic canonical person mark rather than assigning a modern application persona role:

```tsx
import { MoonWitnessPersonMark, MWHeader } from "@rocksoul/ui"

<MWHeader
  brandLabel="SUPERHERO / PERSON INTELLIGENCE"
  navItems={[
    { label: "People", href: "#people" },
    { label: "Evidence", href: "#claims" },
  ]}
/>

<MoonWitnessPersonMark alt="Canonical person" />
```

`MWHeader` exposes consumer navigation/label slots while preserving the shared responsive drawer, theme control, focus behavior and touch contracts. `MoonWitnessPersonMark` resolves the canonical `rocksoul-assets` product PERSON icon; persona avatars remain reserved for application/user roles.


## LAW applicability semantics

`@rocksoul/ui` mirrors `moonwitness/ui/v2/legal-intelligence.json` from the pinned `rocksoul-assets` revision and exposes:

- `legalIntelligenceContract` — five reviewed result states, four applicability axes, review pipeline, and guardrails;
- `LegalApplicabilityMatrix` — accessible, source-linked axis assessment UI;
- `AWSLegalScreen` — reference surface that keeps evidence reconstruction and legal applicability visibly separate.

Consumers should derive result vocabulary and applicability axes from the exported contract rather than maintaining local arrays. An axis assessment is not itself a legal verdict, and unassessed axes render explicitly as unresolved.
