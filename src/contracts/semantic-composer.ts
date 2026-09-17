import {
  isVisualSystemV2ChartId,
  isVisualSystemV2DensityMode,
  isVisualSystemV2GraphEdgeId,
  isVisualSystemV2GraphNodeId,
  isVisualSystemV2LifecycleStatus,
  isVisualSystemV2SurfacePersonality,
  isVisualSystemV2TypographyRole,
  type VisualSystemV2ChartId,
  type VisualSystemV2DensityMode,
  type VisualSystemV2GraphEdgeId,
  type VisualSystemV2GraphNodeId,
  type VisualSystemV2LifecycleStatus,
  type VisualSystemV2SurfacePersonality,
  type VisualSystemV2TypographyRole,
} from "./visual-system-v2"

export type VisualSemanticState = Readonly<{
  chart?: VisualSystemV2ChartId
  density?: VisualSystemV2DensityMode
  graphEdge?: VisualSystemV2GraphEdgeId
  graphNode?: VisualSystemV2GraphNodeId
  lifecycle?: VisualSystemV2LifecycleStatus
  surface?: VisualSystemV2SurfacePersonality
  typography?: VisualSystemV2TypographyRole
}>

export type SemanticSurface = "table" | "graph" | "map" | "timeline" | "inspector" | "document" | "console" | "mobile"

export type SemanticComposition = Readonly<{
  primaryRole: string | null
  secondaryMarks: readonly string[]
  tertiaryMetadata: readonly string[]
  inspectorDetails: readonly string[]
  interactionOverlay: "orthogonal" | null
  accessibilityDescription: string
  surface: SemanticSurface
  density: VisualSystemV2DensityMode
}>

const surfaceDensity: Readonly<Record<SemanticSurface, VisualSystemV2DensityMode>> = {
  table: "compact",
  graph: "compact",
  map: "compact",
  timeline: "comfortable",
  inspector: "comfortable",
  document: "editorial",
  console: "compact",
  mobile: "compact",
}

const lifecyclePriority: Readonly<Record<VisualSystemV2LifecycleStatus, number>> = {
  canonical: 100,
  active: 90,
  "frozen-reference": 80,
  experimental: 70,
  legacy: 60,
  deprecated: 50,
}

function sortLifecycle(a: VisualSystemV2LifecycleStatus, b: VisualSystemV2LifecycleStatus): number {
  return lifecyclePriority[b] - lifecyclePriority[a]
}

const visualSemanticStateKeys = new Set(["chart", "density", "graphEdge", "graphNode", "lifecycle", "surface", "typography"])

export function parseVisualSemanticState(input: Readonly<Record<string, string | undefined>>): VisualSemanticState {
  for (const key of Object.keys(input)) {
    if (!visualSemanticStateKeys.has(key)) throw new Error(`Unsupported V2 semantic dimension: ${key}`)
  }

  const output: {
    chart?: VisualSystemV2ChartId
    density?: VisualSystemV2DensityMode
    graphEdge?: VisualSystemV2GraphEdgeId
    graphNode?: VisualSystemV2GraphNodeId
    lifecycle?: VisualSystemV2LifecycleStatus
    surface?: VisualSystemV2SurfacePersonality
    typography?: VisualSystemV2TypographyRole
  } = {}

  if (input.chart !== undefined) {
    if (!isVisualSystemV2ChartId(input.chart)) throw new Error(`Unsupported V2 chart id: ${input.chart}`)
    output.chart = input.chart
  }
  if (input.density !== undefined) {
    if (!isVisualSystemV2DensityMode(input.density)) throw new Error(`Unsupported V2 density mode: ${input.density}`)
    output.density = input.density
  }
  if (input.graphEdge !== undefined) {
    if (!isVisualSystemV2GraphEdgeId(input.graphEdge)) throw new Error(`Unsupported V2 graph edge id: ${input.graphEdge}`)
    output.graphEdge = input.graphEdge
  }
  if (input.graphNode !== undefined) {
    if (!isVisualSystemV2GraphNodeId(input.graphNode)) throw new Error(`Unsupported V2 graph node id: ${input.graphNode}`)
    output.graphNode = input.graphNode
  }
  if (input.lifecycle !== undefined) {
    if (!isVisualSystemV2LifecycleStatus(input.lifecycle)) throw new Error(`Unsupported V2 lifecycle status: ${input.lifecycle}`)
    output.lifecycle = input.lifecycle
  }
  if (input.surface !== undefined) {
    if (!isVisualSystemV2SurfacePersonality(input.surface)) throw new Error(`Unsupported V2 surface personality: ${input.surface}`)
    output.surface = input.surface
  }
  if (input.typography !== undefined) {
    if (!isVisualSystemV2TypographyRole(input.typography)) throw new Error(`Unsupported V2 typography role: ${input.typography}`)
    output.typography = input.typography
  }

  return output
}

export function composeVisualSemanticState(
  semanticState: VisualSemanticState,
  surface: SemanticSurface,
): SemanticComposition {
  const density = semanticState.density ?? surfaceDensity[surface]
  const lifecycleEntries = semanticState.lifecycle ? [semanticState.lifecycle] : []
  lifecycleEntries.sort(sortLifecycle)

  const primaryRole =
    lifecycleEntries[0] ??
    semanticState.graphNode ??
    semanticState.graphEdge ??
    semanticState.chart ??
    semanticState.typography ??
    null

  const secondaryMarks = [
    semanticState.graphNode,
    semanticState.graphEdge,
    semanticState.chart,
    semanticState.typography,
  ].filter((value): value is string => value !== undefined && value !== primaryRole)

  const tertiaryMetadata = [
    semanticState.surface,
    semanticState.density,
    semanticState.lifecycle,
  ].filter((value): value is string => value !== undefined && value !== primaryRole)

  const inspectorDetails = [
    semanticState.graphNode,
    semanticState.graphEdge,
    semanticState.chart,
    semanticState.lifecycle,
    semanticState.surface,
  ].filter((value): value is string => value !== undefined)

  const accessibilityParts = [...new Set([
    primaryRole,
    ...secondaryMarks,
    ...tertiaryMetadata,
  ].filter((value): value is string => value !== null))]

  return {
    primaryRole,
    secondaryMarks,
    tertiaryMetadata,
    inspectorDetails,
    interactionOverlay: semanticState.surface === "operator" || surface === "console" ? "orthogonal" : null,
    accessibilityDescription:
      accessibilityParts.length > 0
        ? `Semantic entity: ${accessibilityParts.join(", ")}.`
        : `Semantic entity on ${surface} surface.`,
    surface,
    density,
  }
}
