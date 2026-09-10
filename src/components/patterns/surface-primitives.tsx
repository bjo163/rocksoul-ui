import { useRef, type ReactNode } from "react"
import { cn } from "../../lib/cn"
import { Button as PrimitiveButton } from "../ui/button"
import { Input as PrimitiveInput } from "../ui/input"
import { Textarea as PrimitiveTextarea } from "../ui/textarea"
import { Avatar as PrimitiveAvatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Dialog as PrimitiveDialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet"

export function SurfaceSelect({ label, options, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; options: Array<{ label: string; value: string }> }) {
  return <label className="grid gap-2 text-sm font-medium">{label ? <span>{label}</span> : null}<select className="h-9 w-full border border-input bg-transparent px-3 text-sm" {...props}>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
}

export function SurfaceButton({ variant = "default", ...props }: Omit<React.ComponentProps<typeof PrimitiveButton>, "variant"> & { variant?: "default" | "secondary" | "danger" | "destructive" | "outline" | "ghost" | "link" }) {
  return <PrimitiveButton variant={variant === "danger" ? "destructive" : variant} {...props} />
}

export function SurfaceInput({ label, variant: _variant, size: _size, ...props }: Omit<React.ComponentProps<typeof PrimitiveInput>, "size"> & { label?: string; variant?: string; size?: "sm" | "md" | "lg" }) {
  return <label className="grid gap-2 text-sm font-medium">{label ? <span>{label}</span> : null}<PrimitiveInput {...props} /></label>
}

export function SurfaceTextarea({ label, characterCount: _characterCount, ...props }: React.ComponentProps<typeof PrimitiveTextarea> & { label?: string; characterCount?: boolean }) {
  return <label className="grid gap-2 text-sm font-medium">{label ? <span>{label}</span> : null}<PrimitiveTextarea {...props} /></label>
}

export function SurfaceAvatar({ label, size = "md" }: { label?: string; size?: "xs" | "sm" | "md" | "lg" }) {
  const initials = label ? label.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase() : "?"
  const mapped = size === "xs" || size === "sm" ? "sm" : size === "lg" ? "lg" : "default"
  return <PrimitiveAvatar size={mapped} aria-label={label ?? "Anonymous"}><AvatarImage alt="" /><AvatarFallback>{initials}</AvatarFallback></PrimitiveAvatar>
}

export function SurfaceDialog({ open, title, children, onClose, size = "md", actions }: { open: boolean; title: string; children: ReactNode; onClose: () => void; size?: "sm" | "md" | "lg"; actions?: ReactNode }) {
  return <PrimitiveDialog open={open} onOpenChange={(value) => { if (!value) onClose() }}><DialogContent aria-describedby={undefined} className={cn("bg-card p-0 text-foreground", size === "sm" ? "sm:max-w-[420px]" : size === "lg" ? "sm:max-w-[960px]" : "sm:max-w-[640px]")}><DialogHeader className="border-b border-border p-4"><DialogTitle>{title}</DialogTitle></DialogHeader><div className="p-5">{children}</div>{actions ? <DialogFooter className="border-t border-border p-4">{actions}</DialogFooter> : null}</DialogContent></PrimitiveDialog>
}

export function SurfaceDrawer({ open, title, children, onClose, position = "right", footer }: { open: boolean; title: string; children: ReactNode; onClose: () => void; position?: "left" | "right"; footer?: ReactNode }) {
  return <Sheet open={open} onOpenChange={(value) => { if (!value) onClose() }}><SheetContent side={position} aria-describedby={undefined} className="bg-card text-foreground"><SheetHeader className="border-b border-border"><SheetTitle>{title}</SheetTitle></SheetHeader><div className="overflow-auto p-4">{children}</div>{footer ? <SheetFooter className="border-t border-border">{footer}</SheetFooter> : null}</SheetContent></Sheet>
}
