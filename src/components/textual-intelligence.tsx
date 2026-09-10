import type { ReactNode } from "react"
import { cn } from "../lib/cn"
import { Badge } from "./feedback/status-badge"

export type TextualTraceState = "available" | "partial" | "missing" | "restricted" | "candidate" | "unresolved"

export interface TextualHierarchyItem {
  id: string
  kind: string
  label?: string
  detail?: string
  state?: TextualTraceState
  metadata?: Array<{ label: string; value: string }>
}

export interface TextualHierarchyTraceProps {
  items: TextualHierarchyItem[]
  title?: string
  description?: string
  className?: string
  empty?: ReactNode
}

function badgeVariant(state: TextualTraceState | undefined) {
  switch (state) {
    case "available": return "verified" as const
    case "partial": return "partial" as const
    case "restricted": return "restricted" as const
    case "candidate": return "info" as const
    case "unresolved": return "unresolved" as const
    case "missing": return "unresolved" as const
    default: return "neutral" as const
  }
}

export function TextualHierarchyTrace({
  items,
  title = "Canonical textual hierarchy",
  description = "Ordered textual identities. Each node remains a distinct record.",
  className,
  empty,
}: TextualHierarchyTraceProps) {
  return (
    <section className={cn("border border-border bg-card", className)} aria-label={title}>
      <div className="border-b border-border p-4">
        <p className="mw-meta text-primary">{title}</p>
        <p className="mt-2 max-w-3xl text-xs leading-5 text-muted-foreground">{description}</p>
      </div>
      {items.length ? (
        <ol className="grid list-none gap-0 p-0 md:grid-cols-2 xl:grid-cols-3" aria-label={title + " levels"}>
          {items.map((item, index) => (
            <li key={item.id} className="relative min-w-0 border-b border-border p-4 md:border-r xl:min-h-44">
              <div className="flex items-center justify-between gap-3">
                <span className="mw-meta text-muted-foreground">{String(index + 1).padStart(2, "0")} / {item.kind.replaceAll("_", " ")}</span>
                <Badge variant={badgeVariant(item.state)}>{item.state ?? "record"}</Badge>
              </div>
              <strong className="mt-4 block break-words text-base leading-5 text-foreground">{item.label ?? item.id}</strong>
              <code className="mt-2 block break-all font-mono text-[10px] leading-4 text-primary">{item.id}</code>
              {item.detail ? <p className="mt-3 text-xs leading-5 text-muted-foreground">{item.detail}</p> : null}
              {item.metadata?.length ? (
                <dl className="mt-4 grid gap-2 border-t border-border pt-3">
                  {item.metadata.map((entry) => (
                    <div key={entry.label + ":" + entry.value} className="grid grid-cols-[88px_1fr] gap-2">
                      <dt className="mw-meta text-muted-foreground">{entry.label}</dt>
                      <dd className="m-0 break-words text-xs text-foreground">{entry.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              {index < items.length - 1 ? <span className="absolute -right-[6px] top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-border bg-card xl:block" aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      ) : <div className="p-4 text-sm text-muted-foreground">{empty ?? "No textual hierarchy records are available."}</div>}
    </section>
  )
}

export interface ParallelTextLane {
  id: string
  language: string
  script?: string
  representation: string
  text?: string | null
  artifact?: string
  provenance?: string
  state?: TextualTraceState
  direction?: "ltr" | "rtl" | "auto"
  label?: string
}

export interface ParallelTextLanesProps {
  lanes: ParallelTextLane[]
  title?: string
  description?: string
  className?: string
}

function directionFor(lane: ParallelTextLane) {
  if (lane.direction) return lane.direction
  return lane.script === "Arab" || lane.script === "Hebr" ? "rtl" : "ltr"
}

export function ParallelTextLanes({
  lanes,
  title = "Parallel exact-text lanes",
  description = "Source and translation content remain separate records.",
  className,
}: ParallelTextLanesProps) {
  return (
    <section className={cn("border border-border bg-card", className)} aria-label={title}>
      <div className="border-b border-border p-4">
        <p className="mw-meta text-primary">{title}</p>
        <p className="mt-2 text-xs leading-5 text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-3 p-3">
        {lanes.map((lane) => {
          const hasText = typeof lane.text === "string" && lane.text.length > 0
          const state = lane.state ?? (hasText ? "available" : "missing")
          return (
            <article key={lane.id} className="border border-border bg-background">
              <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={badgeVariant(state)}>{state}</Badge>
                  <Badge variant="neutral">{lane.language}</Badge>
                  <Badge variant="info">{lane.representation}</Badge>
                </div>
                <span className="mw-meta text-muted-foreground">{lane.script ?? "script n/a"}</span>
              </header>
              {hasText ? (
                <p className="m-0 px-5 py-6 text-lg leading-8 text-foreground md:text-xl" lang={lane.language} dir={directionFor(lane)}>
                  {lane.text}
                </p>
              ) : (
                <div className="px-5 py-6" role="status">
                  <strong className="text-sm text-foreground">{lane.label ?? "Exact text unavailable"}</strong>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">No text value was supplied for this content record.</p>
                </div>
              )}
              <footer className="grid gap-2 border-t border-border px-4 py-3">
                <code className="break-all font-mono text-[10px] leading-4 text-primary">{lane.id}</code>
                {lane.artifact ? <span className="break-all text-[10px] text-muted-foreground">Artifact · {lane.artifact}</span> : null}
                {lane.provenance ? <span className="break-all text-[10px] text-muted-foreground">Provenance · {lane.provenance}</span> : null}
              </footer>
            </article>
          )
        })}
        {!lanes.length ? <p className="m-0 p-2 text-sm text-muted-foreground">No content lanes are available.</p> : null}
      </div>
    </section>
  )
}

export interface SourceRightsRecord {
  id: string
  label?: string
  revision?: string
  sha256?: string
  rights?: string
  license?: string
  availability?: string
  sourceReference?: string
  state?: TextualTraceState
}

export interface SourceRightsSummaryProps {
  records: SourceRightsRecord[]
  title?: string
  description?: string
  className?: string
}

export function SourceRightsSummary({
  records,
  title = "Source, integrity & rights",
  description = "Source metadata is displayed only when declared by the record.",
  className,
}: SourceRightsSummaryProps) {
  return (
    <section className={cn("border border-border bg-card", className)} aria-label={title}>
      <div className="border-b border-border p-4">
        <p className="mw-meta text-primary">{title}</p>
        <p className="mt-2 text-xs leading-5 text-muted-foreground">{description}</p>
      </div>
      <div className="grid md:grid-cols-2">
        {records.map((record) => (
          <article key={record.id} className="min-w-0 border-b border-border p-4 md:border-r">
            <div className="flex items-center justify-between gap-3">
              <Badge variant={badgeVariant(record.state)}>{record.state ?? "declared"}</Badge>
              <span className="mw-meta text-muted-foreground">{record.availability ?? "availability n/a"}</span>
            </div>
            <strong className="mt-4 block text-sm text-foreground">{record.label ?? record.id}</strong>
            <code className="mt-2 block break-all font-mono text-[10px] leading-4 text-primary">{record.id}</code>
            <dl className="mt-4 grid gap-2">
              {[
                ["Revision", record.revision],
                ["SHA-256", record.sha256],
                ["Rights", record.rights],
                ["License", record.license],
                ["Source", record.sourceReference],
              ].filter((entry): entry is [string, string] => Boolean(entry[1])).map(([label, value]) => (
                <div key={label} className="grid grid-cols-[84px_1fr] gap-2 border-t border-border pt-2">
                  <dt className="mw-meta text-muted-foreground">{label}</dt>
                  <dd className="m-0 break-all text-xs leading-5 text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
        {!records.length ? <p className="m-0 p-4 text-sm text-muted-foreground">No source or rights records are available.</p> : null}
      </div>
    </section>
  )
}

export interface TextualRelationRecord {
  id: string
  subject: string
  relation: string
  object: string
  method?: string
  evidence?: string[]
  provenance?: string
  state?: TextualTraceState
}

export interface TextualRelationTraceProps {
  relations: TextualRelationRecord[]
  title?: string
  description?: string
  className?: string
}

export function TextualRelationTrace({
  relations,
  title = "Explicit textual relations",
  description = "Relation type, method and provenance remain inspectable. Visual proximity does not imply identity.",
  className,
}: TextualRelationTraceProps) {
  return (
    <section className={cn("border border-border bg-card", className)} aria-label={title}>
      <div className="border-b border-border p-4">
        <p className="mw-meta text-primary">{title}</p>
        <p className="mt-2 text-xs leading-5 text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-3 p-3">
        {relations.map((relation) => (
          <article key={relation.id} className="border border-border bg-background p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={badgeVariant(relation.state)}>{relation.state ?? "asserted"}</Badge>
              <Badge variant="info">{relation.relation.replaceAll("_", " ")}</Badge>
            </div>
            <div className="mt-4 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
              <code className="break-all border border-border p-3 font-mono text-[10px] leading-4 text-foreground">{relation.subject}</code>
              <span className="mw-meta text-center text-primary" aria-hidden="true">→</span>
              <code className="break-all border border-border p-3 font-mono text-[10px] leading-4 text-foreground">{relation.object}</code>
            </div>
            <p className="sr-only">{relation.subject} {relation.relation.replaceAll("_", " ")} {relation.object}</p>
            {relation.method ? <p className="mt-3 text-xs leading-5 text-muted-foreground">Method · {relation.method}</p> : null}
            {relation.evidence?.length ? <p className="mt-2 break-all text-[10px] leading-5 text-muted-foreground">Evidence · {relation.evidence.join(" · ")}</p> : null}
            {relation.provenance ? <p className="mt-2 break-all text-[10px] leading-5 text-muted-foreground">Provenance · {relation.provenance}</p> : null}
          </article>
        ))}
        {!relations.length ? <p className="m-0 p-2 text-sm text-muted-foreground">No explicit textual relations are available.</p> : null}
      </div>
    </section>
  )
}
