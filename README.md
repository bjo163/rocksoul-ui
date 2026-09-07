# MoonWitness UI

Production-oriented, code-first UI system for the **MoonWitness** product ecosystem.

**MoonWitness is the umbrella/product identity. Rocksoul is the character and connective thread.**

This repository stays separate from `rocksoul-assets`:

```text
rocksoul-assets
  design source / Penpot / contracts
        ↓
rocksoul-ui
  @moonwitness/ui / Storybook / golden implementation
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

## Design system

Current implementation gate: **MoonWitness Design System v0.3**

v0.3 establishes:

- semantic light + dark tokens
- editorial MoonWitness shell
- visible focus and 44px minimum interactive targets
- reduced-motion behavior
- reusable primitives and case components
- OBSERVE → TRACE → RECONSTRUCT → WEIGH → VERIFY product grammar
- MW-0042 provenance + correlation + AWS boundary proof

## Golden case

**MW-0042 — The Silent Flight** is a synthetic fixture.

Its role is to prove mixed-certainty UI behavior:

- STORY → supported
- EVENT → supported
- PERSON → partial
- RGBL → supported
- Correlation → 0.87, not conclusive
- AWS → downstream legal boundary, disputed
- Final state → unresolved

Correlation is never presented as proof. AWS is not a fifth evidence record.

## Run

```bash
npm install
npm run dev
```

Storybook:

```bash
npm run storybook
```

Verification:

```bash
npm run ci
```

## Branch contract

Only two long-lived branches are used:

```text
dev  ── verified promotion ──> main
```

- `dev` — all active implementation and integration
- `main` — stable, verified baseline
- do not create `feature/*`, `fix/*`, or other working branches
- do not implement directly on `main`

## Scope boundary

`rocksoul-ui` owns reusable visual/product grammar.

`rocksoul-web` should consume this system later and own app-level concerns such as routing, data access, auth, SEO, deployment, analytics, and API integration.
