import { cn } from "../lib/cn"

export interface ConfidenceMeterProps {
  value: number
  label?: string
  detail?: string
  className?: string
}

export function ConfidenceMeter({ value, label = "Confidence", detail, className }: ConfidenceMeterProps) {
  const normalized = Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0))
  const percentage = Math.round(normalized * 100)
  return (
    <div className={cn("grid gap-2", className)}>
      <div className="flex items-center justify-between gap-3">
        <span className="mw-meta text-muted-foreground">{label}</span>
        <strong className="font-mono text-xs text-foreground">{percentage}%</strong>
      </div>
      <div
        role="meter"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        aria-valuetext={`${percentage}%`}
        className="h-2 overflow-hidden border border-border bg-panel"
      >
        <span className="block h-full bg-current text-success" style={{ width: `${percentage}%` }} />
      </div>
      {detail ? <p className="text-xs leading-5 text-muted-foreground">{detail}</p> : null}
    </div>
  )
}
