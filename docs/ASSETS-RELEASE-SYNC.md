# Rocksoul UI — Assets Release Sync

The synchronization source is intentionally machine-readable rather than duplicated in documentation.

## Source of truth

| Concern | Canonical source |
|---|---|
| Upstream repository/ref | `ROCKSOUL_ASSETS_SYNC.repository` / `.ref` |
| Immutable runtime asset commit | `ROCKSOUL_ASSETS_SYNC.commit` |
| Accepted upstream head | `ROCKSOUL_ASSETS_SYNC.acceptedMainCommit` |
| Asset release | `ROCKSOUL_ASSETS_SYNC.assetRelease` |
| Pack inventory | `ROCKSOUL_ASSETS_REGISTRY.packCount` |
| Canonical SVG inventory | `ROCKSOUL_ASSETS_REGISTRY.canonicalAssetCount` |
| Delivery inventory | `ROCKSOUL_ASSETS_REGISTRY.deliveryFileCount` |
| Mirrored runtime files | `public/assets/asset-lock.json` |
| Generated developer registry | `public/assets/developer-v1.3/assets.json` |

Do not copy commit SHAs or inventory counts into consumer code or prose as independent configuration. Immutable pins stay explicit only inside the synchronization/provenance contract.

## Stable consumption contract

- developer distribution: `dist/assets.json`, `dist/assets.ts`, `dist/assets.css`, `dist/sprite.svg`;
- core + runtime delivery is mirrored and byte-locked;
- canonical OG-card SVG/PNG is synchronized byte-for-byte by `Sync Canonical Brand Binary`;
- Runtime Motion supports SVG / APNG / WebM / Lottie;
- SFX remains opt-in;
- SVG remains preferred for product UI;
- motion honors reduced-motion behavior;
- correlation visuals do not imply causation;
- graphs require accessible text/data equivalents.

## Showcase implementation

The upstream static showcase is not copied into the UI package. Its useful interaction grammar is implemented as reusable `AssetExplorer` behavior: search, categories, grid/compact view, pack detail dialog, and copy/open asset actions.

## Canonical repository map

```text
STORY        → rocksoul-mftl
EVENT        → rocksoul-legend
PERSON       → rocksoul-superhero
TEXT         → rocksoul-rgbl
LAW          → rocksoul-aws
PERSPECTIVE  → rocksoul-jizz
RELATIONSHIP → rocksoul-correlation
```

The reusable `ResearchDomainOwnershipMap` renders this ownership contract with an accessible text equivalent.

## Verification boundary

Repository/code parity is automated. Native Penpot reconstruction, live prototype/focus walkthrough, and final workspace contrast review remain explicit manual workspace gates.

## Cinematic web delivery profile

The public hero consumes the delivery profile declared by `src/contracts/cinematic-web-hero.ts`. Photographic masters remain canonical in `rocksoul-assets`; consumer documentation does not duplicate the hero source commit.
