import { Badge } from "./badge"

export interface LegalStatusProps {
  status: "disputed" | "unresolved"
  jurisdiction: string
  review: string
  prompt: string
}

export function LegalStatus({ status, jurisdiction, review, prompt }: LegalStatusProps) {
  return (
    <section className="border border-primary/50 bg-card p-5" aria-labelledby="legal-heading">
      <div className="h-0.5 w-full bg-primary" aria-hidden="true" />
      <p className="mt-4 mw-eyebrow text-primary">The boundary / AWS</p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
        Angel With Shotgun · international law / regulation
      </p>
      <h3 id="legal-heading" className="mt-4 text-2xl font-bold tracking-tight">
        Evidence asks what happened. Law asks what rule would apply.
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{prompt}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Badge variant="disputed">{status}</Badge>
        <Badge variant="neutral">{jurisdiction}</Badge>
        <Badge variant="info">{review}</Badge>
      </div>
      <p className="mt-5 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
        Synthetic fixture / reference-only · legal analysis is not a court judgment
      </p>
    </section>
  )
}
