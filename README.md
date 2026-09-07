# Rocksoul UI

Standalone, code-first visual system for the Rocksoul ecosystem.

This repository is intentionally separate from `bjo163/moonwitness`.

## Why it exists

`rocksoul-assets` keeps visual references and design-source artifacts.

`rocksoul-ui` turns those references into reusable production React components and Storybook stories.

```text
rocksoul-assets
      ↓
visual reference
      ↓
rocksoul-ui
      ↓
React components + Storybook
      ↓
future apps
```

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Storybook
- Storybook accessibility addon

## First golden slice

**MW-0042 — The Silent Flight**

The fixture is synthetic. It exists to prove UI behavior for mixed certainty:

- STORY → supported
- EVENT → supported
- PERSON → partial
- RGBL → supported
- Correlation → 0.87, not conclusive
- AWS → disputed / jurisdiction unresolved
- Final state → unresolved

## Run

```bash
npm install
npm run storybook
```

Playground:

```bash
npm run dev
```

Verification:

```bash
npm run ci
```

## Branch workflow

```text
main
  ↓
dev
  ↓
feature/*
```

Do not implement directly on `main`.

## Current scope

Phase 1 intentionally stays small:

- semantic tokens
- Button
- Badge
- Case Header
- Four Record Summary
- Correlation Score
- Legal Status
- MW-0042 Overview
- Storybook responsive stories
- CI

Next slices: Evidence → Correlation graph → AWS → Community → Platform.
