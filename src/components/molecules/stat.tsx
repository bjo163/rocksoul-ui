import * as React from "react"
import { cn } from "../../lib/cn"

export interface StatProps extends React.ComponentProps<"div"> {
  label: React.ReactNode
  value: React.ReactNode
  description?: React.ReactNode
  trend?: React.ReactNode
}

function Stat({ className, label, value, description, trend, ...props }: StatProps) {
  return <div data-slot="stat" className={cn("space-y-1", className)} {...props}>
    <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground"><span>{label}</span>{trend ? <span>{trend}</span> : null}</div>
    <div className="text-2xl font-semibold tracking-tight">{value}</div>
    {description ? <div className="text-sm text-muted-foreground">{description}</div> : null}
  </div>
}

export { Stat }
