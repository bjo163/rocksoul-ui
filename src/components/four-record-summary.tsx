import { useId } from "react"
import { StatusBadge } from "./feedback/status-badge"
import { cn } from "../lib/cn"

export type RecordDomain = "STORY" | "EVENT" | "PERSON" | "RGBL"
export type RecordStatus = "supported" | "partial" | "unresolved"

export interface RecordSummary {
  domain: RecordDomain
  recordId: string
  title: string
  description: string
  source: string
  sourceRepo: string
  canonicalStatus: "canonical" | "reference"
  verification: string
  status: RecordStatus
}

const domains: RecordDomain[] = ["STORY", "EVENT", "PERSON", "RGBL"]
const domainClass: Record<RecordDomain, string> = {
  STORY: "text-rgbl-red-fg",
  EVENT: "text-rgbl-green-fg",
  PERSON: "text-warning",
  RGBL: "text-rgbl-blue-fg",
}

export function FourRecordSummary({ records, compact = false }: { records: RecordSummary[]; compact?: boolean }) {
  const headingId = useId()
  return (
    <section aria-labelledby={headingId}>
      {!compact ? (
        <div className="mb-4">
          <p className="mw-meta text-muted-foreground">Four records / separate first</p>
          <h3 id={headingId} className="mt-1 text-xl font-semibold">What survived the cross-check?</h3>
        </div>
      ) : <h3 id={headingId} className="sr-only">Four correlated records</h3>}

      <div className="rs-record-grid">
        {domains.map((domain) => {
          const record = records.find((item) => item.domain === domain)
          if (!record) {
            return (
              <article key={domain} className={cn("flex flex-col border border-dashed border-border bg-card p-4 opacity-70", compact ? "min-h-[92px]" : "min-h-44")}>
                <div className="flex items-start justify-between gap-3">
                  <span className={cn("mw-eyebrow", domainClass[domain])}>{domain}</span>
                  <StatusBadge variant="unresolved">missing</StatusBadge>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">No linked record yet.</p>
              </article>
            )
          }
          return (
            <article
              id={`evidence-${record.domain.toLowerCase()}`}
              key={record.domain}
              className={cn("flex scroll-mt-24 flex-col border border-border bg-card", compact ? "min-h-[92px] p-4" : "min-h-72 p-4")}
              data-state={record.status === "partial" ? "partial" : "linked"}
            >
              <div className="flex items-start justify-between gap-3">
                <span className={cn("mw-eyebrow", domainClass[record.domain])}>{record.domain}</span>
                <StatusBadge variant={record.status}>{record.status}</StatusBadge>
              </div>
              {!compact ? <p className="mw-meta mt-4 text-muted-foreground">{record.recordId}</p> : null}
              <h4 className={cn("font-semibold leading-5", compact ? "mt-3 text-sm" : "mt-2 text-base")}>{record.title}</h4>
              {!compact ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{record.description}</p> : null}
              {compact ? (
                <p className="mw-meta mt-auto pt-2 text-muted-foreground">{record.verification}</p>
              ) : (
                <>
                  <dl className="mw-meta mt-auto grid gap-1 border-t border-border pt-4 text-muted-foreground">
                    <div className="flex justify-between gap-2"><dt>Repo</dt><dd className="text-right text-foreground">{record.sourceRepo}</dd></div>
                    <div className="flex justify-between gap-2"><dt>Source</dt><dd className="text-right text-foreground">{record.source}</dd></div>
                    <div className="flex justify-between gap-2"><dt>Verify</dt><dd className="text-right text-foreground">{record.verification}</dd></div>
                    <div className="flex justify-between gap-2"><dt>Canonical</dt><dd className="text-right text-foreground">{record.canonicalStatus}</dd></div>
                  </dl>
                  <a href={`#source-${record.domain.toLowerCase()}`} className="mw-link mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline">Inspect source trail →</a>
                </>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
