import { useState } from "react"
import { Badge } from "./badge"
import type { RecordDomain, RecordSummary } from "./four-record-summary"
import { cn } from "../lib/cn"

type EdgeType = "supports" | "contradicts" | "references" | "temporal" | "identity" | "legal"

const domainTone: Record<RecordDomain, string> = {
  STORY: "text-rgbl-red",
  EVENT: "text-rgbl-green",
  PERSON: "text-warning",
  RGBL: "text-rgbl-blue",
}

const edgeLegend: Array<{ type: EdgeType; label: string; className: string }> = [
  { type: "supports", label: "supports", className: "border-success" },
  { type: "temporal", label: "temporal", className: "border-rgbl-green" },
  { type: "references", label: "references", className: "border-rgbl-blue" },
  { type: "identity", label: "identity / unresolved", className: "border-warning" },
  { type: "contradicts", label: "contradicts", className: "border-primary" },
  { type: "legal", label: "legal / downstream", className: "border-primary" },
]

export interface EvidenceGraphProps {
  records: RecordSummary[]
  score: number
}

export function EvidenceGraph({ records, score }: EvidenceGraphProps) {
  const [selected, setSelected] = useState<RecordDomain>("EVENT")
  const selectedRecord = records.find((record) => record.domain === selected) ?? records[0]

  return (
    <section aria-labelledby="evidence-graph-heading" className="border border-border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mw-meta text-muted-foreground">Relationship graph</p>
          <h3 id="evidence-graph-heading" className="mw-display mt-2 text-2xl font-bold">
            Separate records. Shared correlation layer.
          </h3>
        </div>
        <Badge variant="unresolved">not causation</Badge>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {records.slice(0, 2).map((record) => (
            <GraphNode key={record.domain} record={record} selected={selected} onSelect={setSelected} />
          ))}
        </div>

        <div
          className="flex min-h-28 items-center justify-center border-2 border-primary bg-background px-5 text-center"
          aria-label={`Case correlation score ${score.toFixed(2)}`}
        >
          <div>
            <p className="mw-meta text-muted-foreground">Case</p>
            <p className="mw-display mt-1 text-5xl font-black">{score.toFixed(2)}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {records.slice(2).map((record) => (
            <GraphNode key={record.domain} record={record} selected={selected} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3" aria-label="Relationship legend">
        {edgeLegend.map((edge) => (
          <span key={edge.type} className={cn("mw-meta border-l-2 pl-2 text-muted-foreground", edge.className)}>
            {edge.label}
          </span>
        ))}
      </div>

      {selectedRecord ? (
        <div className="mt-5 border-l-2 border-primary bg-background p-4" aria-live="polite">
          <p className={cn("mw-eyebrow", domainTone[selectedRecord.domain])}>{selectedRecord.domain} selected</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {selectedRecord.description} Provenance: {selectedRecord.source}. Verification state: {selectedRecord.verification}.
          </p>
        </div>
      ) : null}

      <div className="mt-6 border-t border-border pt-4">
        <h4 className="mw-meta text-muted-foreground">Text equivalent</h4>
        <ul className="mt-3 grid gap-2 text-sm leading-6">
          {records.map((record) => (
            <li id={`correlation-${record.domain.toLowerCase()}`} key={record.domain} className="scroll-mt-24">
              <strong>{record.domain}</strong> → CASE correlation / {record.status} / {record.source}.{" "}
              {record.domain === "PERSON" ? "Identity relation remains unresolved." : "Source relation remains independently inspectable."}
            </li>
          ))}
          <li><strong>AWS</strong> → legal relation starts only after the evidence correlation boundary.</li>
        </ul>
      </div>
    </section>
  )
}

function GraphNode({
  record,
  selected,
  onSelect,
}: {
  record: RecordSummary
  selected: RecordDomain
  onSelect: (domain: RecordDomain) => void
}) {
  const active = selected === record.domain

  return (
    <button
      type="button"
      className={cn(
        "mw-touch min-h-24 rounded-none border p-4 text-left transition-colors",
        record.domain === "PERSON"
          ? "border-warning"
          : active
            ? "border-foreground bg-panel"
            : "border-border bg-background hover:border-border-strong hover:bg-panel",
      )}
      aria-pressed={active}
      onClick={() => onSelect(record.domain)}
    >
      <span className={cn("mw-eyebrow", domainTone[record.domain])}>{record.domain}</span>
      <span className="mt-2 block text-sm font-semibold">{record.recordId}</span>
      <span className="mw-meta mt-1 block text-muted-foreground">{record.status}</span>
    </button>
  )
}
