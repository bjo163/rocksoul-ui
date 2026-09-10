export type ProvenanceNodeKind = "story" | "claim" | "evidence" | "source" | "text" | "event" | "person" | "law" | "case" | "location";
export interface ProvenanceRailNode {
    id: string;
    kind: ProvenanceNodeKind;
    label: string;
    detail?: string;
    active?: boolean;
    unresolved?: boolean;
    external?: boolean;
}
export interface ProvenanceRailProps {
    nodes: ProvenanceRailNode[];
    orientation?: "horizontal" | "vertical";
    className?: string;
    description?: string;
    onActivate?: (node: ProvenanceRailNode) => void;
}
export declare function ProvenanceRail({ nodes, orientation, className, description, onActivate, }: ProvenanceRailProps): import("react").JSX.Element;
