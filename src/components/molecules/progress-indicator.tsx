import * as React from "react"
import { cn } from "../../lib/cn"
import { Progress } from "../ui/progress"

export interface ProgressIndicatorProps extends React.ComponentProps<typeof Progress> {
  label?: React.ReactNode
  showValue?: boolean
}

function ProgressIndicator({ className, label, value = 0, showValue = false, ...props }: ProgressIndicatorProps) {
  return <div data-slot="progress-indicator" className="space-y-2">
    {label || showValue ? <div className="flex justify-between gap-3 text-sm"><span>{label}</span>{showValue ? <span>{Math.round(value ?? 0)}%</span> : null}</div> : null}
    <Progress value={value} className={cn(className)} {...props} />
  </div>
}

export { ProgressIndicator }
