# Component usage

Architecture, ownership levels, naming, dependency boundaries, and the required review checklist live in [UI architecture](./UI-ARCHITECTURE.md) and [UI architecture rules](./UI-ARCHITECTURE-RULES.md).

The complete implementation checklist is in [UI implementation TODO](./UI-IMPLEMENTATION-TODO.md).

`apps/web` is the first consumer. Import generic controls from `@rocksoul/ui/components/ui/<name>`. Import domain components and the existing asset provider from `@rocksoul/ui`. Do not copy component source into the app.

## Ready to use

| Need | Components |
| --- | --- |
| Forms | Field, FieldLabel, FieldDescription, FieldError, Input, Textarea, Checkbox, RadioGroup, Switch, Select, NativeSelect |
| Actions | Button, ButtonGroup, DropdownMenu, ContextMenu |
| Layout | Card, Separator, ScrollArea, Resizable, Accordion, Collapsible |
| Navigation | Tabs, Breadcrumb, Pagination, NavigationMenu, Sidebar, Command |
| Overlays | Dialog, AlertDialog, Sheet, Drawer, Popover, Tooltip, HoverCard |
| Feedback | Alert, Badge, Progress, Spinner, Skeleton, Empty, Toaster |
| Data and media | Table, Calendar, Chart, Carousel, Avatar, Asset, RegistryAsset |
| Domain UI | StatusBadge, LegalStatus, SourceBlock, ResearchDomainOwnershipMap, ApplicationShell |

All primitive modules have built exports and TypeScript declarations. Keyboard/focus tests cover key controls and compatibility adapters; they are not exhaustive browser certification of every component. `apps/web` uses Button, Input, Field, FieldLabel, FieldDescription, Spinner, and StatusBadge. Browser verification covers the public search, theme switching, case selection, and the AWS case form.

DatePicker remains a composition recipe (Calendar + Popover). `DataTable` is the reusable organism for client-side data views; its filtering, pagination, selection, expansion, density and column controls are controlled or uncontrolled through its public props. Server query state remains in the consumer.

Use `Asset` when a feature owns an explicit file from a local pack. Use `RegistryAsset` for canonical SVG/PNG entries from the version-pinned registry, including `semantic-primitives`, `evidence-integrity`, `authorization-security`, `data-grid`, `form-controls`, and the other 39 asset packs. Decorative assets use `alt=""`; meaningful images need a concise description.

## Ownership and compatibility

The historical primitive adapters have been removed. Domain patterns live under `src/components/patterns`; all supported consumers and stories use canonical primitives. `components/compat` is a deletion-complete path and must not be recreated.

## API stability

Modules under `components/ui`, `components/molecules`, `components/organisms`, and `components/templates` are the supported public API. Product-specific patterns and candidate asset aliases are migration surfaces; new code should use the canonical primitive or registry API directly. A component is promoted to stable only after it has a public usage entry, an accessibility contract test, and a consumer audit entry.

| Compatibility API | Owner / replacement | Why it remains temporarily |
| --- | --- | --- |
| Button, buttonVariants | ui/button | Preserves primary/danger variants, leading/trailing content and loading props |
| Badge, badgeVariants | StatusBadge composing ui/badge | Domain states such as supported/restricted are different from generic visual variants |
| Input | ui/input | Preserves label, helper and error props |
| Textarea | ui/textarea | Preserves label and character count |
| Select | ui/native-select | Existing options array and native change events; ui/select is the composable popup API |
| Checkbox, Switch | Existing native form compatibility | Native input change events and form behavior differ from Radix checked-change callbacks; new screens use ui/checkbox and ui/switch |
| Tabs | ui/tabs | Converts an items array to parts; preserves mounted content |
| Dialog | ui/dialog | Converts open/title/onClose to the controlled primitive |
| Drawer | ui/sheet | The old component is a side panel; ui/drawer is the gesture-driven drawer |
| Tooltip | ui/tooltip | Converts label/shortcut props to tooltip parts |
| Avatar | ui/avatar | Preserves initials and presence status |
| Skeleton | ui/skeleton | Preserves named dimensions |
| Pagination | molecules/pagination + ui/pagination | Generic `SimplePagination` owns layout; app callbacks stay in the consumer |

IconButton composes ui/button. Divider composes ui/separator. Native Radio remains a labelled native input adapter; RadioGroup is the standard choice for new grouped selection. `Asset` reuses the current asset provider and URL resolver. New consumers cannot import these compatibility files through package exports.

Use ordinary names such as Button, Input, Field, Sheet and StatusBadge. Keep domain terms only where they carry domain meaning. Do not introduce a second prefixed component family or synonyms for existing primitives.

## Checks

From `packages/ui`: `npm run audit:consumer` checks unique component files, declared compatibility overlaps, dependency direction, and consumer imports. It rejects raw button/input/select/textarea elements and old primitive imports in `apps/web/src`. This is a bounded ownership check, not proof that all possible visual or behavioral overlap has been eliminated.

From `apps/web`: `pnpm run ci` runs the UI consumer check along with app contract checks, typecheck and build. The check expects the sibling UI package to be built first. No deployment is performed.

The web consumer also runs four Playwright baselines (`pnpm run test:visual`): public observatory and AWS case form on desktop/mobile. Search is verified semantically because its API-backed case detail is dynamic. These are viewport baselines, so dynamic API data does not change the image height; the API fallback is part of the checked local state.
