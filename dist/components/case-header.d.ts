import type { ReactNode } from "react";
export interface CaseHeaderProps {
    caseId: string;
    eyebrow: string;
    title: string;
    summary: string;
    status: "supported" | "partial" | "unresolved" | "disputed";
    variant?: "public" | "community" | "platform";
    metadata?: Array<{
        label: string;
        value: string;
    }>;
    actions?: ReactNode;
}
export declare function CaseHeader({ caseId, eyebrow, title, summary, status, variant, metadata, actions, }: CaseHeaderProps): import("react").JSX.Element;
