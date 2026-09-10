import { type LegalApplicabilityAxisId } from "../contracts/legal-intelligence";
export type LegalApplicabilityAssessmentState = "supported" | "not-supported" | "disputed" | "unresolved";
export interface LegalApplicabilityAssessment {
    axisId: LegalApplicabilityAxisId;
    state: LegalApplicabilityAssessmentState;
    basis?: string;
    sourceRefs?: string[];
}
export interface LegalApplicabilityMatrixProps {
    assessments?: LegalApplicabilityAssessment[];
    className?: string;
    title?: string;
    description?: string;
    showVocabulary?: boolean;
    showPipeline?: boolean;
}
export declare function LegalApplicabilityMatrix({ assessments, className, title, description, showVocabulary, showPipeline, }: LegalApplicabilityMatrixProps): import("react").JSX.Element;
