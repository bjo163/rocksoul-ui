import * as React from "react";
export interface KeyValueProps extends React.ComponentProps<"dl"> {
    label: React.ReactNode;
    value: React.ReactNode;
}
declare function KeyValue({ className, label, value, ...props }: KeyValueProps): React.JSX.Element;
export { KeyValue };
