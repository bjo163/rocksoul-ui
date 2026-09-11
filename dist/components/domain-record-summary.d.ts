import type { ResearchDomain } from "../contracts/ecosystem-domains";
export type DomainRecordSummaryItem = {
    domain: ResearchDomain;
    recordId: string;
    title: string;
    status?: string;
    href?: string;
};
export type DomainRecordSummaryProps = {
    records: DomainRecordSummaryItem[];
    className?: string;
};
export declare function DomainRecordSummary({ records, className }: DomainRecordSummaryProps): import("react").JSX.Element;
