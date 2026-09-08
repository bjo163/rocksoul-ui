# Rocksoul UI — Assets Release Sync

Current design source:

```text
bjo163/rocksoul-assets
main @ 7d924d5915364b222e1d1287e493f4b742e283a3
release: 1.3.0
repository acceptance: passed
```

Implemented consumer package:

```text
@rocksoul/ui 0.10.0
```

The package implements the MoonWitness brand system, shared public/application visual grammar, authenticated v2 shell/screens, AutoMenu navigation, canonical resource descriptors, responsive shell geometry, unified system states, and typed access to the complete 41-family v1.3 asset registry.

Canonical active repository map:

```text
STORY       → rocksoul-mftl
EVENT       → rocksoul-legend
PERSON      → rocksoul-superhero
TEXT        → rocksoul-rgbl
LAW         → rocksoul-aws
CORRELATION → rocksoul-correlation
```

## Stable v1.3 contract

`rocksoul-assets/main` is now the production design source for v1.3.0. UI consumers use the stable 41-pack contract; core runtime packs may remain mirrored and byte-locked, while larger delivery families are staged by the consuming application or resolved from the canonical asset base.

CI verifies:

- the recorded `rocksoul-assets/main` commit is still current;
- the v1.3 release and 41-pack registry are present;
- core mirrored assets retain byte integrity;
- TypeScript, library build, playground, Storybook, accessibility and application contracts remain valid.

## Verification boundary

Live native Penpot reconstruction/prototype/accessibility inspection remains a manual workspace gate and is not represented as repository CI.
