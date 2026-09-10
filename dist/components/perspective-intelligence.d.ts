import type { ActorFramingCell, PerspectiveCoverage, PerspectiveGeographyPoint, PerspectiveProvenanceStage, PerspectiveReactionPoint, PerspectiveSignalPoint, PerspectiveSnapshotPoint, PerspectiveChangePoint, PerspectiveVisualRecord } from "../contracts/perspective-intelligence";
export declare function PerspectiveConstellation({ phenomenon, perspectives, className, }: {
    phenomenon: string;
    perspectives: PerspectiveVisualRecord[];
    className?: string;
}): import("react").JSX.Element;
export declare function PerspectiveGeographyField({ points, className, }: {
    points: PerspectiveGeographyPoint[];
    className?: string;
}): import("react").JSX.Element;
export declare function DivergenceCompass({ divergence, uncertainty, convergence, coverage, className, }: {
    divergence: number;
    uncertainty: number;
    convergence?: number;
    coverage?: number;
    className?: string;
}): import("react").JSX.Element;
export declare function ActorFramingMatrix({ cells, className, }: {
    cells: ActorFramingCell[];
    className?: string;
}): import("react").JSX.Element;
export declare function ZigzagTimeline({ signals, className, }: {
    signals: PerspectiveSignalPoint[];
    className?: string;
}): import("react").JSX.Element;
export declare function TemporalPerspectiveHistory({ snapshots, changes, className, }: {
    snapshots: PerspectiveSnapshotPoint[];
    changes?: PerspectiveChangePoint[];
    className?: string;
}): import("react").JSX.Element;
export declare function ReactionSpectrum({ reactions, className, }: {
    reactions: PerspectiveReactionPoint[];
    className?: string;
}): import("react").JSX.Element;
export declare function CoverageRadar({ coverage, className, }: {
    coverage: PerspectiveCoverage;
    className?: string;
}): import("react").JSX.Element;
export declare function ProvenanceFlow({ stages, className, }: {
    stages: PerspectiveProvenanceStage[];
    className?: string;
}): import("react").JSX.Element;
export declare function PerspectiveIntelligenceBoard({ phenomenon, perspectives, geography, divergence, convergence, uncertainty, coverage, framingCells, signals, reactions, snapshots, changes, provenance, className, }: {
    phenomenon: string;
    perspectives: PerspectiveVisualRecord[];
    geography: PerspectiveGeographyPoint[];
    divergence: number;
    convergence?: number;
    uncertainty: number;
    coverage: PerspectiveCoverage;
    framingCells: ActorFramingCell[];
    signals: PerspectiveSignalPoint[];
    reactions: PerspectiveReactionPoint[];
    snapshots?: PerspectiveSnapshotPoint[];
    changes?: PerspectiveChangePoint[];
    provenance: PerspectiveProvenanceStage[];
    className?: string;
}): import("react").JSX.Element;
