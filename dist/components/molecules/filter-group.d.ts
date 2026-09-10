import * as React from "react";
export interface FilterGroupProps extends React.ComponentProps<"fieldset"> {
    legend?: React.ReactNode;
}
declare function FilterGroup({ className, legend, children, ...props }: FilterGroupProps): React.JSX.Element;
export { FilterGroup };
