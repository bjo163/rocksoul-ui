import { useEffect, useId, useRef, type ReactNode } from "react"
import { cn } from "../lib/cn"

export function IconButton({
  label,
  children,
  variant = "outline",
  size = "md",
  loading = false,
  disabled,
  className,
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  children: ReactNode
  variant?: "ghost" | "outline" | "danger"
  size?: "sm" | "md" | "lg"
  loading?: boolean
}) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cn(
        "relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-none border transition-colors disabled:pointer-events-none disabled:opacity-45",
        size === "lg" ? "p-3" : size === "sm" ? "p-2" : "p-2.5",
        variant === "ghost" && "border-transparent bg-transparent hover:bg-panel",
        variant === "outline" && "border-border bg-card hover:border-border-strong hover:bg-panel",
        variant === "danger" && "border-primary bg-transparent text-primary hover:bg-primary/10",
        className,
      )}
      {...props}
    >
      <span className={cn(loading && "invisible")}>{children}</span>
      {loading ? <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">···</span> : null}
    </button>
  )
}

export function Tooltip({ label, children, shortcut }: { label: string; children: ReactNode; shortcut?: string }) {
  const id = useId()
  return (
    <span className="group relative inline-flex">
      <span aria-describedby={id}>{children}</span>
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 hidden -translate-x-1/2 whitespace-nowrap border border-border bg-overlay px-2 py-1 text-xs text-foreground group-focus-within:block group-hover:block"
      >
        {label}{shortcut ? <span className="ml-2 font-mono text-[10px] text-muted-foreground">{shortcut}</span> : null}
      </span>
    </span>
  )
}

export function Dialog({
  open,
  title,
  children,
  onClose,
  size = "md",
  actions,
}: {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
  size?: "sm" | "md" | "lg"
  actions?: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const restoreRef = useRef<HTMLElement | null>(null)
  const titleId = useId()

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
      aria-labelledby={titleId}
      className={cn(
        "rounded-none border border-border bg-card p-0 text-foreground backdrop:bg-black/70",
        size === "sm" && "w-[min(92vw,420px)]",
        size === "md" && "w-[min(92vw,640px)]",
        size === "lg" && "w-[min(94vw,960px)]",
      )}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClose={() => restoreRef.current?.focus()}
    >
      <div className="flex items-center justify-between border-b border-border p-4">
        <h2 id={titleId} className="text-lg font-bold">{title}</h2>
        <IconButton label="Close dialog" variant="ghost" onClick={onClose}>×</IconButton>
      </div>
      <div className="p-5">{children}</div>
      {actions ? <div className="flex flex-wrap justify-end gap-2 border-t border-border p-4">{actions}</div> : null}
    </dialog>
  )
}

export function Drawer({
  open,
  title,
  children,
  onClose,
  position = "right",
  footer,
}: {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
  position?: "left" | "right" | "bottom-mobile"
  footer?: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const restoreRef = useRef<HTMLElement | null>(null)
  const titleId = useId()

  useEffect(() => {
    const drawer = ref.current
    if (!drawer) return
    if (open && !drawer.open) {
      restoreRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      drawer.showModal()
    }
    if (!open && drawer.open) drawer.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      className={cn(
        "fixed m-0 max-w-none rounded-none border-border bg-card p-0 text-foreground backdrop:bg-black/70",
        position === "right" && "inset-y-0 right-0 h-dvh w-[min(90vw,420px)] border-l",
        position === "left" && "inset-y-0 left-0 h-dvh w-[min(90vw,420px)] border-r",
        position === "bottom-mobile" && "inset-x-0 bottom-0 h-auto max-h-[80dvh] w-full border-t sm:inset-y-0 sm:left-auto sm:right-0 sm:h-dvh sm:w-[min(90vw,420px)] sm:border-l sm:border-t-0",
      )}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClose={() => restoreRef.current?.focus()}
    >
      <div className="flex min-h-16 items-center justify-between border-b border-border px-4">
        <h2 id={titleId} className="text-base font-bold">{title}</h2>
        <IconButton label="Close drawer" variant="ghost" onClick={onClose}>×</IconButton>
      </div>
      <div className="p-4">{children}</div>
      {footer ? <div className="border-t border-border p-4">{footer}</div> : null}
    </dialog>
  )
}

export function Avatar({
  label,
  size = "md",
  src,
  status,
}: {
  label?: string
  size?: "xs" | "sm" | "md" | "lg"
  src?: string
  status?: "online" | "away" | "offline"
}) {
  const classes = {
    xs: "size-6 text-[9px]",
    sm: "size-8 text-[10px]",
    md: "size-10 text-xs",
    lg: "size-12 text-sm",
  }
  const initials = label
    ? label.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase()
    : "?"
  return (
    <span className="relative inline-flex shrink-0" aria-label={label ?? "Anonymous"}>
      <span className={cn(
        "inline-flex items-center justify-center overflow-hidden rounded-full border border-border bg-panel font-mono font-bold uppercase",
        classes[size],
      )}>
        {src ? <img src={src} alt="" className="size-full object-cover" /> : initials}
      </span>
      {status ? (
        <span
          className={cn(
            "absolute bottom-0 right-0 size-2.5 rounded-full border border-background",
            status === "online" ? "bg-success" : status === "away" ? "bg-warning" : "bg-unresolved",
          )}
          aria-label={status}
        />
      ) : null}
    </span>
  )
}

export function Divider({ variant = "default" }: { variant?: "default" | "soft" | "legal-boundary" }) {
  return (
    <div
      role="separator"
      className={cn(
        "w-full",
        variant === "default" && "h-px bg-border",
        variant === "soft" && "h-px bg-border opacity-50",
        variant === "legal-boundary" && "h-0.5 bg-primary",
      )}
      aria-label={variant === "legal-boundary" ? "AWS legal boundary" : undefined}
    />
  )
}

export function Skeleton({ variant = "text" }: { variant?: "text" | "card" | "table-row" | "graph-node" }) {
  const classes = {
    text: "h-4 w-full",
    card: "h-40 w-full",
    "table-row": "h-10 w-full",
    "graph-node": "size-20 rounded-full",
  }
  return <span className={cn("block animate-pulse bg-panel motion-reduce:animate-none", classes[variant])} aria-hidden="true" />
}
