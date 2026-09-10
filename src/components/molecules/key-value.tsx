import * as React from "react"
import { cn } from "../../lib/cn"

export interface KeyValueProps extends React.ComponentProps<"dl"> {
  label: React.ReactNode
  value: React.ReactNode
}

function KeyValue({ className, label, value, ...props }: KeyValueProps) {
  return <dl data-slot="key-value" className={cn("grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1", className)} {...props}>
    <dt className="text-sm text-muted-foreground">{label}</dt>
    <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
  </dl>
}

export { KeyValue }
