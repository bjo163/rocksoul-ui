import type { SVGProps } from "react"
import { cn } from "../lib/cn"
import { moonWitnessBrandContract } from "../contracts/assets-v2"

export const moonWitnessBrandAssets = {
  mark: "brand/logo-mark.svg",
  horizontal: "brand/logo-horizontal.svg",
  stacked: "brand/logo-stacked.svg",
  wordmark: "brand/wordmark.svg",
  monochrome: "brand/logo-monochrome.svg",
  ecosystemLockup: "brand/rocksoul-lockup.svg",
  favicon: "brand/favicon.svg",
  appleTouch: "brand/apple-touch-icon.svg",
  maskable: "brand/app-icon-maskable.svg",
  appIcon: "brand/app-icon.svg",
  socialAvatar: "brand/social-avatar.svg",
  ogCard: "brand/og-card.svg",
  safariPinned: "brand/safari-pinned-tab.svg",
  webmanifest: "brand/site.webmanifest",
  deliveryManifest: "brand/generated/manifest.json",
  favicon16: "brand/generated/favicon-16.png",
  favicon32: "brand/generated/favicon-32.png",
  favicon48: "brand/generated/favicon-48.png",
  faviconIco: "brand/generated/favicon.ico",
  appleTouch180: "brand/generated/apple-touch-icon-180.png",
  appIcon192: "brand/generated/app-icon-192.png",
  appIcon512: "brand/generated/app-icon-512.png",
  appIconMaskable192: "brand/generated/app-icon-maskable-192.png",
  appIconMaskable512: "brand/generated/app-icon-maskable-512.png",
  socialAvatar512: "brand/generated/social-avatar-512.png",
  ogCard1200x630: "brand/generated/og-card-1200x630.png",
} as const

export function MoonWitnessMark({
  className,
  title = "MoonWitness",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg viewBox="0 0 128 128" role="img" aria-label={title} className={cn("shrink-0", className)} {...props}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="64" cy="64" r="51" stroke="var(--mw-text-primary)" strokeWidth="3" opacity=".92" />
        <path d="M62 14A50 50 0 1 0 62 114C42 103 30 85 30 64S42 25 62 14Z" fill="var(--mw-text-primary)" />
        <path d="M25 64C38 46 52 38 64 38s26 8 39 26C90 82 76 90 64 90S38 82 25 64Z" stroke="var(--mw-surface-page)" strokeWidth="5" />
        <circle cx="64" cy="64" r="12" fill="var(--mw-surface-page)" />
        <path d="M64 34l7 23 23 7-23 7-7 23-7-23-23-7 23-7Z" fill="var(--mw-brand-crimson)" />
        <path d="M64 8v21M64 99v21M8 64h17M103 64h17" stroke="var(--mw-text-primary)" strokeWidth="2" />
      </g>
    </svg>
  )
}

export function MoonWitnessBrand({
  compact = false,
  ecosystem = false,
  subtitle = moonWitnessBrandContract.tagline,
  className,
}: {
  compact?: boolean
  ecosystem?: boolean
  subtitle?: string
  className?: string
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <MoonWitnessMark className={compact ? "size-8" : "size-10"} />
      {!compact ? (
        <span className="min-w-0">
          <span className="mw-display block text-base font-black tracking-tight">
            MOON<span className="text-primary">WITNESS</span>
            {ecosystem ? <span className="ml-2 text-muted-foreground">× ROCKSOUL</span> : null}
          </span>
          <span className="mw-meta block truncate text-muted-foreground">{subtitle}</span>
        </span>
      ) : null}
    </span>
  )
}
