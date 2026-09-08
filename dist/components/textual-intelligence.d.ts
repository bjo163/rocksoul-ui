import type { ReactNode } from "react";
export type TextualTraceState = "available" | "partial" | "missing" | "restricted" | "candidate" | "unresolved";
export interface TextualHierarchyItem {
    id: string;
    kind: string;
    label?: string;
    detail?: string;
    state?: TextualTraceState;
    metadata?: Array<{
        label: string;
        value: string;
    }>;
}
export interface TextualHierarchyTraceProps {
    items: TextualHierarchyItem[];
    title?: string;
    description?: string;
    className?: string;
    empty?: ReactNode;
}
export declare function TextualHierarchyTrace({ items, title, description, className, empty, }: TextualHierarchyTraceProps): import("react").JSX.Element;
export interface ParallelTextLane {
    id: string;
    language: string;
    script?: string;
    representation: string;
    text?: string | null;
    artifact?: string;
    provenance?: string;
    state?: TextualTraceState;
    direction?: "ltr" | "rtl" | "auto";
    label?: string;
}
export interface ParallelTextLanesProps {
    lanes: ParallelTextLane[];
    title?: string;
    description?: string;
    className?: string;
}
export declare function ParallelTextLanes({ lanes, title, description, className, }: ParallelTextLanesProps): import("react").JSX.Element;
export interface SourceRightsRecord {
    id: string;
    label?: string;
    revision?: string;
    sha256?: string;
    rights?: string;
    license?: string;
    availability?: string;
    sourceReference?: string;
    state?: TextualTraceState;
}
export interface SourceRightsSummaryProps {
    records: SourceRightsRecord[];
    title?: string;
    description?: string;
    className?: string;
}
export declare function SourceRightsSummary({ records, title, description, className, }: SourceRightsSummaryProps): import("react").JSX.Element;
export interface TextualRelationRecord {
    id: string;
    subject: string;
    relation: string;
    object: string;
    method?: string;
    evidence?: string[];
    provenance?: string;
    state?: TextualTraceState;
}
export interface TextualRelationTraceProps {
    relations: TextualRelationRecord[];
    title?: string;
    description?: string;
    className?: string;
}
export declare function TextualRelationTrace({ relations, title, description, className, }: TextualRelationTraceProps): import("react").JSX.Element;
