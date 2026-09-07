import { Badge } from "../components/badge"
import { AWSBoundary, EvidenceCard, SourceBlock, TimelineEntry } from "../components/archive-components"
import { LegalStatus } from "../components/legal-status"
import { mw0042 } from "../fixtures/mw0042"
import type { RecordDomain } from "../components/four-record-summary"

const copy: Record<RecordDomain | "AWS", { number: string; kicker: string; statement: string }> = {
  STORY: { number: "05", kicker: "Narrative record", statement: "What was told is a record. It is not automatically what happened." },
  EVENT: { number: "06", kicker: "Temporal record", statement: "Time makes a claim inspectable. It does not make identity automatic." },
  PERSON: { number: "07", kicker: "Identity record", statement: "Partial identity stays partial. The interface must resist completion by aesthetics." },
  RGBL: { number: "08", kicker: "Source-text record", statement: "Text can preserve a motif without proving a causal bridge." },
  AWS: { number: "09", kicker: "Legal boundary", statement: "Evidence reconstruction ends here. Legal interpretation starts after the line." },
}

function DomainDetail({ domain }: { domain: RecordDomain }) {
  if (domain === "EVENT") {
    const temporal = mw0042.recordDetails.EVENT.temporal
    return (
      <section className="border border-rgbl-green bg-card p-5" aria-labelledby="event-window-heading">
        <p className="mw-meta text-rgbl-green">Temporal window / fixture</p>
        <h3 id="event-window-heading" className="mt-3 text-lg font-bold">Movement sits inside a bounded interval.</h3>
        <dl className="mt-5 grid grid-cols-3 gap-3">
          <div className="border border-border p-3">
            <dt className="mw-meta text-muted-foreground">Start</dt>
            <dd className="mw-display mt-2 text-3xl font-black">{temporal.start}</dd>
          </div>
          <div className="border border-border p-3">
            <dt className="mw-meta text-muted-foreground">End</dt>
            <dd className="mw-display mt-2 text-3xl font-black">{temporal.end}</dd>
          </div>
          <div className="border border-border p-3">
            <dt className="mw-meta text-muted-foreground">Timezone</dt>
            <dd className="mt-3 font-mono text-[10px] font-bold uppercase">{temporal.timezone}</dd>
          </div>
        </dl>
      </section>
    )
  }

  if (domain === "PERSON") {
    const matches = mw0042.recordDetails.PERSON.matchDimensions
    const rows = [
      ["Role", matches.role],
      ["Movement", matches.movement],
      ["Identity", matches.identity],
    ] as const
    return (
      <section className="border border-warning bg-card p-5" aria-labelledby="identity-match-heading">
        <p className="mw-meta text-warning">Identity dimensions / partial</p>
        <h3 id="identity-match-heading" className="mt-3 text-lg font-bold">Two attributes line up. Identity does not.</h3>
        <dl className="mt-5 grid gap-2">
          {rows.map(([label, matched]) => (
            <div key={label} className="flex items-center justify-between border-b border-border py-3">
              <dt className="mw-meta text-muted-foreground">{label}</dt>
              <dd><Badge variant={matched ? "supported" : "partial"}>{matched ? "MATCH" : "NOT VERIFIED"}</Badge></dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">Identity remains a closure blocker even when role and movement align.</p>
      </section>
    )
  }

  if (domain === "RGBL") {
    const channels = mw0042.recordDetails.RGBL.channels
    const rows = [
      ["RED", channels.red, "border-rgbl-red text-rgbl-red"],
      ["GREEN", channels.green, "border-rgbl-green text-rgbl-green"],
      ["BLUE", channels.blue, "border-rgbl-blue text-rgbl-blue"],
      ["LIGHT", channels.light, "border-rgbl-light text-rgbl-light"],
    ] as const
    return (
      <section className="border border-border bg-card p-5" aria-labelledby="rgbl-channel-heading">
        <p className="mw-meta text-rgbl-blue">RGBL channels / semantic source reading</p>
        <h3 id="rgbl-channel-heading" className="mt-3 text-lg font-bold">Four channels preserve different parts of the motif.</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {rows.map(([channel, value, tone]) => (
            <div key={channel} className={`border-l-2 bg-background p-4 ${tone}`}>
              <p className="mw-meta">{channel}</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">Semantic relation is visible. Causal relation is not asserted.</p>
      </section>
    )
  }

  return (
    <section className="border border-border bg-card p-5">
      <p className="mw-meta text-rgbl-red">Narrative provenance</p>
      <dl className="mt-4 grid gap-2 text-sm">
        <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Type</dt><dd>{mw0042.recordDetails.STORY.sourceType}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Locator</dt><dd>{mw0042.recordDetails.STORY.locator}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Independent</dt><dd>YES</dd></div>
      </dl>
    </section>
  )
}

export function DomainScreen({ domain }: { domain: RecordDomain | "AWS" }) {
  const config = copy[domain]
  if (domain === "AWS") {
    return (
      <section className="mw-shell-wide min-h-[760px] py-14">
        <p className="mw-eyebrow text-primary">{config.number} / AWS</p>
        <p className="mw-meta mt-3 text-muted-foreground">{config.kicker}</p>
        <h2 className="mw-display mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.94] sm:text-7xl">THE BOUNDARY QUESTION.</h2>
        <p className="mw-reading mt-6 text-lg leading-8 text-muted-foreground">{config.statement}</p>

        <div className="mt-10">
          <AWSBoundary legalState={mw0042.legal.status}>
            <p className="text-sm font-semibold">Cool. Now the law gets involved.</p>
          </AWSBoundary>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
          <LegalStatus {...mw0042.legal} />
          <div className="grid gap-4">
            {mw0042.legal.instruments.map((instrument) => (
              <SourceBlock
                key={instrument.id}
                id={`source-${instrument.id.toLowerCase()}`}
                variant="legal-instrument"
                sourceId={instrument.id}
                title={instrument.title}
                excerpt={`${instrument.type}. This fixture remains ${instrument.status}.`}
                citation={instrument.id}
                provenance={instrument.locator}
                verification={instrument.status}
              />
            ))}
          </div>
        </div>

        <p className="mw-meta mt-6 border-t border-border pt-4 text-muted-foreground">{mw0042.legal.conclusion}</p>
      </section>
    )
  }

  const record = mw0042.records.find((item) => item.domain === domain)
  if (!record) return null
  const detail = mw0042.recordDetails[domain]

  return (
    <section className="mw-shell-wide min-h-[760px] py-14">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mw-eyebrow text-primary">{config.number} / {domain}</p>
          <p className="mw-meta mt-3 text-muted-foreground">{config.kicker}</p>
          <h2 className="mw-display mt-4 text-5xl font-black uppercase leading-[0.94] sm:text-7xl">{record.title}</h2>
          <p className="mw-reading mt-6 text-lg leading-8 text-muted-foreground">{config.statement}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant={record.status}>{record.status}</Badge>
            <Badge variant={detail.independent ? "verified" : "unresolved"}>{detail.independent ? "independent source" : "dependency unknown"}</Badge>
          </div>
          <dl className="mw-meta mt-6 grid gap-2 border-t border-border pt-4 text-muted-foreground">
            <div className="flex justify-between gap-3"><dt>Source type</dt><dd className="text-right text-foreground">{detail.sourceType}</dd></div>
            <div className="flex justify-between gap-3"><dt>Locator</dt><dd className="text-right text-foreground">{detail.locator}</dd></div>
          </dl>
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
            sourceHref={`#source-${record.domain.toLowerCase()}`}
          />

          <DomainDetail domain={record.domain} />

          {record.domain === "EVENT" ? (
            <TimelineEntry
              variant="event"
              timestamp={`${mw0042.recordDetails.EVENT.temporal.start}–${mw0042.recordDetails.EVENT.temporal.end}`}
              title="Movement inside missing interval"
              description="Fixture event interval remains independently inspectable."
              source={record.source}
              status={record.verification}
            />
          ) : null}

          <SourceBlock
            id={`source-${record.domain.toLowerCase()}`}
            variant={record.domain === "RGBL" ? "quote" : "record"}
            sourceId={record.source}
            title={record.title}
            excerpt={record.description}
            citation={record.recordId}
            provenance={detail.locator}
            verification={record.verification}
          />
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
