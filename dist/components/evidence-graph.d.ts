import type { RecordDomain, RecordSummary } from "./four-record-summary";
import type { ResearchDomain } from "../contracts/ecosystem-domains";
export type GraphNodeType = RecordDomain | ResearchDomain | "RELATIONSHIP" | "AWS" | "CASE";
export type GraphNodeState = "default" | "selected" | "dimmed" | "unresolved";
export interface EvidenceGraphProps {
    records: RecordSummary[];
    score: number;
}
export declare function EvidenceGraph({ records, score }: EvidenceGraphProps): import("react").JSX.Element;
export declare function GraphNode({ type, label, status, relationCount, state, className, onSelect, }: {
    type: GraphNodeType;
    label: string;
    status: string;
    relationCount?: number;
    state?: GraphNodeState;
    className?: string;
    onSelect?: () => void;
}): import("react").JSX.Element;
