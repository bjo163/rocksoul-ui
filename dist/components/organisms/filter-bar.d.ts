import * as React from "react";
export type FilterBarItem = {
    id: string;
    label: string;
    control: React.ReactNode;
    active?: boolean;
};
export type FilterBarProps = {
    filters: FilterBarItem[];
    onReset?: () => void;
    resetLabel?: string;
    actions?: React.ReactNode;
    label?: string;
    className?: string;
};
/** A layout-only filter toolbar. State and data fetching remain with the consumer. */
declare function FilterBar({ filters, onReset, resetLabel, actions, label, className, }: FilterBarProps): React.JSX.Element;
export { FilterBar };
