import * as React from "react";
import { type FormActionsProps } from "../molecules/form-actions";
export type FormFooterProps = FormActionsProps & {
    bordered?: boolean;
};
/** Consistent form action area; submit state and action behavior remain consumer-owned. */
declare function FormFooter({ bordered, className, ...props }: FormFooterProps): React.JSX.Element;
export { FormFooter };
