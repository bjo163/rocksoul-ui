import { type ReactNode } from "react";
import type { RecordDomain } from "./four-record-summary";
import type { SemanticBadgeVariant } from "../contracts/status-semantics";
import { type CommunitySubmitPayload } from "../contracts/interactions";
export interface MWHeaderNavItem {
    label: string;
    href: string;
}
export declare function MWHeader({ caseId, surface, variant, homeHref, brandLabel, navItems, searchHref, liveLabel, }: {
    caseId?: string;
    surface?: "web" | "community";
    variant?: "auto" | "transparent" | "solid" | "compact-mobile";
    homeHref?: string;
    brandLabel?: string;
    navItems?: MWHeaderNavItem[];
    searchHref?: string;
    liveLabel?: string;
}): import("react").JSX.Element;
export interface EvidenceCardProps {
    domain: RecordDomain | "AWS";
    recordId: string;
    repo: string;
    claim: string;
    provenance: string;
    verification: string;
    status: SemanticBadgeVariant;
    canonical: boolean;
    selected?: boolean;
    flagged?: boolean;
}
export declare function EvidenceCard({ domain, recordId, repo, claim, provenance, verification, status, canonical, selected, flagged, sourceHref, }: EvidenceCardProps & {
    sourceHref?: string;
}): import("react").JSX.Element;
export declare function RepositoryCard({ repo, domain, status, records, schema, lastSync, variant, }: {
    repo: string;
    domain: string;
    status: "healthy" | "degraded" | "offline" | "syncing";
    records: number;
    schema: string;
    lastSync: string;
    variant?: "public" | "platform";
}): import("react").JSX.Element;
export declare function SourceBlock({ id, variant, sourceId, title, excerpt, citation, provenance, verification, }: {
    id?: string;
    variant?: "quote" | "record" | "legal-instrument";
    sourceId: string;
    title: string;
    excerpt: string;
    citation: string;
    provenance: string;
    verification: string;
}): import("react").JSX.Element;
export declare function Citation({ code, source, locator, variant, }: {
    code: string;
    source: string;
    locator: string;
    variant?: "inline" | "block" | "legal";
}): import("react").JSX.Element;
export declare function TimelineEntry({ timestamp, title, description, source, status, flagged, variant, }: {
    timestamp: string;
    title: string;
    description: string;
    source: string;
    status: string;
    flagged?: boolean;
    variant?: "event" | "source" | "decision" | "community";
}): import("react").JSX.Element;
export declare function DiscussionItem({ kind, author, role, body, timestamp, state, replies, actions, }: {
    kind: "comment" | "question" | "community-note" | "moderator-note";
    author: string;
    role: string;
    body: string;
    timestamp: string;
    state?: "default" | "edited" | "reported" | "hidden";
    replies?: number;
    actions?: ReactNode;
}): import("react").JSX.Element;
export declare function SubmissionCard({ id, state, title, body, canonicalEvidence, submitter, source, reviewer, reviewActions, }: {
    id: string;
    state: "unverified" | "in-review" | "verified" | "rejected" | "needs-context";
    title: string;
    body: string;
    canonicalEvidence?: boolean;
    submitter?: string;
    source?: string;
    reviewer?: string;
    reviewActions?: ReactNode;
}): import("react").JSX.Element;
export declare function NotificationItem({ title, body, unread, variant, }: {
    title: string;
    body: string;
    unread?: boolean;
    variant?: "case-update" | "reply" | "review" | "system";
}): import("react").JSX.Element;
export declare function RepositoryHealthRow({ repo, status, commit, schema, records, queue, errors, lastSync, action, }: {
    repo: string;
    status: "online" | "degraded" | "offline" | "syncing";
    commit?: string;
    schema?: string;
    records?: string | number;
    queue?: number;
    errors?: number;
    lastSync?: string;
    action?: ReactNode;
}): import("react").JSX.Element;
export declare function AuditEventRow({ timestamp, actor, action, resource, result, traceId, }: {
    timestamp: string;
    actor: string;
    action: string;
    resource: string;
    result: string;
    traceId: string;
}): import("react").JSX.Element;
export declare function MetricTile({ label, value, context, delta, tone, }: {
    label: string;
    value: string;
    context: string;
    delta?: string;
    tone?: "neutral" | "good" | "warning" | "critical";
}): import("react").JSX.Element;
export declare function PlatformSidebar({ active, collapsed, }: {
    active?: string;
    collapsed?: boolean;
}): import("react").JSX.Element;
export declare function SearchFilters({ resultCount, chips, }: {
    resultCount?: number;
    chips?: string[];
}): import("react").JSX.Element;
export declare function StatePanel({ state, traceId, lastKnownState, requiredPermission, currentRole, onRetry, onRequestAccess, onClearFilters, }: {
    state: "empty" | "loading" | "error" | "offline" | "forbidden";
    traceId?: string;
    lastKnownState?: string;
    requiredPermission?: string;
    currentRole?: string;
    onRetry?: () => void | Promise<void>;
    onRequestAccess?: () => void | Promise<void>;
    onClearFilters?: () => void | Promise<void>;
}): import("react").JSX.Element;
export declare function CommunityComposer({ mode, onSubmit, }: {
    mode?: "context" | "question";
    onSubmit?: (payload: CommunitySubmitPayload) => void | Promise<void>;
}): import("react").JSX.Element;
export declare function CaseCard({ caseId, title, summary, status, traceCount, updatedAt, variant, selected, }: {
    caseId: string;
    title: string;
    summary: string;
    status: "supported" | "partial" | "unresolved" | "disputed";
    traceCount: number;
    updatedAt: string;
    variant?: "default" | "compact" | "featured";
    selected?: boolean;
}): import("react").JSX.Element;
export declare function GraphEdge({ type, label, highlighted, dimmed, }: {
    type: "supports" | "contradicts" | "references" | "temporal" | "identity" | "legal";
    label?: string;
    highlighted?: boolean;
    dimmed?: boolean;
}): import("react").JSX.Element;
export declare function AWSBoundary({ children, active, legalState, }: {
    children?: ReactNode;
    active?: boolean;
    legalState?: string;
}): import("react").JSX.Element;
export declare function CaseTimeline({ entries, filter, }: {
    entries: Array<{
        timestamp: string;
        title: string;
        description: string;
        source: string;
        status: string;
        flagged?: boolean;
        variant?: "event" | "source" | "decision" | "community";
    }>;
    filter?: "all" | "event" | "source" | "decision" | "community";
}): import("react").JSX.Element;
