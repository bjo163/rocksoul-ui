"use client"

import * as React from "react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

export interface DateRangePickerProps {
  value?: DateRange
  defaultValue?: DateRange
  onChange?: (range: DateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  numberOfMonths?: number
}

function DateRangePicker({ value, defaultValue, onChange, placeholder = "Select date range", disabled, className, numberOfMonths = 2 }: DateRangePickerProps) {
  const [internal, setInternal] = React.useState<DateRange | undefined>(defaultValue)
  const range = value === undefined ? internal : value
  const label = range?.from ? `${format(range.from, "MMM d, yyyy")}${range.to ? ` – ${format(range.to, "MMM d, yyyy")}` : ""}` : placeholder
  const handleChange = (next: DateRange | undefined) => {
    if (value === undefined) setInternal(next)
    onChange?.(next)
  }
  return <Popover>
    <PopoverTrigger asChild><Button type="button" variant="outline" disabled={disabled} className={className} aria-label={label}>{label}</Button></PopoverTrigger>
    <PopoverContent align="start" className="w-auto p-0">
      <Calendar mode="range" selected={range} onSelect={handleChange} numberOfMonths={numberOfMonths} />
    </PopoverContent>
  </Popover>
}

export { DateRangePicker }
