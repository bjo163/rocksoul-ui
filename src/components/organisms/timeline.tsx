import * as React from "react"
import { cn } from "../../lib/cn"

export type TimelineItem = {
  id: string
  title: React.ReactNode
  description?: React.ReactNode
  timestamp?: React.ReactNode
  icon?: React.ReactNode
  content?: React.ReactNode
  status?: "default" | "active" | "complete" | "error"
}

export type TimelineProps = React.ComponentProps<"ol"> & { items: TimelineItem[] }

function Timeline({ items, className, ...props }: TimelineProps) {
  return (
    <ol data-slot="timeline" className={cn("grid", className)} {...props}>
      {items.map((item, index) => (
        <li key={item.id} data-slot="timeline-item" data-status={item.status ?? "default"} className="relative grid grid-cols-[auto_1fr] gap-3 pb-6 last:pb-0">
          {index < items.length - 1 ? <span aria-hidden="true" className="absolute left-3 top-7 h-[calc(100%-1.25rem)] w-px bg-border" /> : null}
          <span className="relative z-10 flex size-6 items-center justify-center rounded-full border bg-background text-xs text-muted-foreground data-[status=active]:border-primary data-[status=active]:text-primary" data-status={item.status ?? "default"}>
            {item.icon ?? <span className="size-1.5 rounded-full bg-current" />}
          </span>
          <div className="min-w-0 pt-0.5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <div className="font-medium">{item.title}</div>
              {item.timestamp ? <time className="text-xs text-muted-foreground">{item.timestamp}</time> : null}
            </div>
            {item.description ? <div className="mt-1 text-sm text-muted-foreground">{item.description}</div> : null}
            {item.content ? <div className="mt-3">{item.content}</div> : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

export { Timeline }
