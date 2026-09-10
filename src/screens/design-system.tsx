import { useState } from "react"
import { Badge } from "../components/feedback/status-badge"
import { Button } from "../components/ui/button"
import {
  AuditEventRow,
  Citation,
  EvidenceCard,
  MetricTile,
  RepositoryHealthRow,
  SourceBlock,
  StatePanel,
  SubmissionCard,
} from "../components/archive-components"
import { Checkbox } from "../components/ui/checkbox"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Separator } from "../components/ui/separator"
import { Skeleton } from "../components/ui/skeleton"
import { Switch } from "../components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Textarea } from "../components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import { AssetExplorer } from "../components/asset-explorer"
import { ROCKSOUL_ASSETS_REGISTRY } from "../contracts/assets-registry"

const swatches = [
  ["Crimson", "bg-primary"],
  ["Supported", "bg-success"],
  ["Partial", "bg-warning"],
  ["Unresolved", "bg-unresolved"],
  ["Info", "bg-info"],
  ["RGBL Red", "bg-rgbl-red"],
  ["RGBL Green", "bg-rgbl-green"],
  ["RGBL Blue", "bg-rgbl-blue"],
  ["RGBL Light", "bg-rgbl-light"],
] as const

export function DesignSystemScreen() {
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <section className="mw-shell-wide py-12">
      <p className="mw-eyebrow text-primary">16 / Design system</p>
      <h1 className="mw-display mt-4 text-5xl font-black uppercase sm:text-7xl">Rocksoul UI / MoonWitness grammar.</h1>
      <p className="mw-reading mt-5 text-base leading-7 text-muted-foreground">
        Tokens, primitives, states, research patterns, and operational surfaces stay traceable to rocksoul-assets.
      </p>

      <div className="mw-section">
        <h2 className="text-2xl font-bold">Color semantics</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {swatches.map(([label, className]) => (
            <div key={label} className="border border-border bg-card p-3">
              <div className={`h-20 ${className}`} />
              <p className="mw-meta mt-3">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mw-section">
        <h2 className="text-2xl font-bold">Typography</h2>
        <div className="mt-6 grid gap-5">
          <p className="mw-display text-6xl font-black uppercase">Inter Tight / Display</p>
          <p className="text-lg">Inter / readable body. Evidence should never lose readability to style.</p>
          <p className="mw-eyebrow">IBM Plex Mono / archive metadata / 0.16em</p>
        </div>
      </div>

      <div className="mw-section">
        <h2 className="text-2xl font-bold">Primitive states</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Danger</Button>
          <Button disabled>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {(["supported", "verified", "contested", "partial", "unresolved", "restricted", "prohibited", "info", "neutral"] as const).map((state) => (
            <Badge key={state} variant={state}>{state}</Badge>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="grid gap-4">
            <div className="grid gap-2"><Label htmlFor="demo-input">Input</Label><Input id="demo-input" placeholder="Source ID" /></div>
            <div className="grid gap-2"><Label htmlFor="demo-error">Error</Label><Input id="demo-error" aria-invalid placeholder="Source ID" /><p className="text-sm text-destructive">Source locator is required.</p></div>
            <div className="grid gap-2"><Label htmlFor="demo-textarea">Textarea</Label><Textarea id="demo-textarea" maxLength={120} defaultValue="Not enough yet." /><p className="text-xs text-muted-foreground">0 / 120</p></div>
            <div className="grid gap-2"><Label htmlFor="demo-select">Select</Label><Select defaultValue="supported"><SelectTrigger id="demo-select"><SelectValue placeholder="Select status" /></SelectTrigger><SelectContent><SelectItem value="supported">Supported</SelectItem><SelectItem value="unresolved">Unresolved</SelectItem></SelectContent></Select></div>
          </div>
          <div>
            <div className="flex items-start gap-2"><Checkbox id="demo-checkbox" defaultChecked /><div className="grid gap-1"><Label htmlFor="demo-checkbox">Checkbox</Label><p className="text-sm text-muted-foreground">Labels activate the control.</p></div></div>
            <RadioGroup defaultValue="a" className="mt-4"><div className="flex items-center gap-2"><RadioGroupItem value="a" id="demo-radio-a" /><Label htmlFor="demo-radio-a">Radio A</Label></div><div className="flex items-center gap-2"><RadioGroupItem value="b" id="demo-radio-b" /><Label htmlFor="demo-radio-b">Radio B</Label></div></RadioGroup>
            <div className="mt-4 flex items-start gap-2"><Switch id="demo-switch" defaultChecked /><div className="grid gap-1"><Label htmlFor="demo-switch">Switch</Label><p className="text-sm text-muted-foreground">Binary states only.</p></div></div>
            <Button className="mt-5" variant="secondary" onClick={() => setDialogOpen(true)}>Open dialog</Button>
          </div>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}><DialogContent><DialogHeader><DialogTitle>Accessible dialog</DialogTitle><DialogDescription>Native modal behavior, Escape close, and focus restoration are part of the contract.</DialogDescription></DialogHeader></DialogContent></Dialog>
      </div>

      <div className="mw-section">
        <h2 className="text-2xl font-bold">Research components</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <EvidenceCard domain="PERSON" recordId="PERSON-0042-A" repo="rocksoul-superhero" claim="Identity match is incomplete." provenance="SRC-PERSON-0042-A" verification="partial" status="partial" canonical={false} flagged />
          <SourceBlock sourceId="SRC-STORY-0042-A" title="A route nobody remembers taking" excerpt="Synthetic source block used for component review." citation="STORY-0042-A" provenance="fixture/story/0042/a" verification="source-linked" />
          <Citation code="SRC-EVENT-0042-A" source="Synthetic event log" locator="fixture/event/0042/a" variant="block" />
          <SubmissionCard id="SUB-0042-01" state="needs-context" title="Possible second event trace" body="Provenance incomplete — not canonical evidence." />
        </div>
      </div>

      <div className="mw-section">
        <h2 className="text-2xl font-bold">System patterns</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <StatePanel state="empty" />
          <StatePanel state="loading" />
          <StatePanel state="error" />
        </div>
        <div className="mt-6 grid gap-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>


      <div className="mw-section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mw-eyebrow text-warning">Visual language / stable v1.3</p>
            <h2 className="mt-2 text-2xl font-bold">{ROCKSOUL_ASSETS_REGISTRY.packCount} packs / {ROCKSOUL_ASSETS_REGISTRY.canonicalAssetCount} canonical assets</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              Released upstream visual language. The registry, runtime motion, and developer distribution are now stable UI contracts.
            </p>
          </div>
          <Badge variant="verified">STABLE · {ROCKSOUL_ASSETS_REGISTRY.commit.slice(0, 8)}</Badge>
        </div>
        <div className="mt-6"><AssetExplorer initialCategory="Investigation" limit={6} compact /></div>

      </div>

      <div className="mw-section">
        <h2 className="text-2xl font-bold">Tabs / compact platform rows</h2>
        <div className="mt-5">
          <Tabs defaultValue="evidence"><TabsList><TabsTrigger value="evidence">Evidence</TabsTrigger><TabsTrigger value="correlation">Correlation</TabsTrigger><TabsTrigger value="legal">Legal</TabsTrigger></TabsList><TabsContent value="evidence"><p className="text-sm">Evidence remains independently inspectable.</p></TabsContent><TabsContent value="correlation"><p className="text-sm">Score never hides its explanation.</p></TabsContent><TabsContent value="legal"><p className="text-sm">Source law and review stay distinct.</p></TabsContent></Tabs>
        </div>
        <Separator />
        <div className="mw-platform mt-6 border border-border bg-background p-4 text-foreground">
          <RepositoryHealthRow repo="rocksoul-superhero" status="degraded" queue={1} />
          <AuditEventRow timestamp="05:31" actor="reviewer" action="context.requested" resource="SUB-0042-01" result="pending" traceId="TRACE-0042-B" />
          <div className="mt-4"><MetricTile label="Blockers" value="2" context="stay visible" tone="warning" /></div>
        </div>
      </div>
    </section>
  )
}
