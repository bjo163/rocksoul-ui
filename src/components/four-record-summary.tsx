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
  status: RecordStatus
}

const domainClass: Record<RecordDomain, string> = {
  STORY: "text-rgbl-red",
  EVENT: "text-rgbl-green",
  PERSON: "text-warning",
  RGBL: "text-rgbl-blue",
}

export function FourRecordSummary({ records }: { records: RecordSummary[] }) {
  return (
    <section aria-labelledby="four-records-heading">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="mw-eyebrow text-muted-foreground">Four records / separate first</p>
          <h3 id="four-records-heading" className="mt-1 text-xl font-semibold">
            What survived the cross-check?
          </h3>
        </div>
      </div>

      <div className="rs-record-grid">
        {records.map((record) => (
          <article
            id={`evidence-${record.domain.toLowerCase()}`}
            key={record.domain}
            className="flex min-h-72 scroll-mt-24 flex-col border border-border bg-card p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <span className={cn("font-mono text-[11px] font-bold tracking-[0.14em]", domainClass[record.domain])}>
                {record.domain}
              </span>
              <Badge variant={record.status}>{record.status}</Badge>
            </div>

            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
              {record.recordId}
            </p>
            <h4 className="mt-2 text-base font-semibold leading-5">{record.title}</h4>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{record.description}</p>

            <dl className="mt-5 grid gap-2 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.07em]">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Repo</dt>
                <dd className="text-right">{record.sourceRepo}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Provenance</dt>
                <dd className="text-right">{record.source}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Canonical</dt>
                <dd className="text-right">{record.canonicalStatus}</dd>
              </div>
            </dl>

            <a
              href={`#correlation-${record.domain.toLowerCase()}`}
              className="mw-touch-link mt-auto justify-start pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.12em] underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              Inspect source trail →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
