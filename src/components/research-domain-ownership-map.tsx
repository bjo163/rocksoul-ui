import { useId } from "react"
import {
  canonicalDomainOwners,
  type PublicGraphDomain,
  type ResearchDomain,
} from "../contracts/ecosystem-domains"
import { cn } from "../lib/cn"

export interface ResearchDomainOwnershipMapProps {
  className?: string
  title?: string
  description?: string
}

const positions = [
  { x: 84, y: 78 },
  { x: 354, y: 54 },
  { x: 624, y: 78 },
  { x: 84, y: 356 },
  { x: 354, y: 380 },
  { x: 624, y: 356 },
] as const

const researchDomains = (Object.keys(canonicalDomainOwners) as PublicGraphDomain[])
  .filter((domain): domain is ResearchDomain => domain !== "RELATIONSHIP")

export function ResearchDomainOwnershipMap({
  className,
  title = "Research domain ownership",
  description = "Six canonical research domains connect through the reviewed relationship layer while retaining their canonical repository ownership.",
}: ResearchDomainOwnershipMapProps) {
  const id = useId()
  const titleId = `${id}-title`
  const descriptionId = `${id}-description`
  const relationship = canonicalDomainOwners.RELATIONSHIP

  return (
    <figure className={cn("border border-border bg-card p-4", className)}>
      <svg
        viewBox="0 0 960 540"
        className="h-auto w-full"
        role="img"
        aria-labelledby={`${titleId} ${descriptionId}`}
      >
        <title id={titleId}>{title}</title>
        <desc id={descriptionId}>{description}</desc>
        <defs>
          <pattern id={`${id}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="var(--mw-border-default)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="960" height="540" fill="var(--mw-surface-page)" />
        <rect width="960" height="540" fill={`url(#${id}-grid)`} opacity=".45" />

        <g fill="none" stroke="var(--mw-border-strong)" strokeWidth="2" aria-hidden="true">
          {positions.map((position, index) => (
            <line
              key={researchDomains[index]}
              x1="480"
              y1="270"
              x2={position.x + 126}
              y2={position.y + 66}
            />
          ))}
        </g>

        {researchDomains.map((domain, index) => {
          const owner = canonicalDomainOwners[domain]
          const position = positions[index]
          return (
            <g key={domain} transform={`translate(${position.x} ${position.y})`} aria-hidden="true">
              <rect width="252" height="132" rx="12" fill="var(--mw-surface-raised)" stroke="var(--mw-border-strong)" strokeWidth="2" />
              <text x="20" y="40" fill="var(--mw-text-primary)" fontFamily="Inter Tight, Inter, Arial, sans-serif" fontSize="24" fontWeight="800">{domain}</text>
              <text x="20" y="72" fill="var(--mw-text-secondary)" fontFamily="IBM Plex Mono, monospace" fontSize="13">{owner.repository}</text>
              <text x="20" y="100" fill="var(--mw-brand-crimson)" fontFamily="IBM Plex Mono, monospace" fontSize="12">{owner.prefix}</text>
            </g>
          )
        })}

        <g transform="translate(372 210)" aria-hidden="true">
          <rect width="216" height="120" rx="14" fill="var(--mw-surface-raised)" stroke="var(--mw-brand-crimson)" strokeWidth="3" />
          <text x="108" y="38" textAnchor="middle" fill="var(--mw-brand-crimson)" fontFamily="IBM Plex Mono, monospace" fontSize="11" fontWeight="700" letterSpacing="2">RELATIONSHIP LAYER</text>
          <text x="108" y="72" textAnchor="middle" fill="var(--mw-text-primary)" fontFamily="Inter Tight, Inter, Arial, sans-serif" fontSize="25" fontWeight="800">CORRELATION</text>
          <text x="108" y="98" textAnchor="middle" fill="var(--mw-text-secondary)" fontFamily="IBM Plex Mono, monospace" fontSize="10">{relationship.repository} · {relationship.prefix}</text>
        </g>
      </svg>

      <figcaption className="mt-4 border-t border-border pt-4">
        <p className="mw-meta text-foreground">Text equivalent</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </figcaption>
    </figure>
  )
}
