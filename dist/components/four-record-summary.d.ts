export type RecordDomain = "STORY" | "EVENT" | "PERSON" | "RGBL";
export type RecordStatus = "supported" | "partial" | "unresolved";
export interface RecordSummary {
    domain: RecordDomain;
    recordId: string;
    title: string;
    description: string;
    source: string;
    sourceRepo: string;
    canonicalStatus: "canonical" | "reference";
    verification: string;
    status: RecordStatus;
}
export declare function FourRecordSummary({ records, compact }: {
    records: RecordSummary[];
    compact?: boolean;
}): import("react").JSX.Element;
