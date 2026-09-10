import * as React from "react"
import { cn } from "../../lib/cn"

export interface FilterGroupProps extends React.ComponentProps<"fieldset"> {
  legend?: React.ReactNode
}

function FilterGroup({ className, legend, children, ...props }: FilterGroupProps) {
  return <fieldset data-slot="filter-group" className={cn("flex flex-wrap items-end gap-3", className)} {...props}>
    {legend ? <legend className="sr-only">{legend}</legend> : null}
    {children}
  </fieldset>
}

export { FilterGroup }
