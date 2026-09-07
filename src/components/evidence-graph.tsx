import { useState } from "react"
import { Badge } from "./badge"
import type { RecordDomain, RecordSummary } from "./four-record-summary"
import { cn } from "../lib/cn"

const domainTone: Record<RecordDomain, string> = {
  STORY: "text-rgbl-red",
  EVENT: "text-rgbl-green",
  PERSON: "text-warning",
  RGBL: "text-rgbl-blue",
}

export interface EvidenceGraphProps {
  records: RecordSummary[]
  score: number
}

export function EvidenceGraph({ records, score }: EvidenceGraphProps) {
  const [selected, setSelected] = useState<RecordDomain>("STORY")
  const selectedRecord = records.find((record) => record.domain === selected) ?? records[0]

  return (
    <section aria-labelledby="evidence-graph-heading" className="border border-border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mw-eyebrow text-muted-foreground">Relationship graph</p>
          <h3 id="evidence-graph-heading" className="mt-2 text-2xl font-bold">
            Separate records. Shared correlation layer.
          </h3>
        </div>
        <Badge variant="unresolved">not causation</Badge>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
          {records.slice(0, 2).map((record) => (
            <GraphNode key={record.domain} record={record} selected={selected} onSelect={setSelected} />
          ))}
        </div>

        <div
          className="flex min-h-28 items-center justify-center border border-dashed border-border bg-background px-5 text-center"
          aria-label={`Correlation score ${score.toFixed(2)}`}
        >
          <div>
            <p className="mw-eyebrow text-muted-foreground">Correlation</p>
            <p className="mt-1 text-5xl font-black tracking-[-0.06em]">{score.toFixed(2)}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
          {records.slice(2).map((record) => (
            <GraphNode key={record.domain} record={record} selected={selected} onSelect={setSelected} />
          ))}
        </div>
      </div>

      {selectedRecord ? (
        <div className="mt-4 border-l-2 border-primary bg-background p-4" aria-live="polite">
          <p className={cn("mw-eyebrow", domainTone[selectedRecord.domain])}>{selectedRecord.domain} selected</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {selectedRecord.description} Provenance: {selectedRecord.source}. Verification state: {selectedRecord.status}.
          </p>
        </div>
      ) : null}

      <div className="mt-6 border-t border-border pt-4">
        <h4 className="mw-eyebrow text-muted-foreground">Text equivalent</h4>
        <ul className="mt-3 grid gap-2 text-sm leading-6">
          {records.map((record) => (
            <li id={`correlation-${record.domain.toLowerCase()}`} key={record.domain} className="scroll-mt-24">
              <strong>{record.domain}</strong> → correlation layer / {record.status} / {record.source}
            </li>
          ))}
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
        "min-h-24 border p-4 text-left transition-colors",
        active ? "border-foreground bg-muted" : "border-border bg-background hover:bg-muted",
      )}
      aria-pressed={active}
      onClick={() => onSelect(record.domain)}
    >
      <span className={cn("mw-eyebrow", domainTone[record.domain])}>{record.domain}</span>
      <span className="mt-2 block text-sm font-semibold">{record.recordId}</span>
      <span className="mt-1 block text-xs text-muted-foreground">{record.status}</span>
    </button>
  )
}
