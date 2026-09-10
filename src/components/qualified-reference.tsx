import { Badge } from "./compat/badge"
import { parseQualifiedReference } from "../contracts/ecosystem-domains"
import { cn } from "../lib/cn"

export interface QualifiedReferenceViewProps {
  value: string
  href?: string
  compact?: boolean
  className?: string
}

export function QualifiedReferenceView({ value, href, compact = false, className }: QualifiedReferenceViewProps) {
  const parsed = parseQualifiedReference(value)
  const content = (
    <span className={cn("inline-grid gap-1", compact ? "grid-cols-[auto_1fr] items-center gap-x-2" : "", className)}>
      {parsed ? <Badge variant="info">{parsed.domain}</Badge> : <Badge variant="neutral">REFERENCE</Badge>}
      <code className="break-all text-[10px] text-foreground">{value}</code>
      {!compact && parsed ? (
        <small className="font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground">
          {parsed.repository} · {parsed.kind}
        </small>
      ) : null}
    </span>
  )
  return href ? <a href={href} className="mw-link no-underline">{content}</a> : content
}
