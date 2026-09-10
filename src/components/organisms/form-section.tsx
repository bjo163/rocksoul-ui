import * as React from "react"
import { FieldGroup, FieldLegend, FieldSet } from "../ui/field"
import { cn } from "../../lib/cn"

export type FormSectionProps = React.ComponentProps<typeof FieldSet> & {
  title?: React.ReactNode
  description?: React.ReactNode
  legendVariant?: "legend" | "label"
}

/** Groups related fields while preserving native fieldset semantics. */
function FormSection({
  title,
  description,
  legendVariant = "legend",
  className,
  children,
  ...props
}: FormSectionProps) {
  return (
    <FieldSet data-slot="form-section" className={cn("gap-4", className)} {...props}>
      {title ? <FieldLegend variant={legendVariant}>{title}</FieldLegend> : null}
      {description ? <p className="-mt-2 text-sm text-muted-foreground">{description}</p> : null}
      <FieldGroup>{children}</FieldGroup>
    </FieldSet>
  )
}

export { FormSection }
