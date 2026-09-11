export type EvidenceMatrixStance = "support" | "counter" | "context" | "alternative";
export interface EvidenceMatrixRow {
    id: string;
    label: string;
    context?: string;
    epistemic?: string;
    sourceCount?: number;
    values: Partial<Record<EvidenceMatrixStance, number>>;
}
export interface EvidenceMatrixProps {
    rows: EvidenceMatrixRow[];
    className?: string;
    caption?: string;
    onActivateRow?: (row: EvidenceMatrixRow) => void;
}
export declare function EvidenceMatrix({ rows, className, caption, onActivateRow }: EvidenceMatrixProps): import("react").JSX.Element;
