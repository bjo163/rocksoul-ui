import * as React from "react"
import { FormActions, type FormActionsProps } from "../molecules/form-actions"
import { Separator } from "../ui/separator"
import { cn } from "../../lib/cn"

export type FormFooterProps = FormActionsProps & {
  bordered?: boolean
}

/** Consistent form action area; submit state and action behavior remain consumer-owned. */
function FormFooter({ bordered = true, className, ...props }: FormFooterProps) {
  return (
    <footer data-slot="form-footer" className={cn(bordered && "border-t pt-4", className)}>
      {bordered ? <Separator className="sr-only" /> : null}
      <FormActions {...props} />
    </footer>
  )
}

export { FormFooter }
