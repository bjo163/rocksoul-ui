import type { ReactNode } from "react";
import { type BadgeProps } from "./badge";
export interface DossierHeaderProps {
    eyebrow: string;
    title: string;
    summary?: string;
    recordId?: string;
    status?: {
        label: string;
        variant?: BadgeProps["variant"];
    };
    metadata?: Array<{
        label: string;
        value: string;
    }>;
    actions?: ReactNode;
    variant?: "compact" | "cinematic";
    className?: string;
    assetFile?: string;
}
export declare function DossierHeader({ eyebrow, title, summary, recordId, status, metadata, actions, variant, className, assetFile, }: DossierHeaderProps): import("react").JSX.Element;
