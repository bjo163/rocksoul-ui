export type ResearchDomain = "STORY" | "EVENT" | "PERSON" | "TEXT" | "LAW" | "PERSPECTIVE"
export type PublicGraphDomain = ResearchDomain | "RELATIONSHIP"

export type CanonicalDomainOwner = {
  repository: string
  prefix: `${string}:`
}

export const canonicalDomainOwners = {
  STORY: { repository: "rocksoul-mftl", prefix: "mftl:" },
  EVENT: { repository: "rocksoul-legend", prefix: "legend:" },
  PERSON: { repository: "rocksoul-superhero", prefix: "superhero:" },
  TEXT: { repository: "rocksoul-rgbl", prefix: "rgbl:" },
  LAW: { repository: "rocksoul-aws", prefix: "aws:" },
  PERSPECTIVE: { repository: "rocksoul-jizz", prefix: "jizz:" },
  RELATIONSHIP: { repository: "rocksoul-correlation", prefix: "correlation:" },
} as const satisfies Record<PublicGraphDomain, CanonicalDomainOwner>

export function canonicalOwnerFor(domain: PublicGraphDomain): CanonicalDomainOwner {
  return canonicalDomainOwners[domain]
}

export function isResearchDomain(value: string): value is ResearchDomain {
  return value in canonicalDomainOwners && value !== "RELATIONSHIP"
}

/** Repository/product aliases retained for compatibility. Prefer semantic TEXT / LAW in new graph contracts. */
export type LegacyRepositoryDomainLabel = "RGBL" | "AWS"
