import * as React from "react"
import { cn } from "../../lib/cn"

export interface FormActionsProps extends React.ComponentProps<"div"> {
  align?: "start" | "center" | "end" | "between"
}

const alignClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const

function FormActions({ className, align = "end", ...props }: FormActionsProps) {
  return (
    <div
      data-slot="form-actions"
      className={cn("flex flex-wrap items-center gap-2", alignClasses[align], className)}
      {...props}
    />
  )
}

export { FormActions }
