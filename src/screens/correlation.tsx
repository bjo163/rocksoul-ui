import { CorrelationScore } from "../components/correlation-score"
import { EvidenceGraph } from "../components/evidence-graph"
import { mw0042 } from "../fixtures/mw0042"

export function CorrelationScreen() {
  return (
    <section className="mw-shell-wide min-h-[760px] py-14">
      <p className="mw-eyebrow text-primary">11 / MW-0042 / Correlation</p>
      <h2 className="mw-display mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.94] sm:text-7xl">
        The trails are starting to line up.
      </h2>
      <p className="mt-5 text-lg text-muted-foreground">That still doesn’t make them the same thing.</p>
      <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <EvidenceGraph records={mw0042.records} score={mw0042.correlation.score} />
        <CorrelationScore {...mw0042.correlation} />
      </div>
      <p className="mt-5 text-sm font-semibold text-warning">Identity remains incomplete. Case stays open.</p>
    </section>
  )
}
