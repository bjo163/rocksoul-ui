import statusSemantics from "../generated/status-semantics.json"

export type SemanticBadgeVariant =
  | "neutral"
  | "supported"
  | "verified"
  | "contested"
  | "partial"
  | "unresolved"
  | "restricted"
  | "prohibited"
  | "disputed"
  | "info"

export const semanticStatusVariants =
  statusSemantics.variants as Record<string, SemanticBadgeVariant>

export const statusVisualContract = statusSemantics

export function semanticStatusVariant(value: string | null | undefined): SemanticBadgeVariant {
  if (!value) return statusSemantics.defaultVariant as SemanticBadgeVariant
  return semanticStatusVariants[value] ?? statusSemantics.defaultVariant as SemanticBadgeVariant
}
