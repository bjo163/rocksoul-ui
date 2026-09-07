import { CaseHeader } from "../components/case-header"
import { CorrelationScore } from "../components/correlation-score"
import { EvidenceGraph } from "../components/evidence-graph"
import { FourRecordSummary } from "../components/four-record-summary"
import { LegalStatus } from "../components/legal-status"
import { MWHeader } from "../components/archive-components"
import { mw0042 } from "../fixtures/mw0042"

export function MW0042Overview() {
  return (
    <article id="case" className="scroll-mt-16 bg-background text-foreground">
      <MWHeader caseId={mw0042.caseId} />
      <div className="mw-shell-wide py-10 sm:py-14">
        <nav aria-label="MW-0042 sections" className="mb-7 flex flex-wrap border-b border-border pb-3">
          {[
            ["Overview", "case-overview"],
            ["Evidence", "evidence"],
            ["Correlation", "correlation"],
            ["AWS", "aws"],
          ].map(([label, target]) => (
            <a
              key={target}
              href={`#${target}`}
              className="mw-link px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div id="case-overview" className="scroll-mt-24">
          <CaseHeader
            caseId={mw0042.caseId}
            eyebrow={mw0042.eyebrow}
            title={mw0042.title}
            summary={mw0042.summary}
            status={mw0042.status}
            metadata={[{ label: "updated", value: "05:30 WIB / fixture" }]}
          />
        </div>

        <section id="evidence" className="scroll-mt-24 pt-10">
          <FourRecordSummary records={mw0042.records} />
        </section>

        <section id="correlation" className="scroll-mt-24 pt-6">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <CorrelationScore {...mw0042.correlation} />
            <EvidenceGraph records={mw0042.records} score={mw0042.correlation.score} />
          </div>
        </section>

        <section id="aws" className="scroll-mt-24 pt-6">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-0.5 flex-1 bg-primary" aria-hidden="true" />
            <span className="mw-eyebrow text-primary">The boundary</span>
            <div className="h-0.5 flex-1 bg-primary" aria-hidden="true" />
          </div>
          <LegalStatus {...mw0042.legal} />
        </section>

        <footer className="mt-8 border-t border-border pt-4">
          <p className="mw-meta text-muted-foreground">
            Fixture only · correlation is not causation · unresolved remains a valid final state
          </p>
        </footer>
      </div>
    </article>
  )
}
