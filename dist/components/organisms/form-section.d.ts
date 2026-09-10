import * as React from "react";
import { FieldSet } from "../ui/field";
export type FormSectionProps = React.ComponentProps<typeof FieldSet> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    legendVariant?: "legend" | "label";
};
/** Groups related fields while preserving native fieldset semantics. */
declare function FormSection({ title, description, legendVariant, className, children, ...props }: FormSectionProps): React.JSX.Element;
export { FormSection };
