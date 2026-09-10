export type PerspectiveVisualRecord = {
    id: string;
    label: string;
    actorType: string;
    position: string;
    framing?: string;
    geography?: string;
    salience?: number;
};
export type PerspectiveGeographyPoint = {
    id: string;
    label: string;
    count: number;
    x?: number;
    y?: number;
};
export type ActorFramingCell = {
    actor: string;
    framing: string;
    value: number;
};
export type PerspectiveSignalPoint = {
    id: string;
    label: string;
    type: string;
    confidence: number;
    timestamp?: string;
    detail?: string;
};
export type PerspectiveReactionPoint = {
    type: string;
    count: number;
};
export type PerspectiveSnapshotPoint = {
    id: string;
    timestamp: string;
    divergence: number;
    uncertainty: number;
    perspectives: number;
};
export type PerspectiveChangePoint = {
    id: string;
    type: string;
    dimension?: string;
    confidence?: number;
    timestamp?: string;
    rationale?: string;
};
export type PerspectiveCoverage = {
    source: number;
    actor: number;
    geography: number;
    language: number;
    framing: number;
    position: number;
};
export type PerspectiveProvenanceStage = {
    id: string;
    label: string;
    count?: number;
    state?: "complete" | "active" | "pending";
    href?: string;
};
export declare const PERSPECTIVE_VISUAL_GUARDRAILS: readonly ["visual separation is not truth distance", "geographic coverage is not population weight", "divergence is not a truth score", "signal movement is not underlying event truth", "reaction type is not event status", "coverage quality is not evidence strength"];
export declare function clampPerspectiveMetric(value: number): number;
