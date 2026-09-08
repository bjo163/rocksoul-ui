import legalIntelligence from "../generated/legal-intelligence.json"

export const legalIntelligenceContract = legalIntelligence

export type LegalResultState = (typeof legalIntelligence.legalResultStates)[number]["id"]
export type LegalApplicabilityAxisId = (typeof legalIntelligence.applicabilityAxes)[number]["id"]
export type LegalReviewStageId = (typeof legalIntelligence.reviewPipeline)[number]["id"]

export const legalResultVocabulary = legalIntelligence.legalResultStates
export const legalApplicabilityAxes = legalIntelligence.applicabilityAxes
export const legalReviewPipeline = legalIntelligence.reviewPipeline
export const legalVisualGuardrails = legalIntelligence.guardrails

export function legalResultDefinition(id: string) {
  return legalIntelligence.legalResultStates.find((state) => state.id === id)
}

export function legalApplicabilityAxis(id: string) {
  return legalIntelligence.applicabilityAxes.find((axis) => axis.id === id)
}
