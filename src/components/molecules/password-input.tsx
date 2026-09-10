"use client"

import * as React from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export interface PasswordInputProps
  extends Omit<React.ComponentProps<typeof Input>, "type"> {
  showLabel?: string
  hideLabel?: string
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, showLabel = "Show password", hideLabel = "Hide password", ...props }, ref) => {
    const [visible, setVisible] = React.useState(false)

    return (
      <div className="relative w-full" data-slot="password-input">
        <Input ref={ref} type={visible ? "text" : "password"} className={className} {...props} />
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="absolute right-1 top-1/2 -translate-y-1/2"
          aria-label={visible ? hideLabel : showLabel}
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
        >
          <span aria-hidden="true">{visible ? "Hide" : "Show"}</span>
        </Button>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
