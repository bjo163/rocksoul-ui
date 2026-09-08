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

export const canonicalDomainOwners = {
  STORY: {
    label: "Story",
    repository: "rocksoul-mftl",
    prefix: "mftl:",
    resource: "case",
    nodeKind: "story",
    iconAssetId: "case",
    idKinds: { SOURCE: "source", CLAIM: "claim", EVIDENCE: "evidence", CAND: "story", MYTH: "story", ENTITY: "story" },
    defaultKind: "story",
  },
  EVENT: {
    label: "Event",
    repository: "rocksoul-legend",
    prefix: "legend:",
    resource: "event",
    nodeKind: "event",
    iconAssetId: "event",
    idKinds: { EVT: "event", PLC: "location", SRC: "source", CLM: "claim", EVD: "evidence", REL: "event", ART: "event" },
    defaultKind: "event",
  },
  PERSON: {
    label: "Person",
    repository: "rocksoul-superhero",
    prefix: "superhero:",
    resource: "person",
    nodeKind: "person",
    iconAssetId: "person",
    idKinds: { PER: "person", SRC: "source", CLM: "claim", EVD: "evidence", REL: "person" },
    defaultKind: "person",
  },
  TEXT: {
    label: "Text",
    repository: "rocksoul-rgbl",
    prefix: "rgbl:",
    resource: "rgbl",
    nodeKind: "text",
    iconAssetId: "rgbl",
    idKinds: {},
    defaultKind: "text",
  },
  LAW: {
    label: "Law",
    repository: "rocksoul-aws",
    prefix: "aws:",
    resource: "aws",
    nodeKind: "law",
    iconAssetId: "aws",
    idKinds: {},
    defaultKind: "law",
  },
  PERSPECTIVE: {
    label: "Perspective",
    repository: "rocksoul-jizz",
    prefix: "jizz:",
    resource: "perspective",
    nodeKind: "case",
    iconAssetId: "perspective",
    idKinds: {},
    defaultKind: "case",
  },
  RELATIONSHIP: {
    label: "Relationship",
    repository: "rocksoul-correlation",
    prefix: "correlation:",
    resource: "correlation",
    nodeKind: "case",
    iconAssetId: "correlation",
    idKinds: {},
    defaultKind: "case",
  },
} as const satisfies Record<PublicGraphDomain, CanonicalDomainOwner>

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
  return value in canonicalDomainOwners && value !== "RELATIONSHIP"
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
