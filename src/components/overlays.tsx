import { useEffect, useRef, type ReactNode } from "react"
import { Button } from "./button"
import { cn } from "../lib/cn"

export function IconButton({
  label,
  children,
  variant = "outline",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  children: ReactNode
  variant?: "ghost" | "outline" | "danger"
}) {
  return (
    <button
      aria-label={label}
      title={label}
      className={cn(
        "mw-touch inline-flex items-center justify-center rounded-none border p-2 transition-colors",
        variant === "ghost" && "border-transparent bg-transparent hover:bg-panel",
        variant === "outline" && "border-border bg-card hover:border-border-strong hover:bg-panel",
        variant === "danger" && "border-primary bg-transparent text-primary hover:bg-primary/10",
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  const id = useRef(`tooltip-${Math.random().toString(36).slice(2)}`).current
  return (
    <span className="group relative inline-flex">
      <span aria-describedby={id}>{children}</span>
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 hidden -translate-x-1/2 whitespace-nowrap border border-border bg-overlay px-2 py-1 text-xs text-foreground group-focus-within:block group-hover:block"
      >
        {label}
      </span>
    </span>
  )
}

export function Dialog({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const restoreRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      restoreRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      className="w-[min(92vw,640px)] rounded-none border border-border bg-card p-0 text-foreground backdrop:bg-black/70"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClose={() => restoreRef.current?.focus()}
    >
      <div className="flex items-center justify-between border-b border-border p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <Button variant="ghost" onClick={onClose} aria-label="Close dialog">
          Close
        </Button>
      </div>
      <div className="p-5">{children}</div>
    </dialog>
  )
}

export function Drawer({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const drawer = ref.current
    if (!drawer) return
    if (open && !drawer.open) drawer.showModal()
    if (!open && drawer.open) drawer.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      className="fixed inset-y-0 right-0 m-0 h-dvh w-[min(90vw,420px)] max-w-none rounded-none border-l border-border bg-card p-0 text-foreground backdrop:bg-black/70"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
    >
      <div className="flex min-h-16 items-center justify-between border-b border-border px-4">
        <h2 className="text-base font-bold">{title}</h2>
        <Button variant="ghost" onClick={onClose}>
          Close
        </Button>
      </div>
      <div className="p-4">{children}</div>
    </dialog>
  )
}

export function Avatar({
  label,
  size = "md",
}: {
  label?: string
  size?: "xs" | "sm" | "md" | "lg"
}) {
  const classes = {
    xs: "size-6 text-[9px]",
    sm: "size-8 text-[10px]",
    md: "size-10 text-xs",
    lg: "size-12 text-sm",
  }
  const initials = label
    ? label
        .split(/\s+/)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "?"
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-panel font-mono font-bold uppercase",
        classes[size],
      )}
      aria-label={label ?? "Anonymous"}
    >
      {initials}
    </span>
  )
}

export function Divider({ legal = false }: { legal?: boolean }) {
  return (
    <div
      role="separator"
      className={cn("w-full", legal ? "h-0.5 bg-primary" : "h-px bg-border")}
      aria-label={legal ? "AWS legal boundary" : undefined}
    />
  )
}

export function Skeleton({
  variant = "text",
}: {
  variant?: "text" | "card" | "table-row" | "graph-node"
}) {
  const classes = {
    text: "h-4 w-full",
    card: "h-40 w-full",
    "table-row": "h-10 w-full",
    "graph-node": "size-20",
  }
  return (
    <span
      className={cn("block animate-pulse bg-panel motion-reduce:animate-none", classes[variant])}
      aria-hidden="true"
    />
  )
}
