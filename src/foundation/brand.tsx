import type { SVGProps } from "react"
import { cn } from "../lib/cn"
import { MoonWitnessBrand, MoonWitnessMark } from "../components/brand"

/** Canonical RockSoul ecosystem mark. Use this wrapper for new consumers. */
export function BrandIcon({ className, title = "RockSoul", ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return <MoonWitnessMark className={cn(className)} title={title} {...props} />
}

/** Canonical RockSoul wordmark lockup. Kept separate from product feature branding. */
export function RockSoulLogo({ compact = false, subtitle, className }: { compact?: boolean; subtitle?: string; className?: string }) {
  return <MoonWitnessBrand compact={compact} ecosystem subtitle={subtitle} className={className} />
}
