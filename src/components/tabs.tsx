import { useId, useState, type KeyboardEvent, type ReactNode } from "react"
import { cn } from "../lib/cn"

export interface TabItem {
  id: string
  label: string
  content: ReactNode
  disabled?: boolean
}

export function Tabs({
  items,
  variant = "underline",
}: {
  items: TabItem[]
  variant?: "underline" | "archive"
}) {
  const base = useId()
  const first = items.find((item) => !item.disabled)?.id ?? items[0]?.id ?? ""
  const [active, setActive] = useState(first)

  const move = (direction: 1 | -1) => {
    const enabled = items.filter((item) => !item.disabled)
    const index = enabled.findIndex((item) => item.id === active)
    if (index < 0 || !enabled.length) return
    const next = enabled[(index + direction + enabled.length) % enabled.length]
    setActive(next.id)
    requestAnimationFrame(() => document.getElementById(`${base}-tab-${next.id}`)?.focus())
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      move(1)
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      move(-1)
    }
  }

  return (
    <div>
      <div role="tablist" aria-label="Sections" className="flex flex-wrap border-b border-border">
        {items.map((item) => {
          const selected = item.id === active
          return (
            <button
              id={`${base}-tab-${item.id}`}
              key={item.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`${base}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              onKeyDown={onKeyDown}
              onClick={() => setActive(item.id)}
              className={cn(
                "mw-touch px-4 font-mono text-[10px] font-bold uppercase tracking-[0.1em] disabled:opacity-40",
                selected
                  ? variant === "archive"
                    ? "bg-panel text-foreground"
                    : "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      {items.map((item) => (
        <div
          id={`${base}-panel-${item.id}`}
          key={item.id}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${item.id}`}
          hidden={item.id !== active}
          className="pt-4"
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
