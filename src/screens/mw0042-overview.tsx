import { CaseHeader } from "../components/case-header"
import { CorrelationScore } from "../components/correlation-score"
import { FourRecordSummary } from "../components/four-record-summary"
import { LegalStatus } from "../components/legal-status"
import { mw0042 } from "../fixtures/mw0042"

export function MW0042Overview() {
  return (
    <article className="bg-background text-foreground">
      <div className="border border-border bg-background p-[clamp(1rem,4vw,3rem)]">
        <CaseHeader
          caseId={mw0042.caseId}
          eyebrow={mw0042.eyebrow}
          title={mw0042.title}
          summary={mw0042.summary}
          status={mw0042.status}
        />

        <div className="mt-8">
          <FourRecordSummary records={mw0042.records} />
        </div>

        <div className="rs-two-column mt-4">
          <CorrelationScore {...mw0042.correlation} />
          <LegalStatus {...mw0042.legal} />
        </div>

        <footer className="mt-8 border-t border-border pt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Fixture only · correlation is not causation · unresolved remains a valid output
          </p>
        </footer>
      </div>
    </article>
  )
}
