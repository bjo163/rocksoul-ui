export type EventTopologyNodeKind = "event" | "claim" | "evidence" | "source" | "place" | "artifact" | "uncertainty" | "alternative" | "person" | "story" | "text" | "law" | "perspective" | "relationship";
export interface EventTopologyNode {
    id: string;
    kind: EventTopologyNodeKind;
    label: string;
    detail?: string;
    status?: string;
    confidence?: number;
    external?: boolean;
}
export interface EventTopologyEdge {
    id: string;
    from: string;
    to: string;
    label: string;
    status?: string;
    confidence?: number;
}
export interface EventTopologyGraphProps {
    nodes: EventTopologyNode[];
    edges: EventTopologyEdge[];
    className?: string;
    title?: string;
    description?: string;
}
export declare function EventTopologyGraph({ nodes, edges, className, title, description, }: EventTopologyGraphProps): import("react").JSX.Element;
export interface HistoricityBandProps {
    confidence: number;
    scope: string;
    uncertainty: string[];
    alternatives: string[];
    status?: string;
    className?: string;
}
export declare function HistoricityBand({ confidence, scope, uncertainty, alternatives, status, className, }: HistoricityBandProps): import("react").JSX.Element;
