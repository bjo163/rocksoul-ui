"use client"

import * as React from "react"
import { Button } from "../ui/button"
import { cn } from "../../lib/cn"

export type FilterBarItem = {
  id: string
  label: string
  control: React.ReactNode
  active?: boolean
}

export type FilterBarProps = {
  filters: FilterBarItem[]
  onReset?: () => void
  resetLabel?: string
  actions?: React.ReactNode
  label?: string
  className?: string
}

/** A layout-only filter toolbar. State and data fetching remain with the consumer. */
function FilterBar({
  filters,
  onReset,
  resetLabel = "Clear filters",
  actions,
  label = "Filters",
  className,
}: FilterBarProps) {
  const hasActiveFilters = filters.some(filter => filter.active)

  return (
    <div
      data-slot="filter-bar"
      role="region"
      aria-label={label}
      className={cn("flex flex-wrap items-end gap-3", className)}
    >
      {filters.map(filter => (
        <div data-slot="filter-bar-item" key={filter.id} className="grid min-w-40 gap-1.5">
          <span id={`${filter.id}-label`} className="text-xs font-medium text-muted-foreground">
            {filter.label}
          </span>
          <div id={filter.id} aria-labelledby={`${filter.id}-label`}>{filter.control}</div>
        </div>
      ))}
      <div className="ml-auto flex items-center gap-2">
        {actions}
        {onReset && hasActiveFilters ? (
          <Button type="button" variant="ghost" size="sm" onClick={onReset}>
            {resetLabel}
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export { FilterBar }
