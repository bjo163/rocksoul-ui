import * as React from "react";
export interface FormActionsProps extends React.ComponentProps<"div"> {
    align?: "start" | "center" | "end" | "between";
}
declare function FormActions({ className, align, ...props }: FormActionsProps): React.JSX.Element;
export { FormActions };
