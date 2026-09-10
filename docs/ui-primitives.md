# ROCKSOUL UI primitives

The primitive layer lives in `src/components/ui`. It uses shadcn's composable source pattern and accessible interaction foundations with ROCKSOUL's existing semantic colors, Inter / Inter Tight / IBM Plex Mono typography, square surfaces, and asset pack. It does not initialize a separate shadcn theme.

## Import

```tsx
import "@rocksoul/ui/styles.css"
import { Button } from "@rocksoul/ui/components/ui/button"
import {
  Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription,
} from "@rocksoul/ui/components/ui/dialog"

export function Review() {
  return (
    <Dialog>
      <DialogTrigger asChild><Button>Review evidence</Button></DialogTrigger>
      <DialogContent>
        <DialogTitle>Review evidence</DialogTitle>
        <DialogDescription>Check the source before approval.</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
```

Direct subpath imports keep optional chart, form, and carousel dependencies out of unrelated component imports. `import { UI } from "@rocksoul/ui"` also exposes the composable layer. Existing root imports such as `Button`, `Input`, `Select`, `Tabs`, and `Dialog` retain their product-specific APIs. Migrate callers explicitly; the two APIs have different props.

## Coverage

Previously there was no `components/ui` layer. Basic controls were grouped in `form-controls.tsx`, overlays in `overlays.tsx`, and navigation/product patterns elsewhere. The existing button, badge, tabs, input, textarea, select, checkbox, radio, switch, dialog, drawer, tooltip, avatar, skeleton and pagination were not a complete composable primitive collection.

The new layer contains all 61 `registry:ui` entries in the inspected shadcn `new-york-v4` registry, plus the ROCKSOUL `Asset` primitive:

| Area | Components |
| --- | --- |
| Controls | button, button-group, input, input-group, input-otp, textarea, checkbox, radio-group, switch, slider, select, native-select, combobox, toggle, toggle-group |
| Form structure | label, field, form |
| Surfaces | card, separator, aspect-ratio, scroll-area, resizable, collapsible, accordion |
| Overlays | dialog, alert-dialog, drawer, sheet, popover, hover-card, tooltip |
| Navigation | tabs, breadcrumb, pagination, navigation-menu, menubar, dropdown-menu, context-menu, sidebar, command, direction |
| Status | alert, badge, avatar, skeleton, spinner, progress, empty, sonner |
| Content | table, calendar, carousel, chart, item, kbd, attachment, bubble, marker, message, message-scroller |
| ROCKSOUL assets | asset |

Date pickers compose Calendar + Popover; data tables compose Table with the application's sorting/filtering model. Typography uses existing ROCKSOUL typography tokens. These are recipes rather than additional registry primitives. Sonner supplies toast delivery. This inventory is pinned to the inspected registry, not a promise to automatically include future upstream components.

## Assets and theme

```tsx
import { MoonWitnessAssetProvider } from "@rocksoul/ui"
import { Asset } from "@rocksoul/ui/components/ui/asset"

<MoonWitnessAssetProvider baseUrl="/assets">
  <Asset pack="product-icons" file="svg/domain/evidence.svg" alt="Evidence" />
</MoonWitnessAssetProvider>
```

Keep the current asset deployment contract: copy the package's assets to the consumer's public assets directory or set the provider base URL. Use `alt=""` for decorative imagery. Status and search glyphs embed geometry from the checked-in ROCKSOUL icon pack. Minimal arrows, chevrons, close, and grip glyphs supplement missing pack entries with the same 24px / 1.75 stroke contract; they are local UI glyphs, not new canonical asset-pack entries. No Lucide runtime dependency is used.

Use the existing `ThemeToggle` / `applyTheme` contract (`data-theme` on the document root). Semantic aliases map popover, accent, input, ring, sidebar and chart colors onto `--mw-*` tokens. Sonner follows that theme without adding a second theme provider. Set toast theme explicitly if embedding a themed subtree. Portaled content inherits the document theme; theme a complete app at the document root.

Most interactions use Radix; the registry's combobox uses Base UI, drawer uses Vaul, calendar uses React Day Picker, and other specialized components retain their dedicated interaction libraries. Accessible labels, dialog titles/descriptions, image alternative text, and domain validation remain the caller's responsibility.

## Review

Storybook: `ROCKSOUL UI/Primitives`, with Dark and Light examples. Interaction coverage lives in `src/test/ui-primitives.test.tsx`. Source attribution is recorded in `ui-primitives-sources.json`; the upstream MIT notice ships in `THIRD-PARTY-NOTICES.md`.

## Consumer usage

See [component usage and compatibility](component-usage.md) for standard imports, classified overlaps, and apps/web integration.
