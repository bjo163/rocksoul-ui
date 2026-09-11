# RockSoul UI review rules

This checklist is required for a new component, a component move, or a public API change.

## Before implementation

- Identify the component level using the classification questions in [UI architecture](./UI-ARCHITECTURE.md).
- Search for an existing canonical component before creating a new one.
- Define the public name, import path, owner, and supported states.
- Confirm whether the component is generic UI or belongs to an application feature.
- Identify the owner of every new reusable visual value before adding it: Quanta/primitive, semantic, or component token.

## Implementation rules

- Build from existing primitives. Do not duplicate `Button`, `Input`, `Badge`, `Dialog`, `Tabs`, `Table`, or `Field`.
- Use semantic or component tokens for reusable color, spacing, typography, borders, radius, opacity, z-index, motion, and effects.
- Do not introduce raw reusable visual literals, uncontrolled arbitrary Tailwind values, or a parallel token/theme system.
- Runtime geometry may use inline styles when it is genuinely data-derived; reusable design decisions may not hide in inline styles.
- Preserve existing canonical `data-slot` names. Do not introduce presentation-specific slots such as `hud-*`, `cyber-*`, or `tactical-*`.
- Keep API names in standard English and name props after user intent: `status`, `size`, `variant`, `disabled`, `loading`, `onChange`.
- Prefer component parts for a composed API: `Field`, `FieldLabel`, `FieldControl`, `FieldDescription`, `FieldError`.
- An interactive component must support keyboard use, visible focus, disabled state, and accessible names.
- A data component must define loading, empty, error, and populated states.
- A destructive action must use `AlertDialog`; a regular modal uses `Dialog`.
- Responsive behavior belongs to the component when it is structural. Route-specific responsiveness belongs to the feature.

## Design-value exceptions and generated files

- Exceptions belong only in `config/design-audit-exceptions.json`; exact paths, rule, reason, and owner are required.
- Wildcard/glob exceptions are forbidden.
- Generated-source ownership belongs in `config/generated-sources.json`; generated output must not be manually edited to silence an audit.
- `config/design-audit-baseline.json` is the Phase 1 debt ratchet. Existing debt remains evidence, but touching a source file makes current design rules fail-closed for that file.
- Used-but-undefined `--mw-*` variables and invalid generated provenance are always errors, not baseline warnings.

## Ownership rules

| If it contains | Put it in |
| --- | --- |
| Quanta/token values, CSS variables, global styles | `foundation` |
| low-level accessible behavior or component part | `primitives` |
| one control or visual unit | `atoms` / current `components/ui` |
| a small repeated combination of atoms | `molecules` |
| a reusable screen area with local UI state | `organisms` |
| generic page frame and slots | `templates` |
| API calls, route state, permissions, or business entities | `apps/web/src/features` |
| legacy conversion only | migration work outside the public component tree |

## Public API rules

- Prefer explicit imports from `@rocksoul/ui/components/ui/<component>` for primitives.
- Do not export internal helpers, test fixtures, stories, screens, or compatibility adapters as a new public API.
- Preserve one canonical name for one behavior. Rename or remove duplicates; do not add aliases.
- A breaking API change requires a migration note and all known consumers updated in the same change.
- `npm run audit:api-stability` compares public paths, exported declarations/props/types, and the package export map with the Phase 1 baseline.

## Required verification

- Run `npm run audit:design-values`, `npm run audit:tokens`, `npm run audit:styles`, `npm run audit:architecture`, and `npm run audit:api-stability`.
- Run `npm run test:audits` to prove important audit rules have positive and negative regression coverage.
- Run `npm run typecheck`, relevant unit/accessibility tests, and builds.
- Use `npm run ci` as the canonical aggregate repository gate.
- When a component is consumed by another application, run that consumer's canonical CI command as well.
- Add or update a story before calling a reusable component ready.
