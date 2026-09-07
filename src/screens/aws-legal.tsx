import { Citation, SourceBlock } from "../components/archive-components"
import { LegalStatus } from "../components/legal-status"
import { mw0042 } from "../fixtures/mw0042"

export function AWSLegalScreen() {
  return (
    <section className="mw-shell-wide min-h-[760px] py-14">
      <div className="flex items-center gap-4">
        <div className="h-0.5 flex-1 bg-primary" />
        <span className="mw-eyebrow text-primary">12 / The boundary</span>
        <div className="h-0.5 flex-1 bg-primary" />
      </div>
      <h2 className="mw-display mt-8 text-5xl font-black uppercase sm:text-7xl">Cool. Now the law gets involved.</h2>
      <p className="mw-reading mt-5 text-base leading-7 text-muted-foreground">
        Evidence asks what happened. Law asks what rule would apply. Those are different layers and must stay visually separate.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <LegalStatus {...mw0042.legal} />
        <div className="grid gap-4">
          <SourceBlock
            variant="legal-instrument"
            sourceId="LAW-FIX-01"
            title="Synthetic Cross-Border Movement Instrument"
            excerpt="Reference-only fixture. It exists to prove legal source presentation, not to assert real law."
            citation="LAW-FIX-01"
            provenance="fixture/aws/0042/law-01"
            verification="reference-only"
          />
          <Citation code="LAW-FIX-02" source="Synthetic Protected-Passage Rule" locator="fixture/aws/0042/law-02" variant="legal" />
        </div>
      </div>
    </section>
  )
}
