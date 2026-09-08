# Rocksoul UI — Assets Release Sync

Current design source:

```text
bjo163/rocksoul-assets
main @ f0f93363c73895e52987f9a3c757e4f5115eca99
release: 1.1.0
repository acceptance: passed
```

Implemented consumer package:

```text
@rocksoul/ui
```

The package implements the MoonWitness brand system, v1 visual baseline, authenticated v2 application shell/screens 17–27, AutoMenu navigation, canonical resource descriptors, responsive shell geometry, and unified system states.

Canonical active repository map:

```text
STORY   → rocksoul-mftl
EVENT   → rocksoul-legend
PERSON  → rocksoul-superhero
TEXT    → rocksoul-rgbl
LAW     → rocksoul-aws
```

Release 1.1.0 also adds reusable product icon, dashboard, data-viz, hero-background, state-illustration, motion, and SFX packs. Those packs remain canonical in `rocksoul-assets`; UI consumers should integrate them deliberately rather than duplicating or editing their sources locally.

## Verification boundary

Repository/code parity is automated in CI.

The following remain external live-Penpot verification and are intentionally not claimed by `@rocksoul/ui`:

- final font availability/licensing inside Penpot;
- native Penpot component reconstruction;
- native state-matrix review;
- interaction prototype wiring;
- live keyboard/focus walkthrough;
- final live contrast/accessibility review.

These are workspace verification gates, not missing code contracts.


## Asset packs v1.1

The UI package mirrors 134 consumer-facing pack files from the canonical release: icons, dashboard widgets, data-viz, hero backgrounds, state illustrations, motion references, and SFX delivery. `scripts/assets-integrity-audit.mjs` verifies every mirrored file against its canonical Git blob SHA.
