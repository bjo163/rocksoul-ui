import { Badge } from "./badge"
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

const domainClass: Record<RecordDomain, string> = {
  STORY: "text-rgbl-red",
  EVENT: "text-rgbl-green",
  PERSON: "text-warning",
  RGBL: "text-rgbl-blue",
}

export function FourRecordSummary({ records, compact = false }: { records: RecordSummary[]; compact?: boolean }) {
  return (
    <section aria-labelledby="four-records-heading">
      <div className="mb-4">
        <p className="mw-meta text-muted-foreground">Four records / separate first</p>
        <h3 id="four-records-heading" className="mt-1 text-xl font-semibold">
          What survived the cross-check?
        </h3>
      </div>

      <div className="rs-record-grid">
        {records.map((record) => (
          <article
            id={`evidence-${record.domain.toLowerCase()}`}
            key={record.domain}
            className={cn(
              "flex scroll-mt-24 flex-col border border-border bg-card p-4",
              compact ? "min-h-44" : "min-h-72",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <span className={cn("mw-eyebrow", domainClass[record.domain])}>{record.domain}</span>
              <Badge variant={record.status}>{record.status}</Badge>
            </div>

            <p className="mw-meta mt-4 text-muted-foreground">{record.recordId}</p>
            <h4 className="mt-2 text-base font-semibold leading-5">{record.title}</h4>
            {!compact ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{record.description}</p> : null}

            <div className="mt-auto pt-4">
              <p className="mw-meta text-muted-foreground">{record.verification}</p>
              {!compact ? (
                <a
                  href={`#correlation-${record.domain.toLowerCase()}`}
                  className="mw-link mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] underline"
                >
                  Inspect source trail →
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
