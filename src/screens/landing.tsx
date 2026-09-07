import { buttonVariants } from "../components/button"
import { ThemeToggle } from "../components/theme-toggle"
import { WorkflowStrip } from "../components/workflow-strip"

const method = [
  ["observe", "01", "OBSERVE", "Something happened. Record it before the story hardens around it."],
  ["trace", "02", "TRACE", "Keep source, time, identity, and provenance attached to every fragment."],
  ["reconstruct", "03", "RECONSTRUCT", "Build relationships without pretending correlation has become identity."],
  ["weigh", "04", "WEIGH / MIZAN", "Expose dimensions, contradictions, confidence, and what is still missing."],
  ["verify", "05", "VERIFY", "Let supported stay supported, partial stay partial, and unresolved stay open."],
] as const

const records = [
  ["STORY", "What was told."],
  ["EVENT", "What was recorded."],
  ["PERSON", "Who may be involved."],
  ["RGBL", "What the text preserves."],
] as const

export function LandingScreen() {
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="mw-shell flex min-h-16 items-center justify-between gap-4">
          <a href="#top" className="mw-touch-link font-black uppercase tracking-[-0.03em]" aria-label="MoonWitness home">
            MoonWitness
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 sm:flex">
            <a href="#method" className="mw-touch-link px-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              Method
            </a>
            <a href="#universe" className="mw-touch-link px-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              Records
            </a>
            <a href="#case" className="mw-touch-link px-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              Golden case
            </a>
          </nav>

          <ThemeToggle />
        </div>
      </header>

      <main id="top">
        <section className="mw-shell flex min-h-[82vh] flex-col justify-between py-10 sm:py-16">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <p className="mw-eyebrow text-primary">MoonWitness / Observatory interface</p>
            <p className="mw-eyebrow text-muted-foreground">Design System v0.3</p>
          </div>

          <div className="max-w-6xl py-16">
            <p className="mw-eyebrow text-muted-foreground">Where myth fades to legend</p>
            <h1 className="mt-5 text-balance text-[clamp(4rem,13vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              Observe.
              <br />
              Don’t rush
              <br />
              the answer.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
              MoonWitness is an evidence-first interface for tracing records, reconstructing relationships,
              weighing uncertainty, and keeping unresolved questions visible.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#case" className={buttonVariants({ variant: "primary", size: "lg" })}>
                Open MW-0042
              </a>
              <a href="#method" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Read the method
              </a>
            </div>
          </div>

          <p className="max-w-xl font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-muted-foreground">
            Observe first · provenance stays attached · correlation is not causation · unresolved is a valid output
          </p>
        </section>

        <div id="method" className="mw-shell scroll-mt-20">
          <WorkflowStrip />
        </div>

        <section className="mw-shell mw-section">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mw-eyebrow text-primary">The method</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.045em] sm:text-6xl">
                From record
                <br />
                to restraint.
              </h2>
            </div>

            <div className="grid gap-0 border-t border-border">
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

        <section id="universe" className="mw-shell mw-section scroll-mt-20">
          <p className="mw-eyebrow text-primary">Record universe</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {records.map(([name, copy]) => (
              <article key={name} className="min-h-48 border border-border bg-card p-5">
                <p className="mw-eyebrow text-muted-foreground">Peer record</p>
                <h3 className="mt-8 text-3xl font-black">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 border border-primary/50 bg-card p-5 sm:ml-auto sm:max-w-2xl">
            <p className="mw-eyebrow text-primary">Downstream boundary</p>
            <h3 className="mt-3 text-2xl font-black">AWS / ANGEL WITH SHOTGUN</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              AWS is not a fifth evidence record. It enters after correlation to ask what legal or regulatory rule could apply.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
