import { Badge } from "../components/badge"
import { EvidenceCard, SourceBlock, TimelineEntry } from "../components/archive-components"
import { mw0042 } from "../fixtures/mw0042"
import type { RecordDomain } from "../components/four-record-summary"

const copy: Record<RecordDomain | "AWS", { number: string; kicker: string; statement: string }> = {
  STORY: { number: "05", kicker: "Narrative record", statement: "What was told is a record. It is not automatically what happened." },
  EVENT: { number: "06", kicker: "Temporal record", statement: "Time makes a claim inspectable. It does not make identity automatic." },
  PERSON: { number: "07", kicker: "Identity record", statement: "Partial identity stays partial. The interface must resist completion by aesthetics." },
  RGBL: { number: "08", kicker: "Source-text record", statement: "Text can preserve a motif without proving a causal bridge." },
  AWS: { number: "09", kicker: "Legal boundary", statement: "Evidence reconstruction ends here. Legal interpretation starts after the line." },
}

export function DomainScreen({ domain }: { domain: RecordDomain | "AWS" }) {
  const config = copy[domain]
  if (domain === "AWS") {
    return (
      <section className="mw-shell-wide min-h-[760px] py-14">
        <p className="mw-eyebrow text-primary">{config.number} / AWS</p>
        <h2 className="mw-display mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.94] sm:text-7xl">THE BOUNDARY QUESTION.</h2>
        <p className="mw-reading mt-6 text-lg leading-8 text-muted-foreground">{config.statement}</p>
        <div className="mt-10 h-0.5 bg-primary" role="separator" aria-label="AWS legal boundary" />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <SourceBlock
            variant="legal-instrument"
            sourceId="LAW-FIX-01"
            title="Synthetic Cross-Border Movement Instrument"
            excerpt="Fixture-only legal instrument used to prove the separation between source law and MoonWitness review."
            citation="LAW-FIX-01"
            provenance="fixture/aws/0042/law-01"
            verification="reference-only"
          />
          <SourceBlock
            variant="legal-instrument"
            sourceId="LAW-FIX-02"
            title="Synthetic Protected-Passage Rule"
            excerpt="Reference-only rule. No real-world jurisdiction is asserted by this fixture."
            citation="LAW-FIX-02"
            provenance="fixture/aws/0042/law-02"
            verification="reference-only"
          />
        </div>
      </section>
    )
  }

  const record = mw0042.records.find((item) => item.domain === domain)
  if (!record) return null

  return (
    <section className="mw-shell-wide min-h-[760px] py-14">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mw-eyebrow text-primary">{config.number} / {domain}</p>
          <p className="mw-meta mt-3 text-muted-foreground">{config.kicker}</p>
          <h2 className="mw-display mt-4 text-5xl font-black uppercase leading-[0.94] sm:text-7xl">{record.title}</h2>
          <p className="mw-reading mt-6 text-lg leading-8 text-muted-foreground">{config.statement}</p>
          <div className="mt-6"><Badge variant={record.status}>{record.status}</Badge></div>
        </div>
        <div className="grid gap-4">
          <EvidenceCard
            domain={record.domain}
            recordId={record.recordId}
            repo={record.sourceRepo}
            claim={record.description}
            provenance={record.source}
            verification={record.verification}
            status={record.status}
            canonical={record.canonicalStatus === "canonical"}
            flagged={record.domain === "PERSON"}
            selected={record.domain === "EVENT"}
          />
          {record.domain === "EVENT" ? (
            <TimelineEntry
              timestamp="02:14–02:37"
              title="Movement inside missing interval"
              description="Fixture event interval remains independently inspectable."
              source={record.source}
              status={record.verification}
            />
          ) : (
            <SourceBlock
              sourceId={record.source}
              title={record.title}
              excerpt={record.description}
              citation={record.recordId}
              provenance={`fixture/${record.domain.toLowerCase()}/0042/a`}
              verification={record.verification}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export const StoryScreen = () => <DomainScreen domain="STORY" />
export const EventScreen = () => <DomainScreen domain="EVENT" />
export const PersonScreen = () => <DomainScreen domain="PERSON" />
export const RGBLScreen = () => <DomainScreen domain="RGBL" />
export const AWSScreen = () => <DomainScreen domain="AWS" />
