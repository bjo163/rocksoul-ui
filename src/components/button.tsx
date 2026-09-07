import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/cn"

const buttonVariants = cva(
  "relative inline-flex min-h-11 items-center justify-center gap-2 rounded-none border font-mono text-[10px] font-bold uppercase tracking-[0.1em] transition-[background-color,border-color,color,opacity] duration-[var(--mw-motion-fast)] ease-[var(--mw-ease-standard)] active:translate-y-px disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary: "border-primary bg-primary text-white hover:bg-[var(--mw-brand-crimson-dark)]",
        secondary: "border-border bg-card text-foreground hover:border-border-strong hover:bg-panel",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-panel",
        danger: "border-primary bg-transparent text-primary hover:bg-primary/10",
      },
      size: {
        sm: "min-h-11 px-3",
        md: "min-h-11 px-4",
        lg: "min-h-12 px-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  leading?: ReactNode
  trailing?: ReactNode
}

export function Button({
  className,
  variant,
  size,
  loading = false,
  disabled,
  leading,
  trailing,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {leading}
      <span className={cn(loading && "invisible")}>{children}</span>
      {trailing}
      {loading ? (
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          ···
        </span>
      ) : null}
    </button>
  )
}

export { buttonVariants }
