import * as React from "react"
import { cn } from "../../lib/cn"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { SearchIcon, XIcon } from "../ui/icons"

export interface SearchInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
  onClear?: () => void
  clearLabel?: string
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, value, defaultValue, onClear, clearLabel = "Clear search", ...props }, ref) => {
    const hasValue = value !== undefined ? String(value).length > 0 : defaultValue !== undefined && String(defaultValue).length > 0
    return (
      <div className="relative w-full" data-slot="search-input">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={ref}
          type="search"
          value={value}
          defaultValue={defaultValue}
          className={cn("pl-9", (hasValue && onClear) && "pr-9", className)}
          {...props}
        />
        {hasValue && onClear ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 size-7 -translate-y-1/2"
            onClick={onClear}
            aria-label={clearLabel}
          >
            <XIcon className="size-4" />
          </Button>
        ) : null}
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"

export { SearchInput }
