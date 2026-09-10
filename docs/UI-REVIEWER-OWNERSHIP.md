# RockSoul UI reviewer ownership

The owner is responsible for API shape, dependency direction, accessibility expectations, and migration impact. A second reviewer is required when a change crosses layers or changes a public export.

| Area | Canonical source | Review focus |
| --- | --- | --- |
| Foundation and tokens | `src/foundation`, `src/styles.css`, `src/tokens.ts` | semantic naming, theme coverage, raw-value policy |
| Sub-primitives and accessibility | `src/components/ui` behavior parts, `src/hooks`, `src/lib` | keyboard, focus, portal, dismissal, screen-reader behavior |
| Atoms | `src/components/ui` | one owner, standard API, variants, responsive behavior |
| Molecules | `src/components/molecules` | composition, validation, pending and disabled contracts |
| Organisms | `src/components/organisms` | data boundary, states, responsive behavior, no fetching |
| Templates and shell | `src/components/templates`, `src/components/application-shell.tsx` | slots, layout, navigation and permission boundaries |
| Brand and assets | `src/foundation/brand.tsx`, `src/components/asset-provider.tsx`, generated registries | provenance, fallback, reduced motion, asset sync |
| Domain compositions | `src/components`, `src/screens`, `src/contracts` | domain semantics, legal/research guardrails, consumer placement |
| Public API and release | `src/index.ts`, `package.json`, `dist`, docs | export maps, declarations, migration notes, bundle impact |

When ownership is unclear, classify the component before implementation. The architecture audit is the final automated check for dependency direction and public ownership.
