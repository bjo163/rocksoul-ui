import type { ReactNode } from "react"
import { QualifiedReferenceView } from "./qualified-reference"
import { cn } from "../lib/cn"

export interface RecordFieldGridProps {
  record: Record<string, unknown>
  labels?: Record<string, string>
  exclude?: string[]
  className?: string
  referenceHref?: (value: string) => string | undefined
  emptyLabel?: string
}

function humanize(value: string) {
  return value.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function isQualifiedRef(value: string) {
  return /^[a-z][a-z0-9-]*:.+$/i.test(value)
}

function renderValue(value: unknown, referenceHref?: (value: string) => string | undefined): ReactNode {
  if (value === null || value === undefined || value === "") return <span className="text-muted-foreground">—</span>
  if (typeof value === "boolean") return value ? "Yes" : "No"
  if (typeof value === "number") return Number.isInteger(value) ? String(value) : value.toFixed(2)
  if (typeof value === "string") {
    return isQualifiedRef(value)
      ? <QualifiedReferenceView value={value} href={referenceHref?.(value)} />
      : <span className="break-words">{value}</span>
  }
  if (Array.isArray(value)) {
    if (!value.length) return <span className="text-muted-foreground">None recorded</span>
    return (
      <div className="grid gap-2">
        {value.map((item, index) => (
          <div key={typeof item === "string" ? item : index} className="border-l border-border pl-3">
            {renderValue(item, referenceHref)}
          </div>
        ))}
      </div>
    )
  }
  if (typeof value === "object") {
    return (
      <dl className="grid gap-2">
        {Object.entries(value as Record<string, unknown>).map(([key, nested]) => (
          <div key={key} className="grid gap-1 border-l border-border pl-3">
            <dt className="mw-meta text-muted-foreground">{humanize(key)}</dt>
            <dd className="m-0 text-sm leading-6 text-foreground">{renderValue(nested, referenceHref)}</dd>
          </div>
        ))}
      </dl>
    )
  }
  return String(value)
}

export function RecordFieldGrid({
  record,
  labels = {},
  exclude = [],
  className,
  referenceHref,
  emptyLabel = "No fields recorded.",
}: RecordFieldGridProps) {
  const excluded = new Set(exclude)
  const entries = Object.entries(record).filter(([key]) => !excluded.has(key))
  return (
    <dl className={cn("grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-3", className)}>
      {entries.map(([key, value]) => (
        <div key={key} className="min-w-0 bg-card p-4">
          <dt className="mw-meta text-muted-foreground">{labels[key] ?? humanize(key)}</dt>
          <dd className="m-0 mt-2 text-sm leading-6 text-foreground">{renderValue(value, referenceHref)}</dd>
        </div>
      ))}
      {!entries.length ? <div className="bg-card p-4 text-sm text-muted-foreground">{emptyLabel}</div> : null}
    </dl>
  )
}
