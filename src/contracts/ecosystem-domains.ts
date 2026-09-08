import researchDomains from "../generated/research-domains.json"

export type ResearchDomain = "STORY" | "EVENT" | "PERSON" | "TEXT" | "LAW" | "PERSPECTIVE"
export type PublicGraphDomain = ResearchDomain | "RELATIONSHIP"
export type ReferenceNodeKind = "story" | "claim" | "evidence" | "source" | "text" | "event" | "person" | "law" | "case" | "location"

export type CanonicalDomainOwner = {
  label: string
  repository: string
  prefix: `${string}:`
  resource: string
  nodeKind: ReferenceNodeKind
  iconAssetId: string
  idKinds: Readonly<Record<string, ReferenceNodeKind>>
  defaultKind: ReferenceNodeKind
}

const domainEntries = [...researchDomains.domains, researchDomains.relationshipLayer]

export const canonicalDomainOwners = Object.fromEntries(
  domainEntries.map((entry) => [
    entry.domain,
    {
      label: entry.label,
      repository: entry.repository,
      prefix: entry.prefix,
      resource: entry.resource,
      nodeKind: entry.nodeKind,
      iconAssetId: entry.iconAssetId,
      idKinds: entry.idKinds,
      defaultKind: entry.defaultKind,
    },
  ]),
) as Record<PublicGraphDomain, CanonicalDomainOwner>

export const researchDomainVisualContract = researchDomains

export interface QualifiedReference {
  ref: string
  domain: PublicGraphDomain
  repository: string
  prefix: string
  id: string
  idPrefix: string
  kind: ReferenceNodeKind
}

export function canonicalOwnerFor(domain: PublicGraphDomain): CanonicalDomainOwner {
  return canonicalDomainOwners[domain]
}

export function isResearchDomain(value: string): value is ResearchDomain {
  return Object.prototype.hasOwnProperty.call(canonicalDomainOwners, value) && value !== "RELATIONSHIP"
}

export function parseQualifiedReference(ref: string): QualifiedReference | null {
  const entry = (Object.entries(canonicalDomainOwners) as Array<[PublicGraphDomain, CanonicalDomainOwner]>)
    .find(([, owner]) => ref.startsWith(owner.prefix))
  if (!entry) return null
  const [domain, owner] = entry
  const id = ref.slice(owner.prefix.length)
  if (!id) return null
  const idPrefix = id.split("-")[0]?.toUpperCase() ?? ""
  return {
    ref,
    domain,
    repository: owner.repository,
    prefix: owner.prefix,
    id,
    idPrefix,
    kind: owner.idKinds[idPrefix] ?? owner.defaultKind,
  }
}

/** Repository/product aliases retained for compatibility. Prefer semantic TEXT / LAW in new graph contracts. */
export type LegacyRepositoryDomainLabel = "RGBL" | "AWS"
