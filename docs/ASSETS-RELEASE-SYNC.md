# Rocksoul UI — Assets Release Sync

Current design source:

```text
bjo163/rocksoul-assets
main @ 95a6912409f849029e18093658b1c0e8158a32f0
release: 1.2.0
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


## v1.2 consumption boundary

The UI system implements all 19 pack contracts through a typed provider. Core runtime packs remain mirrored and byte-locked in this repository. Secondary PNG delivery for social, platform/store, email, report, and other raster-specific consumers is staged by each application from `rocksoul-assets` under `/assets/moonwitness`, matching the canonical consumption contract.


## v1.3 candidate

UI dev tracks a separate release candidate at `feat/complete-visual-language-v1.3@f78a4d33b23542f252f3cebb14938f28a3ca0ad5`.

- Stable release lock remains `rocksoul-assets/main@95a6912409f849029e18093658b1c0e8158a32f0` / v1.2.0.
- Candidate developer registry reports 40 packs and 591 canonical assets.
- Candidate CI is SHA-locked independently; if the feature branch moves, the UI candidate audit fails until re-reviewed.
- Promotion to the stable asset channel is forbidden until v1.3 is released on assets/main.
