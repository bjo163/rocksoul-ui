import { CaseHeader } from "../components/case-header"
import { FourRecordSummary } from "../components/four-record-summary"
import { MWHeader } from "../components/archive-components"
import {
  AWSLegalSummaryPattern,
  CorrelationGraphPattern,
  EvidenceGridPattern,
  PublicCasePattern,
  RelatedCases,
} from "../components/patterns"
import { mw0042 } from "../fixtures/mw0042"

export function MW0042Overview() {
  const header = (
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
  )

  const summary = <FourRecordSummary records={mw0042.records} compact />

  const evidence = (
    <section id="evidence" className="scroll-mt-24">
      <EvidenceGridPattern records={mw0042.records} />
    </section>
  )

  const correlation = (
    <section id="correlation" className="scroll-mt-24">
      <p className="mw-eyebrow text-primary">MW-0042 / Correlation</p>
      <h2 className="mw-display mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.94] sm:text-6xl">
        The trails are starting to line up.
      </h2>
      <p className="mt-4 text-base text-muted-foreground">That still doesn’t make them the same thing.</p>
      <div className="mt-6">
        <CorrelationGraphPattern records={mw0042.records} correlation={mw0042.correlation} />
      </div>
    </section>
  )

  const legal = (
    <section id="aws" className="scroll-mt-24">
      <AWSLegalSummaryPattern
        legal={mw0042.legal}
        sources={[
          {
            id: "LAW-FIX-01",
            title: "Synthetic Cross-Border Movement Instrument",
            excerpt: "Reference-only fixture used to prove legal-source presentation.",
            locator: "fixture/aws/0042/law-01",
          },
          {
            id: "LAW-FIX-02",
            title: "Synthetic Protected-Passage Rule",
            excerpt: "Reference-only fixture. No real jurisdiction is asserted.",
            locator: "fixture/aws/0042/law-02",
          },
        ]}
      />
    </section>
  )

  const related = (
    <RelatedCases
      cases={[
        {
          caseId: "MW-0038",
          title: "Night Window",
          summary: "A separate synthetic case sharing temporal structure, not identity.",
          status: "partial",
          traceCount: 3,
          updatedAt: "fixture",
        },
        {
          caseId: "MW-0048",
          title: "Return Signal",
          summary: "A separate synthetic case sharing motif structure, not causation.",
          status: "unresolved",
          traceCount: 2,
          updatedAt: "fixture",
        },
      ]}
    />
  )

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
            <a key={target} href={`#${target}`} className="mw-link px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>

        <PublicCasePattern
          header={header}
          summary={summary}
          evidence={evidence}
          correlation={correlation}
          legal={legal}
          related={related}
        />

        <footer className="mt-10 border-t border-border pt-4">
          <p className="mw-meta text-muted-foreground">
            Fixture only · correlation is not causation · unresolved remains a valid final state
          </p>
        </footer>
      </div>
    </article>
  )
}
