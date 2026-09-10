# RockSoul UI review rules

This checklist is required for a new component, a component move, or a public API change.

## Before implementation

- Identify the component level using the classification questions in [UI architecture](./UI-ARCHITECTURE.md).
- Search for an existing canonical component before creating a new one.
- Define the public name, import path, owner, and supported states.
- Confirm whether the component is generic UI or belongs to an application feature.

## Implementation rules

- Build from existing primitives. Do not duplicate `Button`, `Input`, `Badge`, `Dialog`, `Tabs`, `Table`, or `Field`.
- Use semantic tokens for color, spacing, typography, borders, radius, motion, and shadows.
- Keep API names in standard English and name props after user intent: `status`, `size`, `variant`, `disabled`, `loading`, `onChange`.
- Prefer component parts for a composed API: `Field`, `FieldLabel`, `FieldControl`, `FieldDescription`, `FieldError`.
- An interactive component must support keyboard use, visible focus, disabled state, and accessible names.
- A data component must define loading, empty, error, and populated states.
- A destructive action must use `AlertDialog`; a regular modal uses `Dialog`.
- Responsive behavior belongs to the component when it is structural. Route-specific responsiveness belongs to the feature.

## Ownership rules

| If it contains | Put it in |
| --- | --- |
| token values, CSS variables, global styles | `foundation` |
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
- A breaking API change requires a migration note and all `apps/web` consumers updated in the same change.

## Required verification

- Run `npm run typecheck` from `packages/ui`.
- Run the relevant unit and accessibility tests.
- Run `npm run audit:tokens`, `npm run audit:a11y`, and `npm run audit:adapters`.
- When the component is consumed by the web app, run `pnpm run ci` from `apps/web`.
- Add or update a story before calling a reusable component ready.
