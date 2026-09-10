import { Pagination as PaginationPrimitive } from "../ui/pagination"
import { Button } from "../ui/button"

export interface SimplePaginationProps {
  page?: number
  pages?: number
  onPageChange?: (page: number) => void | Promise<void>
}

/** A generic previous/next pagination molecule. It has no application or data dependencies. */
export function SimplePagination({ page = 1, pages = 1, onPageChange }: SimplePaginationProps) {
  return (
    <PaginationPrimitive aria-label="Pagination" className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
      <Button variant="ghost" disabled={page <= 1} onClick={() => void onPageChange?.(page - 1)}>Previous</Button>
      <span className="mw-meta text-muted-foreground">Page {page} / {pages}</span>
      <Button variant="ghost" disabled={page >= pages} onClick={() => void onPageChange?.(page + 1)}>Next</Button>
    </PaginationPrimitive>
  )
}
