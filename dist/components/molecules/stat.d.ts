import * as React from "react";
export interface StatProps extends React.ComponentProps<"div"> {
    label: React.ReactNode;
    value: React.ReactNode;
    description?: React.ReactNode;
    trend?: React.ReactNode;
}
declare function Stat({ className, label, value, description, trend, ...props }: StatProps): React.JSX.Element;
export { Stat };
