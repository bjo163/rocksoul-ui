"use client"

import * as React from "react"
import { ArrowDownIcon, ChevronDownIcon, ChevronUpIcon } from "../ui/icons"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { cn } from "../../lib/cn"

export type DataTableColumn<T> = {
  id: string
  header: React.ReactNode
  accessor?: (row: T) => React.ReactNode
  sortValue?: (row: T) => string | number | null | undefined
  className?: string
  sortable?: boolean
}

export type DataTableProps<T> = {
  data: T[]
  columns: DataTableColumn<T>[]
  getRowId?: (row: T, index: number) => string
  selectable?: boolean
  selectedRowIds?: string[]
  onSelectedRowIdsChange?: (rowIds: string[]) => void
  emptyState?: React.ReactNode
  caption?: string
  className?: string
}

type SortState = { id: string; direction: "asc" | "desc" } | null

function DataTable<T>({
  data,
  columns,
  getRowId = (_row, index) => String(index),
  selectable = false,
  selectedRowIds,
  onSelectedRowIdsChange,
  emptyState = "No results.",
  caption,
  className,
}: DataTableProps<T>) {
  const [sort, setSort] = React.useState<SortState>(null)
  const [internalSelected, setInternalSelected] = React.useState<string[]>([])
  const selected = selectedRowIds ?? internalSelected
  const setSelected = (next: string[]) => {
    if (selectedRowIds === undefined) setInternalSelected(next)
    onSelectedRowIdsChange?.(next)
  }
  const rows = React.useMemo(() => {
    if (!sort) return data
    const column = columns.find(item => item.id === sort.id)
    if (!column?.sortValue) return data
    return [...data].sort((a, b) => {
      const left = column.sortValue?.(a)
      const right = column.sortValue?.(b)
      if (left === right) return 0
      if (left == null) return 1
      if (right == null) return -1
      const result = left < right ? -1 : 1
      return sort.direction === "asc" ? result : -result
    })
  }, [columns, data, sort])
  const ids = rows.map(getRowId)
  const allSelected = ids.length > 0 && ids.every(id => selected.includes(id))
  const toggleSort = (column: DataTableColumn<T>) => {
    if (!column.sortable || !column.sortValue) return
    setSort(current => current?.id !== column.id
      ? { id: column.id, direction: "asc" }
      : current.direction === "asc" ? { id: column.id, direction: "desc" } : null)
  }
  const toggleAll = () => setSelected(allSelected ? selected.filter(id => !ids.includes(id)) : [...new Set([...selected, ...ids])])

  return (
    <div data-slot="data-table" className={cn("w-full", className)}>
      <Table>
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <TableHeader>
          <TableRow>
            {selectable ? <TableHead className="w-10"><Checkbox aria-label="Select all rows" checked={allSelected} onCheckedChange={toggleAll} /></TableHead> : null}
            {columns.map(column => <TableHead key={column.id} className={column.className}>
              {column.sortable && column.sortValue ? <Button variant="ghost" size="sm" className="-ml-3" onClick={() => toggleSort(column)}>
                {column.header}
                {sort?.id === column.id ? (sort.direction === "asc" ? <ChevronUpIcon aria-hidden="true" /> : <ArrowDownIcon aria-hidden="true" />) : <ChevronDownIcon aria-hidden="true" />}
                <span className="sr-only">Sort by {String(column.header)}</span>
              </Button> : column.header}
            </TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? <TableRow><TableCell colSpan={columns.length + (selectable ? 1 : 0)} className="h-24 text-center">{emptyState}</TableCell></TableRow> : rows.map((row, index) => {
            const id = getRowId(row, index)
            return <TableRow key={id} data-state={selected.includes(id) ? "selected" : undefined}>
              {selectable ? <TableCell><Checkbox aria-label={`Select row ${id}`} checked={selected.includes(id)} onCheckedChange={() => setSelected(selected.includes(id) ? selected.filter(item => item !== id) : [...selected, id])} /></TableCell> : null}
              {columns.map(column => <TableCell key={column.id} className={column.className}>{column.accessor ? column.accessor(row) : null}</TableCell>)}
            </TableRow>
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export { DataTable }
