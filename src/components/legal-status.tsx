import { Badge } from "./badge"

export interface LegalStatusProps {
  status: "disputed" | "unresolved"
  jurisdiction: string
  prompt: string
}

export function LegalStatus({ status, jurisdiction, prompt }: LegalStatusProps) {
  return (
    <section className="border border-primary/50 bg-card p-5" aria-labelledby="legal-heading">
      <div className="h-0.5 w-full bg-primary" aria-hidden="true" />
      <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
        The boundary / AWS
      </p>
      <h3 id="legal-heading" className="mt-2 text-2xl font-bold tracking-tight">
        Evidence finds the line. Law asks if someone crossed it.
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{prompt}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Badge variant="disputed">{status}</Badge>
        <Badge variant="neutral">{jurisdiction}</Badge>
      </div>
    </section>
  )
}
