import type { HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/cn"
import { Badge as PrimitiveBadge } from "../ui/badge"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-mono font-semibold uppercase tracking-[0.08em]",
  {
    variants: {
      variant: {
        neutral: "border-border-strong bg-panel text-muted-foreground",
        supported: "border-success bg-panel text-success",
        verified: "border-verified bg-panel text-verified",
        contested: "border-primary bg-panel text-primary",
        partial: "border-warning bg-panel text-warning",
        unresolved: "border-unresolved bg-panel text-unresolved",
        restricted: "border-restricted bg-panel text-restricted",
        prohibited: "border-prohibited bg-panel text-prohibited",
        disputed: "border-primary bg-panel text-primary",
        info: "border-info bg-panel text-info",
      },
      size: {
        sm: "min-h-6 px-2.5 py-1 text-[10px]",
        md: "min-h-7 px-3 py-1 text-[11px]",
      },
    },
    defaultVariants: { variant: "neutral", size: "sm" },
  },
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function StatusBadge({ className, variant, size, ...props }: BadgeProps) {
  return <PrimitiveBadge variant="outline" className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

/** @deprecated Use StatusBadge for domain status or components/ui/badge for a generic badge. */
export const Badge = StatusBadge

export { badgeVariants }
