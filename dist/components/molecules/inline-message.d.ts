import * as React from "react";
import { Alert } from "../ui/alert";
export interface InlineMessageProps extends Omit<React.ComponentProps<typeof Alert>, "title"> {
    title?: React.ReactNode;
    children?: React.ReactNode;
}
declare function InlineMessage({ title, children, ...props }: InlineMessageProps): React.JSX.Element;
export { InlineMessage };
