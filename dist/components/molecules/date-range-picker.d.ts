import * as React from "react";
import type { DateRange } from "react-day-picker";
export interface DateRangePickerProps {
    value?: DateRange;
    defaultValue?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    numberOfMonths?: number;
}
declare function DateRangePicker({ value, defaultValue, onChange, placeholder, disabled, className, numberOfMonths }: DateRangePickerProps): React.JSX.Element;
export { DateRangePicker };
