import type { HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/cn"

const badgeVariants = cva(
  "inline-flex min-h-6 items-center rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em]",
  {
    variants: {
      variant: {
        neutral: "border-border bg-muted text-muted-foreground",
        supported: "border-success/40 bg-success/10 text-success",
        partial: "border-warning/40 bg-warning/10 text-warning",
        unresolved: "border-border bg-muted text-foreground",
        disputed: "border-primary/40 bg-primary/10 text-primary",
        info: "border-info/40 bg-info/10 text-info",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { badgeVariants }
