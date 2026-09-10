"use client"

import * as React from "react"
import { Button } from "../ui/button"
import { CheckIcon } from "../ui/icons"

export interface CopyButtonProps extends React.ComponentProps<typeof Button> {
  value: string
  copiedLabel?: string
  copyLabel?: string
  onCopied?: () => void
}

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ value, copiedLabel = "Copied", copyLabel = "Copy", onCopied, children, onClick, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)
    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
    React.useEffect(() => {
      return () => {
        if (timer.current) clearTimeout(timer.current)
      }
    }, [])
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      if (event.defaultPrevented) return
      await navigator.clipboard?.writeText(value)
      setCopied(true)
      onCopied?.()
      timer.current = setTimeout(() => setCopied(false), 2000)
    }
    return (
      <Button ref={ref} type="button" aria-label={copied ? copiedLabel : copyLabel} {...props} onClick={handleClick}>
        {copied ? <CheckIcon aria-hidden="true" /> : null}
        {children ?? (copied ? copiedLabel : copyLabel)}
      </Button>
    )
  }
)
CopyButton.displayName = "CopyButton"

export { CopyButton }
