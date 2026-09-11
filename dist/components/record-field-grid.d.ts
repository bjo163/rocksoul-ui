export interface RecordFieldGridProps {
    record: Record<string, unknown>;
    labels?: Record<string, string>;
    exclude?: string[];
    className?: string;
    referenceHref?: (value: string) => string | undefined;
    emptyLabel?: string;
}
export declare function RecordFieldGrid({ record, labels, exclude, className, referenceHref, emptyLabel, }: RecordFieldGridProps): import("react").JSX.Element;
