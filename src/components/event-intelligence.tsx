import { useId, useMemo } from "react"
import { cn } from "../lib/cn"

export type EventTopologyNodeKind =
  | "event" | "claim" | "evidence" | "source" | "place" | "artifact"
  | "uncertainty" | "alternative" | "person" | "story" | "text" | "law" | "perspective" | "relationship"

export interface EventTopologyNode {
  id: string
  kind: EventTopologyNodeKind
  label: string
  detail?: string
  status?: string
  confidence?: number
  external?: boolean
}

export interface EventTopologyEdge {
  id: string
  from: string
  to: string
  label: string
  status?: string
  confidence?: number
}

export interface EventTopologyGraphProps {
  nodes: EventTopologyNode[]
  edges: EventTopologyEdge[]
  className?: string
  title?: string
  description?: string
}

const columnByKind: Record<EventTopologyNodeKind, number> = {
  event: 0,
  claim: 1,
  place: 1,
  artifact: 1,
  evidence: 2,
  uncertainty: 2,
  alternative: 2,
  source: 3,
  person: 3,
  story: 3,
  text: 3,
  law: 3,
  perspective: 3,
  relationship: 3,
}

const xByColumn = [78, 258, 438, 618]

export function EventTopologyGraph({
  nodes,
  edges,
  className,
  title = "Event intelligence topology",
  description = "Canonical event graph showing claims, evidence, sources, context and qualified external references.",
}: EventTopologyGraphProps) {
  const titleId = useId()
  const descriptionId = useId()
  const layout = useMemo(() => {
    const groups = new Map<number, EventTopologyNode[]>()
    nodes.forEach((node) => {
      const column = columnByKind[node.kind]
      groups.set(column, [...(groups.get(column) ?? []), node])
    })
    const maxRows = Math.max(1, ...Array.from(groups.values()).map((items) => items.length))
    const height = Math.max(320, 112 + maxRows * 76)
    const positions = new Map<string, { x: number; y: number }>()
    for (const [column, items] of groups) {
      const step = (height - 120) / Math.max(1, items.length)
      items.forEach((node, index) => {
        positions.set(node.id, { x: xByColumn[column], y: 76 + step * (index + 0.5) })
      })
    }
    return { height, positions }
  }, [nodes])

  return (
    <section className={cn("border border-border bg-card p-4", className)} aria-label={title}>
      <svg
        viewBox={`0 0 760 ${layout.height}`}
        className="h-auto min-h-[300px] w-full"
        role="img"
        aria-labelledby={`${titleId} ${descriptionId}`}
      >
        <title id={titleId}>{title}</title>
        <desc id={descriptionId}>{description}</desc>
        <g aria-hidden="true">
          {edges.map((edge) => {
            const from = layout.positions.get(edge.from)
            const to = layout.positions.get(edge.to)
            if (!from || !to) return null
            return (
              <g key={edge.id}>
                <line
                  x1={from.x + 64}
                  y1={from.y}
                  x2={to.x - 64}
                  y2={to.y}
                  stroke="var(--mw-border-strong)"
                  strokeWidth="1.5"
                  strokeDasharray={edge.status === "hypothesis" || edge.status === "unresolved" ? "5 4" : undefined}
                />
                <text
                  x={(from.x + to.x) / 2}
                  y={(from.y + to.y) / 2 - 5}
                  textAnchor="middle"
                  fill="var(--mw-text-secondary)"
                  fontSize="8"
                  fontFamily="IBM Plex Mono, monospace"
                >
                  {edge.label.replaceAll("_", " ")}
                </text>
              </g>
            )
          })}
          {nodes.map((node) => {
            const point = layout.positions.get(node.id)
            if (!point) return null
            const isEvent = node.kind === "event"
            return (
              <g key={node.id} transform={`translate(${point.x - 64} ${point.y - 26})`}>
                <rect
                  width="128"
                  height="52"
                  rx="6"
                  fill="var(--mw-surface-page)"
                  stroke={isEvent ? "var(--mw-brand-crimson-ui)" : "var(--mw-border-strong)"}
                  strokeWidth={isEvent ? "2" : "1"}
                  strokeDasharray={node.external ? "5 4" : undefined}
                />
                <text x="10" y="17" fill={isEvent ? "var(--mw-brand-crimson-ui)" : "var(--mw-text-secondary)"} fontSize="8" fontFamily="IBM Plex Mono, monospace">
                  {node.kind.toUpperCase()}
                </text>
                <text x="10" y="34" fill="var(--mw-text-primary)" fontSize="9" fontFamily="IBM Plex Mono, monospace">
                  {node.label.length > 18 ? node.label.slice(0, 17) + "…" : node.label}
                </text>
                {node.confidence != null ? (
                  <text x="118" y="17" textAnchor="end" fill="var(--mw-text-secondary)" fontSize="8" fontFamily="IBM Plex Mono, monospace">
                    {Math.round(node.confidence * 100)}%
                  </text>
                ) : null}
              </g>
            )
          })}
        </g>
      </svg>

      <div className="mt-4 border-t border-border pt-4">
        <p className="mw-meta text-foreground">Text equivalent</p>
        <ul className="mt-2 grid gap-1 text-xs leading-5 text-muted-foreground">
          {edges.map((edge) => {
            const from = nodes.find((node) => node.id === edge.from)
            const to = nodes.find((node) => node.id === edge.to)
            if (!from || !to) return null
            const confidence = edge.confidence == null ? "" : ` · ${Math.round(edge.confidence * 100)}%`
            const status = edge.status ? ` · ${edge.status}` : ""
            return <li key={edge.id}><strong className="text-foreground">{from.label}</strong> → {edge.label.replaceAll("_", " ")} → <strong className="text-foreground">{to.label}</strong>{status}{confidence}</li>
          })}
        </ul>
      </div>
    </section>
  )
}

export interface HistoricityBandProps {
  confidence: number
  scope: string
  uncertainty: string[]
  alternatives: string[]
  status?: string
  className?: string
}

export function HistoricityBand({
  confidence,
  scope,
  uncertainty,
  alternatives,
  status,
  className,
}: HistoricityBandProps) {
  const bounded = Math.max(0, Math.min(1, confidence))
  const value = Math.round(bounded * 100)
  return (
    <section className={cn("border border-border bg-card p-4", className)} aria-label="Historicity and uncertainty">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mw-meta text-primary">Historicity confidence</p>
          <strong className="mt-1 block font-serif text-4xl font-medium text-foreground">{value}%</strong>
        </div>
        {status ? <span className="mw-meta border border-border px-2 py-1 text-foreground">{status.replaceAll("_", " ")}</span> : null}
      </div>
      <div
        className="mt-4 h-3 overflow-hidden rounded-full border border-border bg-background"
        role="progressbar"
        aria-label="Historicity confidence"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <div className="h-full bg-primary" style={{ width: `${value}%` }} />
      </div>
      <p className="mt-3 text-sm leading-6 text-foreground"><strong>Scope:</strong> {scope}</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="border border-dashed border-border p-3">
          <p className="mw-meta text-foreground">Uncertainty · {uncertainty.length}</p>
          <ul className="mt-2 grid gap-2 text-xs leading-5 text-muted-foreground">{uncertainty.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="border border-border p-3">
          <p className="mw-meta text-foreground">Alternatives · {alternatives.length}</p>
          <ul className="mt-2 grid gap-2 text-xs leading-5 text-muted-foreground">{alternatives.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      <p className="mw-meta mt-4 text-muted-foreground">Confidence is scoped evidence assessment, not a universal truth score.</p>
    </section>
  )
}
