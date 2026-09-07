import { Badge } from "./badge"

export interface LegalStatusProps {
  status: "disputed" | "unresolved"
  jurisdiction: string
  review: string
  prompt: string
  basis?: string
}

export function LegalStatus({ status, jurisdiction, review, prompt, basis = "fixture instruments only" }: LegalStatusProps) {
  return (
    <section className="border border-primary bg-card p-5" aria-labelledby="legal-heading">
      <div className="h-0.5 w-full bg-primary" aria-label="AWS legal boundary" role="separator" />
      <p className="mw-eyebrow mt-4 text-primary">The boundary / AWS</p>
      <p className="mw-meta mt-2 text-muted-foreground">Angel With Shotgun · international law / regulation</p>
      <h3 id="legal-heading" className="mw-display mt-4 text-2xl font-bold">
        Evidence asks what happened. Law asks what rule would apply.
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{prompt}</p>
      <dl className="mt-5 grid gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-2"><dt className="mw-meta text-muted-foreground">Legal state</dt><dd><Badge variant="disputed">{status}</Badge></dd></div>
        <div className="flex flex-wrap items-center gap-2"><dt className="mw-meta text-muted-foreground">Jurisdiction</dt><dd><Badge variant="unresolved">{jurisdiction}</Badge></dd></div>
        <div className="flex flex-wrap items-center gap-2"><dt className="mw-meta text-muted-foreground">Review</dt><dd><Badge variant="info">{review}</Badge></dd></div>
        <div className="flex flex-wrap items-center gap-2"><dt className="mw-meta text-muted-foreground">Basis</dt><dd>{basis}</dd></div>
      </dl>
      <p className="mw-meta mt-5 border-t border-border pt-4 text-muted-foreground">
        Synthetic fixture / reference-only · cited source law and MoonWitness analysis remain separate · not a court judgment
      </p>
    </section>
  )
}
