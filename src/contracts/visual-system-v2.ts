import compatibilityProjection from "./visual-system-v2.compatibility.json"
import { ROCKSOUL_ASSETS_SYNC } from "./assets-v2"

export const visualSystemV2CompatibilityProjection = compatibilityProjection

export const visualSystemV2RuntimeIdentity = {
  schemaVersion: compatibilityProjection.schemaVersion,
  visualSystemVersion: compatibilityProjection.visualSystemVersion,
  specificationStatus: compatibilityProjection.status,
  compatibilityPolicy: compatibilityProjection.compatibilityPolicy,
  authority: compatibilityProjection.authority,
  runtimeDelivery: {
    repository: ROCKSOUL_ASSETS_SYNC.repository,
    ref: ROCKSOUL_ASSETS_SYNC.ref,
    commit: ROCKSOUL_ASSETS_SYNC.commit,
    acceptedMainCommit: ROCKSOUL_ASSETS_SYNC.acceptedMainCommit,
    assetRelease: ROCKSOUL_ASSETS_SYNC.assetRelease,
    manifestSchemaVersion: ROCKSOUL_ASSETS_SYNC.manifestSchemaVersion,
    applicationVersion: ROCKSOUL_ASSETS_SYNC.applicationVersion,
    repositoryAcceptance: ROCKSOUL_ASSETS_SYNC.repositoryAcceptance,
  },
} as const

export const visualSystemV2TypographyRoles = compatibilityProjection.typographyRoles
export const visualSystemV2DensityModes = compatibilityProjection.densityModes
export const visualSystemV2SurfacePersonalities = compatibilityProjection.surfacePersonalities
export const visualSystemV2GraphNodeIds = compatibilityProjection.graphNodeIds
export const visualSystemV2GraphEdgeIds = compatibilityProjection.graphEdgeIds
export const visualSystemV2ChartIds = compatibilityProjection.chartIds
export const visualSystemV2LifecycleStatuses = compatibilityProjection.lifecycleStatuses

export type VisualSystemV2TypographyRole = (typeof visualSystemV2TypographyRoles)[number]
export type VisualSystemV2DensityMode = (typeof visualSystemV2DensityModes)[number]
export type VisualSystemV2SurfacePersonality = (typeof visualSystemV2SurfacePersonalities)[number]
export type VisualSystemV2GraphNodeId = (typeof visualSystemV2GraphNodeIds)[number]
export type VisualSystemV2GraphEdgeId = (typeof visualSystemV2GraphEdgeIds)[number]
export type VisualSystemV2ChartId = (typeof visualSystemV2ChartIds)[number]
export type VisualSystemV2LifecycleStatus = (typeof visualSystemV2LifecycleStatuses)[number]

function includes<const T extends readonly string[]>(values: T, value: string): value is T[number] {
  return values.includes(value as T[number])
}

export function isVisualSystemV2TypographyRole(value: string): value is VisualSystemV2TypographyRole {
  return includes(visualSystemV2TypographyRoles, value)
}

export function isVisualSystemV2DensityMode(value: string): value is VisualSystemV2DensityMode {
  return includes(visualSystemV2DensityModes, value)
}

export function isVisualSystemV2SurfacePersonality(value: string): value is VisualSystemV2SurfacePersonality {
  return includes(visualSystemV2SurfacePersonalities, value)
}

export function isVisualSystemV2GraphNodeId(value: string): value is VisualSystemV2GraphNodeId {
  return includes(visualSystemV2GraphNodeIds, value)
}

export function isVisualSystemV2GraphEdgeId(value: string): value is VisualSystemV2GraphEdgeId {
  return includes(visualSystemV2GraphEdgeIds, value)
}

export function isVisualSystemV2ChartId(value: string): value is VisualSystemV2ChartId {
  return includes(visualSystemV2ChartIds, value)
}

export function isVisualSystemV2LifecycleStatus(value: string): value is VisualSystemV2LifecycleStatus {
  return includes(visualSystemV2LifecycleStatuses, value)
}
