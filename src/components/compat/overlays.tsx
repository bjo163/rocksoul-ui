import { useRef, type ReactNode } from "react"
import { cn } from "../../lib/cn"
import { Button as PrimitiveButton } from "../ui/button"
import { Skeleton as PrimitiveSkeleton } from "../ui/skeleton"
import { Separator } from "../ui/separator"
import { Dialog as PrimitiveDialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "../ui/sheet"
import { Tooltip as PrimitiveTooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../ui/tooltip"
import { Avatar as PrimitiveAvatar, AvatarImage, AvatarFallback } from "../ui/avatar"

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
    <PrimitiveButton
      variant="ghost"
      size="icon"
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
    </PrimitiveButton>
  )
}

/** @deprecated Compose Tooltip and its parts from components/ui/tooltip. */
export function Tooltip({ label, children, shortcut }: { label: string; children: ReactNode; shortcut?: string }) {
  return <TooltipProvider><PrimitiveTooltip><TooltipTrigger asChild>
    <span className="inline-flex" tabIndex={0}>{children}</span>
  </TooltipTrigger><TooltipContent>{label}{shortcut && <span className="ml-2 font-mono">{shortcut}</span>}</TooltipContent></PrimitiveTooltip></TooltipProvider>
}

/** @deprecated Compose Dialog and its parts from components/ui/dialog. */
export function Dialog({ open, title, children, onClose, size = "md", actions }: {
  open: boolean; title: string; children: ReactNode; onClose: () => void
  size?: "sm" | "md" | "lg"; actions?: ReactNode
}) {
  const restoreRef = useRef<HTMLElement | null>(null)
  return <PrimitiveDialog open={open} onOpenChange={value => { if (!value) onClose() }}>
    <DialogContent aria-describedby={undefined}
      onOpenAutoFocus={() => { restoreRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null }}
      onCloseAutoFocus={event => { event.preventDefault(); restoreRef.current?.focus() }}
      className={cn("bg-card p-0 text-foreground", size === "sm" ? "sm:max-w-[420px]" : size === "lg" ? "sm:max-w-[960px]" : "sm:max-w-[640px]")}>
      <DialogHeader className="border-b border-border p-4"><DialogTitle>{title}</DialogTitle></DialogHeader>
      <div className="p-5">{children}</div>
      {actions && <DialogFooter className="border-t border-border p-4">{actions}</DialogFooter>}
    </DialogContent>
  </PrimitiveDialog>
}

/** @deprecated This side panel is a Sheet. Use components/ui/sheet. */
export function Drawer({ open, title, children, onClose, position = "right", footer }: {
  open: boolean; title: string; children: ReactNode; onClose: () => void
  position?: "left" | "right" | "bottom-mobile"; footer?: ReactNode
}) {
  const restoreRef = useRef<HTMLElement | null>(null)
  return <Sheet open={open} onOpenChange={value => { if (!value) onClose() }}>
    <SheetContent side={position === "left" ? "left" : "right"} aria-describedby={undefined}
      onOpenAutoFocus={() => { restoreRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null }}
      onCloseAutoFocus={event => { event.preventDefault(); restoreRef.current?.focus() }}
      className={cn("bg-card text-foreground", position === "bottom-mobile" && "max-sm:inset-x-0 max-sm:top-auto max-sm:bottom-0 max-sm:h-auto max-sm:max-h-[80dvh] max-sm:w-full max-sm:border-t")}>
      <SheetHeader className="border-b border-border"><SheetTitle>{title}</SheetTitle></SheetHeader>
      <div className="overflow-auto p-4">{children}</div>
      {footer && <SheetFooter className="border-t border-border">{footer}</SheetFooter>}
    </SheetContent>
  </Sheet>
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
    <Separator
      decorative={false}
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
  return <PrimitiveSkeleton className={cn("block bg-panel motion-reduce:animate-none", classes[variant])} aria-hidden="true" />
}
