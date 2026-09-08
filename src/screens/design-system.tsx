import { useState } from "react"
import { Badge } from "../components/badge"
import { Button } from "../components/button"
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
import { Checkbox, Input, Radio, Select, Switch, Textarea } from "../components/form-controls"
import { Dialog, Divider, Skeleton } from "../components/overlays"
import { Tabs } from "../components/tabs"
import { MoonWitnessCandidateAssetImage } from "../components/candidate-asset-provider"
import { ROCKSOUL_ASSETS_CANDIDATE } from "../contracts/assets-candidate"

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
          <Button variant="danger">Danger</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {(["supported", "verified", "contested", "partial", "unresolved", "restricted", "prohibited", "info", "neutral"] as const).map((state) => (
            <Badge key={state} variant={state}>{state}</Badge>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="grid gap-4">
            <Input label="Input" placeholder="Source ID" />
            <Input label="Error" error="Source locator is required." />
            <Textarea label="Textarea" maxLength={120} characterCount defaultValue="Not enough yet." />
            <Select label="Select" options={[{ label: "Supported", value: "supported" }, { label: "Unresolved", value: "unresolved" }]} />
          </div>
          <div>
            <Checkbox label="Checkbox" description="Labels activate the control." defaultChecked />
            <Radio name="demo-radio" label="Radio A" defaultChecked />
            <Radio name="demo-radio" label="Radio B" />
            <Switch label="Switch" description="Binary states only." defaultChecked />
            <Button className="mt-5" variant="secondary" onClick={() => setDialogOpen(true)}>Open dialog</Button>
          </div>
        </div>
        <Dialog open={dialogOpen} title="Accessible dialog" onClose={() => setDialogOpen(false)}>
          <p className="text-sm leading-6 text-muted-foreground">Native modal behavior, Escape close, and focus restoration are part of the contract.</p>
        </Dialog>
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
          <Skeleton variant="text" />
          <Skeleton variant="table-row" />
        </div>
      </div>


      <div className="mw-section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mw-eyebrow text-warning">Visual language candidate / v1.3</p>
            <h2 className="mt-2 text-2xl font-bold">41 packs / 591 canonical assets</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              Release-candidate upstream branch. Stable v1.2 remains the default; this panel exists so the UI system can review the next visual grammar before promotion.
            </p>
          </div>
          <Badge variant="partial">UNRELEASED · {ROCKSOUL_ASSETS_CANDIDATE.commit.slice(0, 8)}</Badge>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {([
            ["Evidence media", "evidence-media", "evidence-focus"],
            ["Correlation semantics", "correlation-semantics", "edge-supports"],
            ["Kanban workflow", "kanban-workflow", "card-review"],
            ["Calendar temporal", "calendar-temporal", "event-review"],
            ["AI workspace", "ai-workspace", "ai-thinking"],
            ["Authorization", "authorization-security", "permission-granted"],
          ] as const).map(([label, pack, assetId]) => (
            <article key={label} className="border border-border bg-card p-4">
              <p className="mw-meta text-muted-foreground">{label}</p>
              <div className="mt-4 flex min-h-40 items-center justify-center overflow-hidden bg-panel p-4">
                <MoonWitnessCandidateAssetImage
                  pack={pack}
                  assetId={assetId}
                  alt={label}
                  className="max-h-44 max-w-full"
                />
              </div>
            </article>
          ))}
        </div>
        <p className="mw-meta mt-5 border-l-2 border-warning pl-4 text-muted-foreground">
          PROMOTION RULE / Candidate assets never replace the stable channel until rocksoul-assets/main carries the release.
        </p>
      </div>

      <div className="mw-section">
        <h2 className="text-2xl font-bold">Tabs / compact platform rows</h2>
        <div className="mt-5">
          <Tabs items={[
            { id: "evidence", label: "Evidence", content: <p className="text-sm">Evidence remains independently inspectable.</p> },
            { id: "correlation", label: "Correlation", content: <p className="text-sm">Score never hides its explanation.</p> },
            { id: "legal", label: "Legal", content: <p className="text-sm">Source law and review stay distinct.</p> },
          ]} />
        </div>
        <Divider />
        <div className="mw-platform mt-6 border border-border bg-background p-4 text-foreground">
          <RepositoryHealthRow repo="rocksoul-superhero" status="degraded" queue={1} />
          <AuditEventRow timestamp="05:31" actor="reviewer" action="context.requested" resource="SUB-0042-01" result="pending" traceId="TRACE-0042-B" />
          <div className="mt-4"><MetricTile label="Blockers" value="2" context="stay visible" tone="warning" /></div>
        </div>
      </div>
    </section>
  )
}
