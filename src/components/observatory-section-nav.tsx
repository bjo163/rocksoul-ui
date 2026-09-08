import { useEffect, useState } from "react"
import { cn } from "../lib/cn"

export interface ObservatorySectionNavItem {
  id: string
  label: string
}

export function ObservatorySectionNav({
  items,
  label = "INDEX /",
  offset = 112,
  className,
}: {
  items: ObservatorySectionNavItem[]
  label?: string
  offset?: number
  className?: string
}) {
  const [active, setActive] = useState(items[0]?.id ?? "")

  useEffect(() => {
    const nodes = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]
    if (!nodes.length || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActive(visible.target.id)
    }, { rootMargin: `-${offset}px 0px -68% 0px`, threshold: [0, .15, .4, .7] })

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [items, offset])

  return (
    <nav
      aria-label="Observatory sections"
      className={cn("sticky z-30 flex min-h-10 items-center gap-3 border border-border bg-background/95 px-3 backdrop-blur-md", className)}
      style={{ top: offset - 48 }}
    >
      <span className="mw-meta shrink-0 text-subtle">{label}</span>
      <div className="flex min-w-0 flex-1 self-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "location" : undefined}
            className={cn(
              "relative flex min-h-10 shrink-0 items-center px-3 font-mono text-[10px] text-muted-foreground no-underline transition hover:text-foreground",
              active === item.id && "text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-primary",
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
