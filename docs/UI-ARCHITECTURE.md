# RockSoul UI architecture

RockSoul UI is an owned component system built on accessible React primitives. It follows the practical source-ownership model of shadcn/ui and uses an atomic hierarchy for composition. The hierarchy is a dependency contract, not a reason to create empty folders.

## The hierarchy

```text
Level 0  Foundation        raw values, semantic values, CSS variables, assets
Level 1  Sub-primitives    accessibility behavior and non-visual parts
Level 2  Atoms             one visible element or one input control
Level 3  Molecules         a small, repeatable interaction
Level 4  Organisms         a complete area of a screen
Level 5  Templates         page layout and content slots
Level 6  Features          routes, API data, business rules (apps/web only)
```

Dependencies only point down the hierarchy. A lower level never imports a higher level.

```text
foundation <- sub-primitives <- atoms <- molecules <- organisms <- templates <- features
```

`features` do not belong to this package. A component that knows a route, an API response, a product entity, permissions, or a business workflow belongs in `apps/web/src/features`.

## Target source tree

```text
src/
  foundation/
    tokens/
      primitive/             # raw scale: blue-500, space-4, font-size-14
      semantic/              # intent: text-primary, surface-raised, status-warning
      component/             # local aliases: button-primary-background
    themes/                  # light, dark, and RockSoul theme mappings
    assets/                  # source icons, logos, illustrations, patterns
    styles/                  # reset, global CSS, and shared utilities

  primitives/
    behavior/                # Pressable, FocusTrap, Portal, VisuallyHidden, Slot
    collection/              # List, CollectionItem, RovingFocus support
    overlay/                 # Overlay, FloatingPosition, DismissableLayer

  atoms/
    actions/                 # Button, IconButton, Link, Toggle
    inputs/                  # Input, Textarea, Checkbox, Switch, RadioGroup, Select
    display/                 # Text, Icon, Avatar, Badge, Spinner, Skeleton, Kbd
    layout/                  # Separator, ScrollArea, AspectRatio
    feedback/                # Progress, Marker

  molecules/
    forms/                   # Field, InputGroup, SearchInput, PasswordInput
    actions/                 # ButtonGroup, CopyButton, SplitButton
    navigation/              # Breadcrumb, Tabs, Pagination
    display/                 # KeyValue, Stat, EmptyState, StatusBadge
    feedback/                # Alert, InlineMessage

  organisms/
    data/                    # DataTable and its toolbar, pagination, columns
    forms/                   # FilterBar, FormSection, DateRangePicker
    navigation/              # Sidebar, CommandMenu, Topbar
    overlays/                # Dialog, AlertDialog, Drawer, Sheet
    content/                 # Timeline, ActivityFeed, AttachmentList

  templates/                 # AppShell, ListPage, DetailPage, DashboardPage
  brand/                     # RockSoulLogo, BrandIcon, Asset, Illustration
  hooks/
  lib/
  types/
  patterns/                  # reusable domain compositions built from canonical primitives
```

The current `src/components/ui` directory is the implementation of `atoms` plus generic `primitives` during migration. It remains the stable public shadcn-style import surface until files are deliberately moved. No consumer should import package source paths directly.

## Foundation and sub-primitives

Foundation has three token levels. A component must consume semantic or component tokens; it must not use a raw color or arbitrary spacing value unless the value is being defined in the token source itself.

| Level | Example | May be used by |
| --- | --- | --- |
| Primitive token | `blue.500`, `space.4`, `radius.2` | semantic tokens only |
| Semantic token | `action.primary`, `text.muted`, `surface.raised` | all components |
| Component token | `button.primary.background` | the owning component only |

### Quanta and design-value ownership

**Quanta** are the lowest reusable design values: color swatches, spacing, line widths, radii, opacity, type scale, motion, easing, breakpoints, z-index, grid units, and reusable geometry dimensions. Quanta carry no product or component meaning. They belong to the existing primitive-token foundation; they are not a second theme or token system.

Ownership flows in one direction:

```text
QUANTA / PRIMITIVE TOKENS
          ↓
    SEMANTIC TOKENS
          ↓
    COMPONENT TOKENS
```

A normal component consumes semantic or component ownership. Raw literals are permitted only where their ownership is explicit, such as canonical token declarations, intrinsic/generated assets, derived runtime geometry, or a narrow reviewed exception.

`npm run audit:design-values` enforces this contract across source. It produces machine-readable evidence in `artifacts/audit/design-values.json`, validates `--mw-*` references, classifies generated/asset sources, inventories repeated candidate values, and fails new unexplained visual decisions. The Phase 1 baseline in `config/design-audit-baseline.json` is an immutable ratchet: untouched legacy debt remains visible as warnings; a touched source file must satisfy current rules. Used-but-undefined CSS variables and invalid generated provenance always fail closed.

Exceptions live only in `config/design-audit-exceptions.json`. They require an exact path, rule, reason, and owner; broad globs are forbidden. Generated ownership lives in `config/generated-sources.json`. Do not edit generated artifacts merely to satisfy an audit.

The source tree is canonical truth. `docs/ui-component-inventory.json` is derived evidence and `npm run audit:architecture` rejects drift between that inventory and the current molecule/organism/template source tree. Public API stability is independently compared to the Phase 1 baseline by `npm run audit:api-stability`.

Phase 1 does not introduce HUD-specific component families, token namespaces, slot names, or a parallel primitive architecture. Future visual personalities must evolve the existing owners.

Sub-primitives provide behavior or a component part, not a product-facing visual component. Examples are `Portal`, `FocusTrap`, `VisuallyHidden`, `Slot`, keyboard navigation, and dismissal behavior. They may be implemented with Radix or Base UI and are normally not exported to applications. An atom may use them; an application must not compose a new dialog from them.

## Component classification

Use these questions in order.

1. Does it know product data, a route, an API, a permission, or a workflow? Put it in `apps/web/src/features`.
2. Is it a page frame with generic content slots? It is a template.
3. Does it contain several controls and its own UI state, such as table sorting or filter visibility? It is an organism.
4. Does it combine two or more atoms for one repeated action, such as label + input + error? It is a molecule.
5. Does it render one control or one visual unit? It is an atom.
6. Does it only supply behavior, an accessible part, or a token? It is a sub-primitive or foundation item.

Examples:

| Component | Level | Reason |
| --- | --- | --- |
| `Button` | Atom | one action control |
| `Dialog` | Generic primitive | generic accessible overlay behavior; kept beside atoms during migration |
| `Field` | Molecule | label, control, description, and validation message |
| `SearchInput` | Molecule | input, icon, clear action, and keyboard behavior |
| `DataTable` | Organism | columns, selection, sorting, pagination, toolbar |
| `AppShell` | Template | page frame with slots |
| `AwsCaseScreen` | Feature | understands a RockSoul workflow and data |

## Standard names and public imports

Use common English UI names. Do not invent synonyms or use a product prefix for generic UI.

```tsx
import { Button, Input, Dialog } from "@rocksoul/ui/components/ui"
import { StatusBadge } from "@rocksoul/ui"
```

Use names such as `Button`, `Field`, `SearchInput`, `FilterBar`, `DataTable`, `EmptyState`, `PageHeader`, and `StatusBadge`. Avoid names such as `SmartSearchBox`, `UniversalGrid`, `ControlStrip`, `Experience`, `Widget`, `Common`, and `Shared`.

Each public component has one canonical owner and one canonical import path. A new component must compose the owner instead of copying its implementation. `Button` cannot be reimplemented inside a feature, and a domain status component must compose `Badge` rather than introduce a second generic badge family.

## Rules

1. `foundation` contains no React product components and no application imports.
2. `primitives` and `atoms` contain no business terms, API types, routes, or data fetching.
3. A molecule imports only foundation, primitives, atoms, hooks, lib, and types.
4. An organism imports only lower UI levels. It may keep local presentation state but never fetches product data.
5. A template defines layout and slots only. It does not decide business permissions or render feature-specific data.
6. `apps/web/src/features` owns queries, mutations, route state, permissions, and feature-specific components.
7. New generic controls use existing `components/ui` primitives until the target folders are introduced. No new compatibility adapter is permitted.
8. Compatibility adapters are removed. A compatibility folder must not be recreated or added to a new public API.
9. Do not use `common`, `shared`, `misc`, `helpers`, or `widgets` as component ownership folders.
10. New visual values must use tokens. Raw hexadecimal colors, arbitrary shadows, and arbitrary radii require a token proposal first.
11. Each public component needs a story, keyboard behavior where interactive, and an empty/loading/error treatment where applicable.
12. A component is promoted to `organisms` only after two independent features need the same structure and behavior.

## Migration order

1. Keep `components/ui` stable as the canonical primitive surface.
2. Extract foundation tokens without changing rendered output.
3. Move generic helper behavior into `primitives`.
4. Promote repeated compositions into molecules, then organisms only after a second consumer exists.
5. Move page frames into templates.
6. Move route-aware code into `apps/web/src/features`.
7. Replace and delete every legacy compatibility module.

No broad file move is accepted without a classification decision, an updated public export, consumer migration, and typecheck/build verification.
