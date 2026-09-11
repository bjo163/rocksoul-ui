import { type ReactNode } from "react";
import { type AuthSubmitPayload } from "../../contracts/interactions";
/** Product patterns compose canonical primitives for existing product screens. */
import { type CorrelationScoreProps } from "../correlation-score";
import type { RecordSummary } from "../four-record-summary";
import { type LegalStatusProps } from "../legal-status";
export declare function Pagination({ page, pages, onPageChange, }: {
    page?: number;
    pages?: number;
    onPageChange?: (page: number) => void | Promise<void>;
}): import("react").JSX.Element;
export declare function EvidenceGridPattern({ records, }: {
    records: RecordSummary[];
}): import("react").JSX.Element;
export declare function CorrelationGraphPattern({ records, correlation, }: {
    records: RecordSummary[];
    correlation: CorrelationScoreProps;
}): import("react").JSX.Element;
export declare function AWSLegalSummaryPattern({ legal, sources, }: {
    legal: LegalStatusProps;
    sources: Array<{
        id: string;
        title: string;
        excerpt: string;
        locator: string;
    }>;
}): import("react").JSX.Element;
export declare function RelatedCases({ cases, }: {
    cases: Array<{
        caseId: string;
        title: string;
        summary: string;
        status: "supported" | "partial" | "unresolved" | "disputed";
        traceCount: number;
        updatedAt: string;
    }>;
}): import("react").JSX.Element;
export declare function PublicCasePattern({ header, evidence, correlation, legal, related, summary, }: {
    header: ReactNode;
    evidence: ReactNode;
    correlation: ReactNode;
    legal: ReactNode;
    related: ReactNode;
    summary: ReactNode;
}): import("react").JSX.Element;
export declare function RepositoryMonitor({ repositories, onSyncAll, onInspect, }: {
    repositories: Array<{
        repo: string;
        status: "online" | "degraded" | "offline" | "syncing";
        queue?: number;
        errors?: number;
    }>;
    onSyncAll?: () => void | Promise<void>;
    onInspect?: (repo: string) => void | Promise<void>;
}): import("react").JSX.Element;
export declare function ModerationQueue({ submission, onSelectAll, onRequestContext, onReject, onBulkRequestContext, onReturnSelected, }: {
    submission: {
        id: string;
        state: "unverified" | "in-review" | "verified" | "rejected" | "needs-context";
        title: string;
        body: string;
    };
    onSelectAll?: () => void | Promise<void>;
    onRequestContext?: (submissionId: string) => void | Promise<void>;
    onReject?: (submissionId: string) => void | Promise<void>;
    onBulkRequestContext?: () => void | Promise<void>;
    onReturnSelected?: () => void | Promise<void>;
}): import("react").JSX.Element;
export declare function CommunityCaseThreadPattern({ question, moderatorNote, submission, }: {
    question: string;
    moderatorNote: string;
    submission: {
        id: string;
        state: "needs-context";
        title: string;
        body: string;
    };
}): import("react").JSX.Element;
export declare function CaseTimelinePattern({ entries, }: {
    entries: Array<{
        timestamp: string;
        title: string;
        description: string;
        source: string;
        status: string;
        flagged?: boolean;
        variant?: "event" | "source" | "decision" | "community";
    }>;
}): import("react").JSX.Element;
export declare function SearchFiltersPattern(): import("react").JSX.Element;
export declare function EmptyLoadingErrorPattern({ children, }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function AuthFormPattern({ onSubmit, onProvider, }?: {
    onSubmit?: (payload: AuthSubmitPayload) => void | Promise<void>;
    onProvider?: () => void | Promise<void>;
}): import("react").JSX.Element;
