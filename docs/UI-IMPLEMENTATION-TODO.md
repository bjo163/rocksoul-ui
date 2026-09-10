# RockSoul UI implementation TODO

Checklist implementasi design system RockSoul dari audit sampai penghapusan `compat`.

## Definition of done

- [ ] Satu canonical owner dan satu canonical import path untuk setiap komponen.
- [ ] Tidak ada implementasi generik yang digandakan di `apps/web`.
- [ ] Dependency hanya bergerak dari layer rendah ke layer tinggi.
- [ ] Komponen interaktif mendukung keyboard, focus, disabled, dan accessible name.
- [ ] Komponen data memiliki loading, empty, error, dan populated state.
- [ ] Semua visual value menggunakan token.
- [ ] Story, unit test, dan accessibility test tersedia sesuai risiko.
- [ ] Typecheck, audit, build, dan consumer verification berhasil.
- [ ] Dokumentasi dan migration note diperbarui.

## Phase 0 — Governance and baseline

- [x] Dokumentasikan hierarchy: foundation, sub-primitives, atoms, molecules, organisms, templates, features.
- [x] Dokumentasikan naming, ownership, import direction, dan public API rules.
- [x] Tambahkan `audit:architecture` ke package UI CI.
- [x] Tandai `compat` sebagai internal migration area.
- [ ] Tambahkan architecture overview ke root README.
- [ ] Tambahkan pull request checklist untuk klasifikasi komponen.
- [ ] Tetapkan reviewer ownership untuk setiap layer.
- [ ] Tetapkan kebijakan deprecation dan removal release.

## Phase 1 — Inventory and ownership map

- [x] Inventory seluruh file komponen, contract, hook, lib, screen, story, fixture, dan test.
- [ ] Catat export dan semua consumer setiap file.
- [ ] Catat dependency internal setiap komponen.
- [ ] Tandai generic, brand, domain, screen, feature, dan compatibility.
- [x] Tandai duplicate behavior: button, badge, input, select, tabs, dialog, drawer, tooltip, avatar, skeleton, pagination.
- [ ] Tetapkan owner dan target path untuk setiap file.
- [ ] Tandai file yang harus dihapus, digabung, dipindahkan, atau dipertahankan.
- [x] Simpan hasil sebagai `docs/ui-component-inventory.json`.
- [ ] Tambahkan audit agar setiap public component memiliki satu owner.

## Phase 2 — Foundation

- [ ] Pisahkan raw tokens: color, spacing, typography, radius, border, shadow, opacity, z-index, breakpoint, motion.
- [ ] Pisahkan semantic tokens: surface, text, border, action, status, focus, chart, overlay.
- [ ] Tambahkan component tokens hanya untuk alias lokal komponen.
- [ ] Definisikan light, dark, dan RockSoul theme mappings.
- [ ] Audit raw color, arbitrary spacing, radius, shadow, dan motion values.
- [ ] Pisahkan reset, global styles, utilities, theme styles, dan component styles.
- [ ] Tetapkan ownership untuk logo, icon, illustration, pattern, dan media.
- [ ] Tambahkan token snapshot test.

## Phase 3 — Sub-primitives

- [ ] Audit behavior accessibility yang dipakai berulang.
- [ ] Sediakan `Slot`, `VisuallyHidden`, `Portal`, dan focus management.
- [ ] Sediakan dismissal, floating positioning, roving focus, dan collection behavior.
- [ ] Pastikan sub-primitives tidak menjadi product-facing components.
- [ ] Tambahkan tests untuk focus, escape, outside click, keyboard navigation, dan screen reader labels.

## Phase 4 — Atoms

### Actions

- [ ] Canonicalize `Button`, `IconButton`, `Link`, `Toggle`, `ToggleGroup`, dan `ButtonGroup`.
- [ ] Tetapkan variants, sizes, loading, disabled, icon-only, focus, dan long-label behavior.

### Inputs

- [ ] Canonicalize `Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Select`, `NativeSelect`, `InputOTP`, dan `Label`.
- [ ] Tetapkan controlled/uncontrolled, invalid, disabled, readonly, required, description, dan event contracts.

### Display, layout, feedback

- [ ] Canonicalize `Text`, `Icon`, `Avatar`, `Badge`, `Kbd`, `Spinner`, `Skeleton`, `Separator`, `ScrollArea`, `AspectRatio`, `Progress`, dan `Marker`.
- [ ] Tetapkan accessible label untuk visual-only components.

### Overlay and navigation primitives

- [ ] Canonicalize `Tooltip`, `Popover`, `HoverCard`, `Dialog`, `AlertDialog`, `Sheet`, `Drawer`, `DropdownMenu`, `ContextMenu`, `Menubar`, `Command`, `Tabs`, `Breadcrumb`, `Pagination`, `NavigationMenu`, `Accordion`, `Collapsible`, dan `Calendar`.
- [ ] Uji focus return, escape, outside interaction, nesting, mobile behavior, dan reduced motion.

## Phase 5 — Molecules

- [ ] Build `Field` dengan label, control, description, dan error parts.
- [ ] Build `InputGroup`, `SearchInput`, `PasswordInput`, `FileInput`, dan `DateInput`.
- [ ] Build `ComboboxField`, `SelectField`, dan `FormActions`.
- [ ] Build `CopyButton`, `SplitButton`, `KeyValue`, `Stat`, `EmptyState`, `InlineMessage`, `StatusBadge`, dan `ProgressIndicator`.
- [ ] Pastikan molecules tidak fetch API atau memahami route.
- [ ] Tambahkan validation, error announcement, pending, dan disabled contract.

## Phase 6 — Organisms

### Data

- [ ] Build `DataTable` dengan column definitions.
- [ ] Tambahkan sorting, filtering, row selection, bulk actions, pagination, column visibility, density, dan optional expansion.
- [ ] Tambahkan loading, empty, error, no-results, keyboard, dan screen-reader states.
- [ ] Pastikan data fetching tetap di luar organism.

### Forms and filtering

- [ ] Build `FilterBar`, `FilterGroup`, `DateRangePicker`, `FormSection`, dan `FormFooter`.
- [ ] Definisikan desktop/mobile filter behavior.
- [ ] Simpan query serialization di `apps/web`.

### Navigation and content

- [ ] Build `Sidebar`, `Topbar`, `CommandMenu`, `MobileNavigation`, `PageHeader`, dan `PageSection`.
- [ ] Build `Timeline`, `ActivityFeed`, `AttachmentList`, `EvidenceList`, dan `DetailPanel`.
- [ ] Pisahkan data shape domain dari organism.

## Phase 7 — Templates

- [ ] Build `AppShell`, `AuthLayout`, `ListPage`, `DetailPage`, `DashboardPage`, dan `SplitViewPage`.
- [ ] Definisikan content, loading, error, empty, dan permission slots.
- [ ] Simpan routes dan data loaders di `apps/web`.
- [ ] Verifikasi desktop, tablet, dan mobile.

## Phase 8 — RockSoul brand layer

- [ ] Define `RockSoulLogo`, `BrandIcon`, `Asset`, `Illustration`, visual effects, patterns, dan motion presets.
- [ ] Pisahkan brand dari generic atoms.
- [ ] Tambahkan reduced-motion, fallback, dan loading behavior.

## Phase 9 — Consumer migration in apps/web

- [ ] Replace legacy imports dengan canonical imports.
- [ ] Replace raw form controls.
- [ ] Replace feature-local duplicate variants.
- [ ] Move route/API-aware components ke `apps/web/src/features`.
- [ ] Adopt organisms hanya setelah ada minimal dua consumer.
- [ ] Block new imports ke `compat`.
- [ ] Add consumer smoke tests dan visual regression.

## Phase 10 — Compat removal

- [ ] List every remaining `compat` import.
- [ ] Migrate package screens, stories, tests, dan fixtures.
- [ ] Remove compatibility exports dan files.
- [ ] Remove adapter audit exceptions.
- [ ] Confirm old primitive paths tidak ada di `dist`.
- [ ] Run full package and app CI.
- [ ] Add changelog entry untuk legacy API removal.

## Phase 11 — Documentation and registry

- [ ] Usage page untuk setiap public atom.
- [ ] Composition page untuk molecule dan organism.
- [ ] Document controlled/uncontrolled, accessibility, responsive, loading, empty, error, dan disabled behavior.
- [ ] Add copyable examples.
- [ ] Generate component index dari canonical exports.
- [ ] Add registry metadata untuk reusable RockSoul components.

## Phase 12 — Verification and release

- [ ] `npm run audit:architecture`
- [ ] `npm run audit:tokens`
- [ ] `npm run audit:a11y`
- [ ] `npm run audit:consumer`
- [ ] `npm run audit:adapters`
- [ ] `npm run typecheck`
- [ ] `npm run test:unit`
- [ ] Accessibility tests
- [ ] Storybook build
- [ ] Library build
- [ ] `apps/web` typecheck dan build
- [ ] `apps/web` visual regression
- [ ] Bundle size, dependencies, exports, declarations, dan migration note review

## Immediate next sprint

- [ ] Create component inventory.
- [ ] Produce canonical ownership map.
- [ ] Resolve duplicate primitive APIs.
- [ ] Extract token layers tanpa mengubah visual output.
- [ ] Move `StatusBadge` out of `compat`.
- [ ] Create `Field` dan `SearchInput` sebagai molecule pertama.
- [ ] Add one story dan accessibility test untuk masing-masing.
- [ ] Run package CI dan web CI.
