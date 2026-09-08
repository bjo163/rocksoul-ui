import type { KeyboardEvent } from "react"
import { cn } from "../lib/cn"

export type EvidenceMatrixStance = "support" | "counter" | "context" | "alternative"

export interface EvidenceMatrixRow {
  id: string
  label: string
  context?: string
  epistemic?: string
  sourceCount?: number
  values: Partial<Record<EvidenceMatrixStance, number>>
}

export interface EvidenceMatrixProps {
  rows: EvidenceMatrixRow[]
  className?: string
  caption?: string
  onActivateRow?: (row: EvidenceMatrixRow) => void
}

const columns: Array<{ key: EvidenceMatrixStance; label: string }> = [
  { key: "support", label: "Support" },
  { key: "counter", label: "Counter" },
  { key: "context", label: "Context" },
  { key: "alternative", label: "Alternative" },
]

function activateWithKeyboard(event: KeyboardEvent<HTMLTableRowElement>, row: EvidenceMatrixRow, onActivateRow?: (row: EvidenceMatrixRow) => void) {
  if (!onActivateRow) return
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault()
    onActivateRow(row)
  }
}

export function EvidenceMatrix({ rows, className, caption = "Claim by evidence matrix", onActivateRow }: EvidenceMatrixProps) {
  return (
    <div className={cn("max-h-[560px] overflow-auto border border-border bg-card", className)}>
      <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left text-xs">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th className="sticky left-0 top-0 z-30 min-w-[220px] border-b border-r border-border bg-panel px-3 py-3 mw-meta text-muted-foreground">Claim</th>
            <th className="sticky top-0 z-20 border-b border-border bg-panel px-3 py-3 mw-meta text-muted-foreground">Epistemic</th>
            {columns.map((column) => (
              <th key={column.key} className="sticky top-0 z-20 border-b border-border bg-panel px-3 py-3 mw-meta text-muted-foreground">{column.label}</th>
            ))}
            <th className="sticky top-0 z-20 border-b border-border bg-panel px-3 py-3 mw-meta text-muted-foreground">Sources</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const readable = columns.map(({ key, label }) => `${row.values[key] ?? 0} ${label.toLowerCase()}`).join(", ")
            return (
              <tr
                key={row.id}
                tabIndex={0}
                aria-label={`${row.label}. ${readable}. ${row.sourceCount ?? 0} sources.`}
                onClick={() => onActivateRow?.(row)}
                onKeyDown={(event) => activateWithKeyboard(event, row, onActivateRow)}
                className={cn(
                  "group outline-none",
                  onActivateRow && "cursor-pointer",
                  "focus-visible:[&>td]:bg-panel hover:[&>td]:bg-panel",
                )}
              >
                <td className="sticky left-0 z-10 border-b border-r border-border bg-card px-3 py-3 group-focus-visible:shadow-[inset_2px_0_var(--mw-brand-crimson)] group-hover:shadow-[inset_2px_0_var(--mw-brand-crimson)]">
                  <strong className="block text-sm text-foreground">{row.label}</strong>
                  {row.context ? <small className="mt-1 block text-[10px] leading-4 text-muted-foreground">{row.context}</small> : null}
                </td>
                <td className="border-b border-border px-3 py-3 text-muted-foreground">{row.epistemic ?? "—"}</td>
                {columns.map(({ key }) => {
                  const value = row.values[key] ?? 0
                  return (
                    <td key={key} className="border-b border-border px-3 py-3">
                      <span className={cn(
                        "inline-flex h-7 min-w-7 items-center justify-center border border-border px-2 font-mono text-[10px]",
                        value > 0 && "border-primary/50 bg-primary/10 text-foreground",
                        value > 1 && "bg-primary/20",
                        value > 2 && "bg-primary/30",
                      )}>
                        {value}
                      </span>
                    </td>
                  )
                })}
                <td className="border-b border-border px-3 py-3 font-mono text-[10px] text-muted-foreground">{row.sourceCount ?? 0}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {rows.length === 0 ? <p className="p-6 text-sm text-muted-foreground">No evidence rows yet.</p> : null}
    </div>
  )
}
