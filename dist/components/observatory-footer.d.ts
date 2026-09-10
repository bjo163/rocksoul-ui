import type { ReactNode } from "react";
import { type WebStatsProps } from "./web-stats";
export interface ObservatoryFooterProps {
    domain?: string;
    apiHost?: string;
    showStats?: boolean;
    statsVariant?: "detailed" | "compact";
    statsProps?: Partial<WebStatsProps>;
    customStats?: ReactNode;
    tagline?: string;
    legalNote?: string;
    className?: string;
}
export declare function ObservatoryFooter({ domain, apiHost, showStats, statsVariant, statsProps, customStats, tagline, legalNote, className, }: ObservatoryFooterProps): import("react").JSX.Element;
