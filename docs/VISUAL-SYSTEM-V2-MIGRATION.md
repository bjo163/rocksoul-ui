# Visual System 2.0 Runtime Migration

## Scope

`@rocksoul/ui` implements the frozen ROCKSOUL Visual System 2.0 runtime contract. The canonical visual/semantic authority remains `rocksoul-assets`; this document describes the currently supported UI runtime boundary and the migration direction for consumers.

## Compatibility boundary

The runtime consumes the pinned Visual System 2.0 projection exposed by:

- `src/contracts/visual-system-v2.ts`
- `src/contracts/visual-system-v2.compatibility.json`

The current frozen projection provides typed values for:

- typography roles: `display`, `body`, `mono`, `archive-serif`
- density modes: `compact`, `comfortable`, `editorial`
- surface personalities: `operator`, `forensic`, `editorial`, `archive`, `cinematic`, `community`
- graph node and edge semantic IDs
- chart IDs
- lifecycle statuses

Do not add local semantic IDs that are absent from the frozen upstream projection.

## Semantic composition

The first executable Semantic Composer slice is available internally through `src/contracts/semantic-composer.ts`.

Use the typed parser before composing runtime state:

```ts
const state = parseVisualSemanticState({
  graphNode: "evidence",
  lifecycle: "active",
  surface: "forensic",
})

const presentation = composeVisualSemanticState(state, "graph")
```

The parser is fail-closed for unsupported frozen V2 values. The composer separates primary role, secondary marks, tertiary metadata, inspector details and interaction overlay. Interaction remains orthogonal to semantic identity.

This is a foundation slice of issue #50, not the final full corpus-backed Semantic Composer implementation.

## Density migration

Prefer an explicit semantic density where the consumer needs to override the surface default:

```ts
composeVisualSemanticState(state, "document")
```

Current surface defaults:

| Surface | Default density |
| --- | --- |
| table | compact |
| graph | compact |
| map | compact |
| timeline | comfortable |
| inspector | comfortable |
| document | editorial |
| console | compact |
| mobile | compact |

Avoid arbitrary per-screen spacing patches when a canonical density token is appropriate.

## Surface personalities

Use the frozen personality vocabulary rather than inventing a new UI personality:

`operator` · `forensic` · `editorial` · `archive` · `cinematic` · `community`

Personality is a surface-level semantic contract. It should not be recreated by manually stacking unrelated CSS classes.

## Graph and chart semantics

Use the frozen V2 graph node/edge and chart IDs exposed by `visual-system-v2.ts`. Selection and focus are interaction concerns, not replacements for semantic type, lifecycle, provenance or severity.

Unknown semantic IDs must fail during development/contract validation rather than silently rendering a generic visual treatment.

## Asset migration

Consumers should prefer canonical asset contracts and semantic lookup over fragile raw file paths. Screen references/specimens are not production primitives.

When an asset is deprecated upstream, migrate to its canonical replacement before relying on a local exception.

## Accessibility

Semantic composition must preserve meaning without depending on color alone. Accessibility descriptions should summarize semantic identity and relevant metadata while avoiding decorative visual-only details.

Validate:

- keyboard focus visibility
- grayscale comprehension
- reduced motion behavior
- high-contrast/forced-color behavior where supported
- long labels and dense content

## Release / compatibility rule

`SYNCED != COMPATIBLE` and `FRESH != SEMANTICALLY SUPPORTED`.

The UI runtime must remain bound to the exact upstream Visual System identity recorded by the compatibility projection. Breaking upstream semantic drift belongs in the cross-repo compatibility workflow, not in an ad-hoc local reinterpretation.

## Current implementation status

Completed foundations:

- Visual System 2.0 compatibility projection
- typed V2 identity guards
- deterministic Semantic Composer foundation
- release/repository CI gates

Still in progress:

- full upstream semantic-dimension ingestion
- cross-surface Golden Corpus harness
- graph/map/timeline/Console composition adoption
- Storybook Constitution Lab
- final Visual System 2.0 browser/visual evidence

See issues #32, #50, #51, #52 and #53 for the authoritative implementation backlog and final gate.