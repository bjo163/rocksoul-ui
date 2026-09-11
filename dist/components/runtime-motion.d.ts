import { type HTMLAttributes } from "react";
export declare const moonWitnessRuntimeMotionIds: readonly ["pulse-alert", "evidence-linked", "case-resolved", "ai-orbit", "loading-trace", "notification-in", "drawer-open", "sync-spin", "focus-ring", "upload-rise", "graph-connect", "backend-reconnect"];
export type MoonWitnessRuntimeMotionId = typeof moonWitnessRuntimeMotionIds[number];
export type MoonWitnessRuntimeMotionFormat = "svg" | "apng" | "webm" | "lottie";
export declare function resolveMoonWitnessRuntimeMotion(id: MoonWitnessRuntimeMotionId, format: MoonWitnessRuntimeMotionFormat, baseUrl?: string): string;
export declare function usePrefersReducedMotion(): boolean;
export declare function MoonWitnessRuntimeMotion({ id, format, alt, baseUrl, className, reducedMotionFallback, ...props }: Omit<HTMLAttributes<HTMLElement>, "children"> & {
    id: MoonWitnessRuntimeMotionId;
    format?: Exclude<MoonWitnessRuntimeMotionFormat, "lottie">;
    alt: string;
    baseUrl?: string;
    reducedMotionFallback?: React.ReactNode;
}): import("react").JSX.Element;
