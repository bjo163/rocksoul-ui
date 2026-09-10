import * as React from "react"
import { Input } from "../ui/input"

export interface DateInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
  min?: string
  max?: string
}

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ className, min, max, ...props }, ref) => (
    <Input ref={ref} type="date" min={min} max={max} className={className} {...props} />
  )
)
DateInput.displayName = "DateInput"

export { DateInput }
