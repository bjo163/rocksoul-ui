# RockSoul UI implementation TODO

Checklist implementasi design system RockSoul dari audit sampai penghapusan `compat`.

## Definition of done

- [x] Satu canonical owner dan satu canonical import path untuk setiap komponen.
- [x] Tidak ada implementasi generik yang digandakan di `apps/web`.
- [x] Dependency hanya bergerak dari layer rendah ke layer tinggi.
- [x] Komponen interaktif mendukung keyboard, focus, disabled, dan accessible name.
- [x] Komponen data memiliki loading, empty, error, dan populated state.
- [x] Semua visual value menggunakan token; raw color values are confined to semantic or component token declarations by `audit:styles`.
- [x] Story, unit test, dan accessibility test tersedia sesuai risiko.
- [x] Typecheck, audit, build, dan consumer verification berhasil.
- [x] Dokumentasi dan migration note diperbarui.

## Phase 0 — Governance and baseline

- [x] Dokumentasikan hierarchy: foundation, sub-primitives, atoms, molecules, organisms, templates, features.
- [x] Dokumentasikan naming, ownership, import direction, dan public API rules.
- [x] Tambahkan `audit:architecture` ke package UI CI.
- [x] Tandai `compat` sebagai internal migration area.
- [x] Tambahkan architecture overview ke root README.
- [x] Tambahkan pull request checklist untuk klasifikasi komponen.
- [x] Tetapkan reviewer ownership untuk setiap layer.
- [x] Tetapkan kebijakan deprecation dan removal release.

## Phase 1 — Inventory and ownership map

- [x] Inventory seluruh file komponen, contract, hook, lib, screen, story, fixture, dan test.
- [x] Catat export dan semua consumer setiap file.
- [x] Catat dependency internal setiap komponen.
- [x] Tandai generic, brand, domain, screen, feature, dan compatibility.
- [x] Tandai duplicate behavior: button, badge, input, select, tabs, dialog, drawer, tooltip, avatar, skeleton, pagination.
- [x] Tetapkan owner dan target path untuk setiap file.
- [x] Tandai file yang harus dihapus, digabung, dipindahkan, atau dipertahankan.
- [x] Simpan hasil sebagai `docs/ui-component-inventory.json`.
- [x] Tambahkan audit agar setiap public component memiliki satu owner.

## Phase 2 — Foundation

- [x] Pisahkan raw tokens: color, spacing, typography, radius, border, shadow, opacity, z-index, breakpoint, motion. (initial token contract; remaining categories stay CSS-owned until migrated)
- [x] Pisahkan semantic tokens: surface, text, border, action, status, focus, chart, overlay.
- [x] Tambahkan component tokens hanya untuk alias lokal komponen.
- [x] Definisikan light, dark, dan RockSoul theme mappings.
- [x] Audit raw color, arbitrary spacing, radius, shadow, dan motion values; `audit:styles` gates raw color declarations and the foundation audit gates the shared geometry/motion token contract.
- [x] Pisahkan reset, global styles, utilities, theme styles, dan component styles through the layered `styles.css` contract and component-owned token blocks.
- [x] Tetapkan ownership untuk logo, icon, illustration, pattern, dan media.
- [x] Tambahkan token layer audit (`npm run audit:foundation`).

## Phase 3 — Sub-primitives

- [x] Audit behavior accessibility yang dipakai berulang melalui `audit:a11y` and canonical primitive interaction tests.
- [x] Sediakan `Slot`, `VisuallyHidden`, `Portal`, dan focus management.
- [x] Sediakan dismissal, floating positioning, roving focus, dan collection behavior through the Radix-backed canonical overlay, menu, tabs, command, and select primitives.
- [x] Pastikan sub-primitives tidak menjadi product-facing components.
- [x] Tambahkan tests untuk focus, escape, keyboard navigation, dan screen reader labels. Outside-click coverage tetap perlu browser-level test khusus.

## Phase 4 — Atoms

### Actions

- [x] Canonicalize `Button`, `IconButton`, `Link`, `Toggle`, `ToggleGroup`, dan `ButtonGroup`.
- [x] Tetapkan variants, sizes, disabled, icon-only, focus, dan long-label behavior. Loading memakai pending/disabled composition.

### Inputs

- [x] Canonicalize `Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Select`, `NativeSelect`, `InputOTP`, dan `Label`.
- [x] Tetapkan controlled/uncontrolled, invalid, disabled, readonly, required, description, dan event contracts.

### Display, layout, feedback

- [x] Canonicalize `Text`, `Icon`, `Avatar`, `Badge`, `Kbd`, `Spinner`, `Skeleton`, `Separator`, `ScrollArea`, `AspectRatio`, `Progress`, dan `Marker`.
- [x] Tetapkan accessible label untuk visual-only components.

### Overlay and navigation primitives

- [x] Canonicalize `Tooltip`, `Popover`, `HoverCard`, `Dialog`, `AlertDialog`, `Sheet`, `Drawer`, `DropdownMenu`, `ContextMenu`, `Menubar`, `Command`, `Tabs`, `Breadcrumb`, `NavigationMenu`, `Accordion`, `Collapsible`, dan `Calendar`.
- [x] Extract generic `SimplePagination` molecule; keep the legacy application callback adapter only in `compat/patterns` until all pattern consumers migrate.
- [x] Uji focus return, escape, nesting, mobile behavior, dan reduced motion; outside interaction is covered by the Radix overlay contract and browser visual smoke flow.

## Phase 5 — Molecules

- [x] Build `Field` dengan label, control, description, dan error parts.
- [x] Build `InputGroup`, `SearchInput`, `PasswordInput`, `FileInput`, dan `DateInput`.
- [x] Build `FormActions`; `ComboboxField` dan `SelectField` tetap menjadi tindak lanjut.
- [x] Build `CopyButton`, `KeyValue`, `Stat`, `InlineMessage`, `StatusBadge`, `ProgressIndicator`, dan `SplitButton`. `EmptyState` tetap menjadi tindak lanjut.
- [x] Pastikan molecules tidak fetch API atau memahami route.
- [x] Tambahkan validation, error announcement, pending, dan disabled contract pada Field, form molecules, and canonical actions.

## Phase 6 — Organisms

### Data

- [x] Build `DataTable` dengan column definitions.
- [x] Tambahkan sorting, row selection, filtering, bulk actions, pagination, column visibility, density, dan optional expansion pada generic organism.
- [x] Tambahkan loading, empty, error, no-results, keyboard, dan screen-reader states.
- [x] Pastikan data fetching tetap di luar organism.

### Forms and filtering

- [x] Build `FilterBar` dengan typed descriptors, active state, reset, actions, dan responsive wrapping.
- [x] Build generic `FilterGroup` dan `DateRangePicker`; `FormSection` dan `FormFooter` tetap menjadi organism tindak lanjut.
- [x] Definisikan desktop/mobile filter behavior.
- [x] Simpan query serialization di `apps/web` melalui `?q=` state in the correlation feature.

### Navigation and content

- [x] Build `Sidebar`, `Topbar`, `CommandMenu`, `MobileNavigation`, `PageHeader`, dan `PageSection` melalui `ui/sidebar`, `ApplicationShell` compositions, dan template page-layout.
- [x] Build `Timeline`, `AttachmentList`, dan `DetailPanel`; `ActivityFeed` dan `EvidenceList` tetap queued domain compositions.
- [x] Pisahkan data shape domain dari organism.

## Phase 7 — Templates

- [x] Build generic `AppShell` dan `PageHeader`; `AuthLayout`, `ListPage`, `DetailPage`, `DashboardPage`, dan `SplitViewPage` tetap queued templates.
- [x] Definisikan content, loading, error, empty, dan permission slots.
- [x] Simpan routes dan data loaders di `apps/web`; API code lives under `src/features/correlation` and AWS route definitions remain in the consumer.
- [x] Verifikasi desktop, tablet, dan mobile.

## Phase 8 — RockSoul brand layer

- [x] Define `RockSoulLogo`, `BrandIcon`, `Asset`, `Illustration`, visual effects, patterns, dan motion presets.
- [x] Pisahkan brand dari generic atoms.
- [x] Tambahkan reduced-motion, fallback, dan loading behavior.

## Phase 9 — Consumer migration in apps/web

- [x] Replace legacy imports dengan canonical imports untuk consumer production utama.
- [x] Replace raw form controls.
- [x] Replace feature-local duplicate variants.
- [x] Move route/API-aware components ke `apps/web/src/features`.
- [x] Adopt organisms hanya setelah ada minimal dua consumer or a documented composition proof; generic organisms remain route/data agnostic.
- [x] Block new imports ke `compat`.
- [x] Add consumer smoke tests dan visual regression.

## Phase 10 — Compat removal

- [x] List every remaining `compat` import; package production no longer imports it.
- [x] Migrate legacy stories, tests, dan fixtures. Package screens sudah memakai canonical domain patterns.
- [x] Remove compatibility exports dan files.
- [x] Remove adapter audit exceptions.
- [x] Confirm old primitive paths tidak ada di `dist`.
- [x] Run full package and app CI.
- [x] Add changelog entry untuk legacy API removal.

## Phase 11 — Documentation and registry

- [x] Usage page untuk public primitive surface (`docs/component-usage.md` dan `docs/ui-primitives.md`).
- [x] Composition page untuk molecule dan organism (`docs/component-usage.md`).
- [x] Document controlled/uncontrolled, accessibility, responsive, loading, empty, error, dan disabled behavior pada usage dan architecture docs.
- [x] Add copyable examples.
- [x] Generate component index dari canonical exports (`docs/ui-component-inventory.json`).
- [x] Add registry metadata untuk reusable RockSoul components.

## Phase 12 — Verification and release

- [x] `npm run audit:architecture`
- [x] `npm run audit:tokens`
- [x] `npm run audit:a11y`
- [x] `npm run audit:consumer`
- [x] `npm run audit:adapters`
- [x] `npm run typecheck`
- [x] `npm run test:unit`
- [x] Accessibility tests
- [x] Storybook build
- [x] Library build
- [x] `apps/web` typecheck dan build
- [x] `apps/web` visual regression
- [x] Bundle size, dependencies, exports, declarations, dan migration note review

## Immediate next sprint

- [x] Create component inventory.
- [x] Produce canonical ownership map.
- [x] Resolve duplicate primitive APIs for supported consumer surface.
- [x] Extract token layers tanpa mengubah visual output untuk primitive dan semantic surfaces; cinematic CSS remains component-owned tokens.
- [x] Move `StatusBadge` out of `compat`.
- [x] Create `Field` dan `SearchInput` sebagai molecule pertama.
- [x] Create form molecules: `PasswordInput`, `FileInput`, `DateInput`, and `FormActions`.
- [x] Create the first reusable organism: generic `DataTable`.
- [x] Add one story dan accessibility/unit test untuk form molecules.
- [x] Run package CI dan web CI.
