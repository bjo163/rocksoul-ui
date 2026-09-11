import type { ReactNode } from "react"
import { StatusBadge } from "./feedback/status-badge"
import { cn } from "../lib/cn"

export interface CaseHeaderProps {
  caseId: string
  eyebrow: string
  title: string
  summary: string
  status: "supported" | "partial" | "unresolved" | "disputed"
  variant?: "public" | "community" | "platform"
  metadata?: Array<{ label: string; value: string }>
  actions?: ReactNode
}

export function CaseHeader({
  caseId,
  eyebrow,
  title,
  summary,
  status,
  variant = "public",
  metadata = [],
  actions,
}: CaseHeaderProps) {
  return (
    <header className={cn("border-b border-border pb-7", variant === "platform" && "pb-5")}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="mw-eyebrow text-primary">{eyebrow}</p>
        <p className="mw-meta text-muted-foreground">Case / {caseId}</p>
      </div>

      <div className={cn("mt-7", variant === "platform" ? "max-w-4xl" : "max-w-5xl")}>
        <h1
          className={cn(
            "mw-display text-balance font-black uppercase",
            variant === "platform"
              ? "text-[clamp(2.5rem,5vw,4rem)] leading-[0.95]"
              : "text-[clamp(3rem,8vw,5.25rem)] leading-[0.92]",
          )}
        >
          {title}
        </h1>
        <p className="mw-reading mt-6 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
          {summary}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <StatusBadge variant={status}>{status}</StatusBadge>
          {metadata.map((item) => (
            <span key={item.label} className="mw-meta text-muted-foreground">
              {item.label}: <span className="text-foreground">{item.value}</span>
            </span>
          ))}
        </div>
        {actions ? <div className="mt-5 flex flex-wrap gap-2">{actions}</div> : null}
      </div>
    </header>
  )
}