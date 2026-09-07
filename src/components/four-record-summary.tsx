import { Badge } from "./badge"
import { cn } from "../lib/cn"

export type RecordDomain = "STORY" | "EVENT" | "PERSON" | "RGBL"
export type RecordStatus = "supported" | "partial" | "unresolved"

export interface RecordSummary {
  domain: RecordDomain
  title: string
  description: string
  source: string
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
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Four records / separate first
          </p>
          <h3 id="four-records-heading" className="mt-1 text-xl font-semibold">
            What survived the cross-check?
          </h3>
        </div>
      </div>

      <div className="rs-record-grid">
        {records.map((record) => (
          <article key={record.domain} className="min-h-52 border border-border bg-card p-4">
            <div className="flex items-start justify-between gap-3">
              <span className={cn("font-mono text-[11px] font-bold tracking-[0.14em]", domainClass[record.domain])}>
                {record.domain}
              </span>
              <Badge variant={record.status}>{record.status}</Badge>
            </div>
            <h4 className="mt-5 text-base font-semibold leading-5">{record.title}</h4>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{record.description}</p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
              {record.source}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
