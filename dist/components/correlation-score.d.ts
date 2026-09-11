export interface CorrelationDimension {
    label: string;
    value: number;
    tone?: "default" | "warning";
}
export interface CorrelationScoreProps {
    score: number;
    confidence: string;
    explanation: string;
    dimensions: CorrelationDimension[];
    methodHref?: string;
    variant?: "summary" | "detailed";
}
export declare function CorrelationScore({ score, confidence, explanation, dimensions, methodHref, variant, }: CorrelationScoreProps): import("react").JSX.Element;
