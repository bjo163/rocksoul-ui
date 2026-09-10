import * as React from "react";
export type DataTableColumn<T> = {
    id: string;
    header: React.ReactNode;
    accessor?: (row: T) => React.ReactNode;
    sortValue?: (row: T) => string | number | null | undefined;
    className?: string;
    sortable?: boolean;
};
export type DataTableProps<T> = {
    data: T[];
    columns: DataTableColumn<T>[];
    getRowId?: (row: T, index: number) => string;
    selectable?: boolean;
    selectedRowIds?: string[];
    onSelectedRowIdsChange?: (rowIds: string[]) => void;
    emptyState?: React.ReactNode;
    caption?: string;
    className?: string;
};
declare function DataTable<T>({ data, columns, getRowId, selectable, selectedRowIds, onSelectedRowIdsChange, emptyState, caption, className, }: DataTableProps<T>): React.JSX.Element;
export { DataTable };
