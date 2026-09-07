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

const nodePosition: Record<RecordDomain, string> = {
  STORY: "left-[8%] top-[10%]",
  EVENT: "right-[8%] top-[10%]",
  PERSON: "bottom-[10%] left-[8%]",
  RGBL: "bottom-[10%] right-[8%]",
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

      <div className="relative mx-auto mt-6 aspect-square w-full max-w-[430px]" aria-label="Interactive case relationship graph">
        <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" aria-hidden="true">
          <line x1="50" y1="50" x2="22" y2="22" className="text-rgbl-red" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="50" y1="50" x2="78" y2="22" className="text-rgbl-green" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="50" y1="50" x2="22" y2="78" className="text-warning" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="50" y1="50" x2="78" y2="78" className="text-rgbl-blue" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>

        <div className="absolute left-1/2 top-1/2 flex size-[clamp(82px,22vw,104px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-primary bg-panel text-center">
          <span className="mw-meta text-muted-foreground">Case</span>
          <strong className="mw-display mt-1 text-3xl">{score.toFixed(2)}</strong>
        </div>

        {records.map((record) => (
          <GraphNode key={record.domain} record={record} selected={selected} onSelect={setSelected} />
        ))}
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

export function GraphNode({
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
        "absolute flex size-[clamp(64px,18vw,82px)] flex-col items-center justify-center rounded-full border-2 bg-card p-2 text-center transition-[border-color,background-color,opacity]",
        nodePosition[record.domain],
        record.domain === "PERSON"
          ? "border-warning"
          : active
            ? "border-foreground bg-panel"
            : record.domain === "STORY"
              ? "border-rgbl-red"
              : record.domain === "EVENT"
                ? "border-rgbl-green"
                : "border-rgbl-blue",
      )}
      aria-pressed={active}
      aria-label={`${record.domain}: ${record.status}. Select relationship node.`}
      onClick={() => onSelect(record.domain)}
    >
      <span className={cn("font-mono text-[9px] font-bold uppercase", domainTone[record.domain])}>{record.domain}</span>
      <span className="mt-1 font-mono text-[8px] uppercase text-muted-foreground">{record.status}</span>
    </button>
  )
}
