import type { ImgHTMLAttributes } from "react"
import { MoonWitnessRegistryAssetImage } from "./asset-provider"
import { resolveCommunitySourceLocator } from "../contracts/ecosystem-links"

export const communityParticipationAssetIds = [
  "source-linked",
  "discussion-thread",
  "proposal-review",
  "identity-bridge",
  "saved-case",
  "notification",
  "moderation-history",
  "attributed-reply",
] as const

export type CommunityParticipationAssetId = typeof communityParticipationAssetIds[number]

export function MoonWitnessCommunityParticipationAsset({
  asset,
  alt,
  ...props
}: Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  asset: CommunityParticipationAssetId
  alt: string
}) {
  return (
    <MoonWitnessRegistryAssetImage
      pack="community-participation"
      assetId={asset}
      alt={alt}
      {...props}
    />
  )
}

export function CommunitySourceLocatorLink({
  source,
  className,
}: {
  source?: string
  className?: string
}) {
  const locator = resolveCommunitySourceLocator(source)
  if (!locator) return <span className={className}>No source attached</span>
  if (!locator.href) return <code className={className}>{locator.source}</code>
  return (
    <a className={className} href={locator.href} target="_blank" rel="noreferrer">
      {locator.source} <span aria-hidden="true">↗</span>
    </a>
  )
}
