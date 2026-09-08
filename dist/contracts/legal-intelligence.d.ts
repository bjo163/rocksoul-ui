import legalIntelligence from "../generated/legal-intelligence.json";
export declare const legalIntelligenceContract: {
    schemaVersion: number;
    domain: string;
    repository: string;
    principle: string;
    legalResultStates: {
        id: string;
        label: string;
        meaning: string;
    }[];
    applicabilityAxes: {
        id: string;
        label: string;
        question: string;
    }[];
    reviewPipeline: {
        id: string;
        label: string;
        description: string;
    }[];
    guardrails: string[];
};
export type LegalResultState = (typeof legalIntelligence.legalResultStates)[number]["id"];
export type LegalApplicabilityAxisId = (typeof legalIntelligence.applicabilityAxes)[number]["id"];
export type LegalReviewStageId = (typeof legalIntelligence.reviewPipeline)[number]["id"];
export declare const legalResultVocabulary: {
    id: string;
    label: string;
    meaning: string;
}[];
export declare const legalApplicabilityAxes: {
    id: string;
    label: string;
    question: string;
}[];
export declare const legalReviewPipeline: {
    id: string;
    label: string;
    description: string;
}[];
export declare const legalVisualGuardrails: string[];
export declare function legalResultDefinition(id: string): {
    id: string;
    label: string;
    meaning: string;
} | undefined;
export declare function legalApplicabilityAxis(id: string): {
    id: string;
    label: string;
    question: string;
} | undefined;
