import type { ResearchDomain } from "../contracts/ecosystem-domains"
import { canonicalOwnerFor } from "../contracts/ecosystem-domains"

export type DomainRecordSummaryItem = {
  domain: ResearchDomain
  recordId: string
  title: string
  status?: string
  href?: string
}

export type DomainRecordSummaryProps = {
  records: DomainRecordSummaryItem[]
  className?: string
}

export function DomainRecordSummary({ records, className = "" }: DomainRecordSummaryProps) {
  return (
    <div className={className} data-testid="domain-record-summary">
      {records.map((record) => {
        const owner = canonicalOwnerFor(record.domain)
        const content = (
          <>
            <strong>{record.domain}</strong>
            <span>{record.title}</span>
            <code>{owner.prefix}{record.recordId}</code>
            {record.status ? <span>{record.status}</span> : null}
          </>
        )
        return record.href ? (
          <a key={`${record.domain}:${record.recordId}`} href={record.href} data-domain={record.domain} data-repository={owner.repository}>
            {content}
          </a>
        ) : (
          <article key={`${record.domain}:${record.recordId}`} data-domain={record.domain} data-repository={owner.repository}>
            {content}
          </article>
        )
      })}
    </div>
  )
}
