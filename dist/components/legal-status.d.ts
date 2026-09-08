export type LegalState = "permitted" | "restricted" | "prohibited" | "disputed" | "unresolved";
export interface LegalStatusProps {
    status: LegalState;
    jurisdiction: string;
    review: string;
    prompt: string;
    basis?: string;
}
export declare function LegalStatus({ status, jurisdiction, review, prompt, basis }: LegalStatusProps): import("react").JSX.Element;
