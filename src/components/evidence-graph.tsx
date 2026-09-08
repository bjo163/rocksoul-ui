import { useId, useState } from "react"
import { Badge } from "./badge"
import type { RecordDomain, RecordSummary } from "./four-record-summary"
import type { ResearchDomain } from "../contracts/ecosystem-domains"
import { cn } from "../lib/cn"

type EdgeType = "supports" | "contradicts" | "references" | "temporal" | "identity" | "legal"
export type GraphNodeType = RecordDomain | ResearchDomain | "RELATIONSHIP" | "AWS" | "CASE"
export type GraphNodeState = "default" | "selected" | "dimmed" | "unresolved"

const nodeTone: Record<GraphNodeType, string> = {
  STORY: "text-rgbl-red-fg border-rgbl-red",
  EVENT: "text-rgbl-green-fg border-rgbl-green",
  PERSON: "text-warning border-warning",
  RGBL: "text-rgbl-blue-fg border-rgbl-blue",
  TEXT: "text-rgbl-blue-fg border-rgbl-blue",
  AWS: "text-primary border-primary",
  LAW: "text-primary border-primary",
  PERSPECTIVE: "text-warning border-warning",
  RELATIONSHIP: "text-foreground border-primary",
  CASE: "text-foreground border-primary",
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
  const headingId = useId()
  const [selected, setSelected] = useState<GraphNodeType>("EVENT")
  const selectedRecord = records.find((record) => record.domain === selected)

  return (
    <section aria-labelledby={headingId} className="border border-border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mw-meta text-muted-foreground">Relationship graph</p>
          <h3 id={headingId} className="mw-display mt-2 text-2xl font-bold">Separate records. Shared correlation layer.</h3>
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

        <GraphNode
          type="CASE"
          label={score.toFixed(2)}
          status="correlation"
          relationCount={4}
          state={selected === "CASE" ? "selected" : "default"}
          className="absolute left-1/2 top-1/2 size-[clamp(82px,22vw,104px)] -translate-x-1/2 -translate-y-1/2"
          onSelect={() => setSelected("CASE")}
        />

        {records.map((record) => (
          <GraphNode
            key={record.domain}
            type={record.domain}
            label={record.domain}
            status={record.status}
            relationCount={1}
            state={selected === record.domain ? "selected" : record.domain === "PERSON" ? "unresolved" : "default"}
            className={cn("absolute", nodePosition[record.domain])}
            onSelect={() => setSelected(record.domain)}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <GraphNode
          type="AWS"
          label="AWS"
          status="after boundary"
          relationCount={1}
          state="dimmed"
          onSelect={() => setSelected("AWS")}
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-3" aria-label="Relationship legend">
        {edgeLegend.map((edge) => (
          <span key={edge.type} className={cn("mw-meta border-l-2 pl-2 text-muted-foreground", edge.className)}>{edge.label}</span>
        ))}
      </div>

      <div className="mt-5 border-l-2 border-primary bg-background p-4" aria-live="polite">
        {selectedRecord ? (
          <>
            <p className={cn("mw-eyebrow", nodeTone[selectedRecord.domain].split(" ")[0])}>{selectedRecord.domain} selected</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {selectedRecord.description} Provenance: {selectedRecord.source}. Verification state: {selectedRecord.verification}.
            </p>
          </>
        ) : selected === "CASE" ? (
          <>
            <p className="mw-eyebrow text-primary">CASE selected</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Aggregate correlation is {score.toFixed(2)}. It is not a factual or causal conclusion.</p>
          </>
        ) : (
          <>
            <p className="mw-eyebrow text-primary">AWS selected</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">AWS remains dimmed until the legal boundary. It is downstream of evidence reconstruction.</p>
          </>
        )}
      </div>

      <div className="mt-6 border-t border-border pt-4">
        <h4 className="mw-meta text-muted-foreground">Text equivalent</h4>
        <ul className="mt-3 grid gap-2 text-sm leading-6">
          {records.map((record) => (
            <li id={`correlation-${record.domain.toLowerCase()}`} key={record.domain} className="scroll-mt-24">
              <strong>{record.domain}</strong> → CASE correlation / {record.status} / {record.source}.{" "}
              {record.domain === "PERSON" ? "Identity relation remains unresolved." : "Source relation remains independently inspectable."}
            </li>
          ))}
          <li><strong>CASE</strong> → aggregate score {score.toFixed(2)}; correlation is not causation.</li>
          <li><strong>AWS</strong> → legal relation starts only after the evidence correlation boundary.</li>
        </ul>
      </div>
    </section>
  )
}

export function GraphNode({
  type,
  label,
  status,
  relationCount = 0,
  state = "default",
  className,
  onSelect,
}: {
  type: GraphNodeType
  label: string
  status: string
  relationCount?: number
  state?: GraphNodeState
  className?: string
  onSelect?: () => void
}) {
  return (
    <button
      type="button"
      className={cn(
        "flex min-h-11 min-w-11 flex-col items-center justify-center rounded-full border-2 bg-card p-2 text-center transition-[border-color,background-color,opacity] hover:border-foreground hover:bg-panel",
        nodeTone[type],
        state === "selected" && "bg-panel ring-2 ring-foreground ring-offset-2 ring-offset-background",
        state === "dimmed" && "opacity-80",
        state === "unresolved" && "border-dashed",
        className?.includes("absolute") ? "" : "",
        className,
      )}
      data-type={type.toLowerCase()}
      data-state={state}
      aria-pressed={state === "selected"}
      aria-label={`${type}: ${status}. ${relationCount} relationships. Select relationship node.`}
      onClick={onSelect}
    >
      <span className="font-mono text-[10px] font-bold uppercase">{label}</span>
      <span className="mt-1 font-mono text-[10px] uppercase text-muted-foreground">{status}</span>
      <span className="sr-only">{relationCount} relationships</span>
    </button>
  )
}
