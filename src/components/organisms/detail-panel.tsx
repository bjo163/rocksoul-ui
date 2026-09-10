import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { cn } from "../../lib/cn"

export type DetailPanelProps = React.ComponentProps<typeof Card> & {
  title?: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  onClose?: () => void
  closeLabel?: string
}

/** A generic detail surface. Data loading and selection stay with the consumer. */
function DetailPanel({
  title,
  description,
  actions,
  onClose,
  closeLabel = "Close",
  className,
  children,
  ...props
}: DetailPanelProps) {
  return (
    <Card data-slot="detail-panel" className={cn("min-w-0", className)} {...props}>
      {(title || description || actions || onClose) && (
        <CardHeader>
          <div className="min-w-0">
            {title ? <CardTitle className="truncate">{title}</CardTitle> : null}
            {description ? <CardDescription>{description}</CardDescription> : null}
          </div>
          {(actions || onClose) && (
            <div className="flex items-center gap-2">
              {actions}
              {onClose ? <Button type="button" variant="ghost" size="sm" onClick={onClose}>{closeLabel}</Button> : null}
            </div>
          )}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export { DetailPanel }
