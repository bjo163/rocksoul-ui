import { Badge } from "./badge"

export interface CaseHeaderProps {
  caseId: string
  eyebrow: string
  title: string
  summary: string
  status: "supported" | "partial" | "unresolved" | "disputed"
}

export function CaseHeader({ caseId, eyebrow, title, summary, status }: CaseHeaderProps) {
  return (
    <header className="border-b border-border pb-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          Case / {caseId}
        </p>
      </div>

      <div className="mt-7 max-w-5xl">
        <h2 className="text-balance text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.055em]">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
          {summary}
        </p>
        <div className="mt-5">
          <Badge variant={status}>{status}</Badge>
        </div>
      </div>
    </header>
  )
}
