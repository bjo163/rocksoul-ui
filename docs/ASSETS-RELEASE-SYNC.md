# Rocksoul UI — Assets Release Sync

Current design source:

```text
bjo163/rocksoul-assets
main @ 82f20b8a361a19abdc6591fe2f4c67e3fb9d4b05
release: 1.3.1
repository acceptance: passed
```

Implemented consumer package:

```text
@rocksoul/ui 0.12.0
```

## Stable v1.3 contract

- 42 indexed asset families;
- 614 canonical assets in the generated registry;
- developer distribution: `dist/assets.json`, `dist/assets.ts`, `dist/assets.css`, `dist/sprite.svg`;
- core + runtime delivery mirrored and byte-locked: 198 files;
- Runtime Motion: SVG / APNG / WebM / Lottie;
- SFX remains opt-in;
- SVG remains preferred for product UI;
- motion honors reduced-motion behavior;
- correlation visuals do not imply causation;
- graphs require accessible text/data equivalents.

## Showcase implementation

The upstream static showcase is not copied into the UI package. Its useful interaction grammar is implemented as reusable `AssetExplorer` behavior: search, categories, grid/compact view, pack detail dialog, and copy/open asset actions.

## Canonical repository map

```text
STORY       → rocksoul-mftl
EVENT       → rocksoul-legend
PERSON      → rocksoul-superhero
TEXT        → rocksoul-rgbl
LAW         → rocksoul-aws
CORRELATION → rocksoul-correlation
```

Correlation owns reviewed cross-domain edges and explainability metadata only. It is not a verdict layer.

## Verification boundary

Repository/code parity is automated. Native Penpot reconstruction, live prototype/focus walkthrough, and final workspace contrast review remain explicit manual workspace gates.


## Cinematic web delivery profile

The public hero consumes the pinned delivery profile at `moonwitness/cinematic-web-hero/manifest.json`. Photographic masters remain in `cinematic-hero-pack/webp`; the profile only composes released sources for application consumption and does not create a new canonical pack family.
