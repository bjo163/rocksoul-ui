import { buttonVariants } from "../components/button"
import { MWHeader, RepositoryCard } from "../components/archive-components"
import { WorkflowStrip } from "../components/workflow-strip"

const method = [
  ["observe", "01", "OBSERVE", "Something happened. Record it before the story hardens around it."],
  ["trace", "02", "TRACE", "Keep source, time, identity, and provenance attached to every fragment."],
  ["reconstruct", "03", "RECONSTRUCT", "Build relationships without forcing identity."],
  ["weigh", "04", "WEIGH / MIZAN", "Expose dimensions, contradictions, confidence, and what is still missing."],
  ["verify", "05", "VERIFY", "Let supported stay supported, partial stay partial, and unresolved stay open."],
] as const

export function LandingScreen() {
  return (
    <div id="top" className="bg-background text-foreground">
      <MWHeader />

      <main>
        <section className="mw-shell-wide flex min-h-[calc(100vh-64px)] flex-col justify-between py-12 sm:py-16">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <p className="mw-eyebrow text-primary">MoonWitness / Independent Observatory</p>
            <p className="mw-meta text-muted-foreground">Rocksoul / connective thread</p>
          </div>

          <div className="max-w-6xl py-16">
            <p className="mw-eyebrow text-muted-foreground">Where myth fades to legend</p>
            <h1 className="mw-display mt-5 text-balance text-[clamp(4rem,12vw,8rem)] font-black uppercase leading-[0.82]">
              Observe.
              <br />
              Trace.
              <br />
              Don’t force
              <br />
              the ending.
            </h1>
            <p className="mw-reading mt-8 text-pretty text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
              MoonWitness traces records, reconstructs relationships, weighs uncertainty through Mizan,
              and leaves unresolved questions visibly unresolved.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#case" className={buttonVariants({ variant: "primary", size: "lg" })}>
                Open MW-0042
              </a>
              <a href="#manifesto" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Read manifesto
              </a>
            </div>
          </div>

          <p className="mw-meta max-w-xl leading-5 text-muted-foreground">
            Observe first · provenance stays attached · correlation is not causation · unresolved is a valid output
          </p>
        </section>

        <section id="manifesto" className="mw-shell-wide mw-section scroll-mt-20">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="mw-eyebrow text-primary">02 / Manifesto</p>
              <h2 className="mw-display mt-4 text-5xl font-black uppercase leading-[0.95] sm:text-7xl">
                Mystery can stay.
                <br />
                Evidence cannot hide.
              </h2>
            </div>
            <div className="mw-reading self-end">
              <p className="text-xl leading-8 sm:text-2xl sm:leading-9">
                MoonWitness is not built to make every trail become a conclusion.
              </p>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                A story may align with an event. A person may remain partial. A text may preserve the motif.
                The interface should show what connects, what contradicts, who supplied it, and where certainty stops.
              </p>
              <p className="mt-6 text-base font-bold">Not enough yet is still an answer.</p>
            </div>
          </div>
        </section>

        <section id="rocksoul" className="mw-shell-wide mw-section">
          <div className="grid min-h-[520px] gap-8 border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col justify-between">
              <div>
                <p className="mw-eyebrow text-primary">03 / Rocksoul</p>
                <h2 className="mw-display mt-4 text-5xl font-black uppercase sm:text-7xl">
                  The thread,
                  <br />
                  not the throne.
                </h2>
              </div>
              <p className="mw-reading text-sm leading-6 text-muted-foreground">
                Rocksoul moves across records and repositories as a connective character. MoonWitness remains the observatory and product identity.
              </p>
            </div>
            <div
              className="relative min-h-80 overflow-hidden border border-border bg-background"
              aria-label="Abstract Rocksoul character field"
            >
              <div className="absolute inset-x-[20%] bottom-0 top-[22%] border-x border-border bg-panel" />
              <div className="absolute left-1/2 top-[12%] size-28 -translate-x-1/2 rounded-full border border-primary bg-card" />
              <div className="absolute bottom-6 left-6 right-6 border-t border-primary pt-3">
                <span className="mw-meta text-primary">ROCKSOUL / CHARACTER SIGNAL</span>
              </div>
            </div>
          </div>
        </section>

        <section id="repositories" className="mw-shell-wide mw-section">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mw-eyebrow text-primary">04 / Repository universe</p>
              <h2 className="mw-display mt-3 text-4xl font-black uppercase sm:text-6xl">Five sources. One observatory.</h2>
            </div>
            <p className="mw-reading text-sm leading-6 text-muted-foreground">
              STORY, EVENT, PERSON, and RGBL enter evidence reconstruction. AWS enters after correlation as the legal/regulatory boundary.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <RepositoryCard repo="rocksoul-legend" domain="STORY" status="healthy" records={1} schema="v1" lastSync="fixture" />
            <RepositoryCard repo="rocksoul-event" domain="EVENT" status="healthy" records={1} schema="v1" lastSync="fixture" />
            <RepositoryCard repo="rocksoul-superhero" domain="PERSON" status="degraded" records={1} schema="v1" lastSync="fixture" />
            <RepositoryCard repo="rocksoul-rgbl" domain="RGBL" status="healthy" records={1} schema="v1" lastSync="fixture" />
            <RepositoryCard repo="rocksoul-aws" domain="AWS / downstream" status="healthy" records={1} schema="v1" lastSync="fixture" />
          </div>
        </section>

        <div id="method" className="mw-shell-wide scroll-mt-20">
          <WorkflowStrip />
        </div>

        <section className="mw-shell-wide mw-section">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mw-eyebrow text-primary">Method</p>
              <h2 className="mw-display mt-4 text-4xl font-black uppercase sm:text-6xl">
                From record
                <br />
                to restraint.
              </h2>
            </div>

            <div className="grid border-t border-border">
              {method.map(([id, number, title, copy]) => (
                <article id={id} key={id} className="scroll-mt-24 border-b border-border py-6">
                  <div className="grid gap-4 sm:grid-cols-[80px_1fr_1.4fr]">
                    <span className="mw-eyebrow text-muted-foreground">{number}</span>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
