import * as React from "react";
import { Progress } from "../ui/progress";
export interface ProgressIndicatorProps extends React.ComponentProps<typeof Progress> {
    label?: React.ReactNode;
    showValue?: boolean;
}
declare function ProgressIndicator({ className, label, value, showValue, ...props }: ProgressIndicatorProps): React.JSX.Element;
export { ProgressIndicator };
