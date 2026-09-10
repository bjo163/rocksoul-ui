import * as React from "react"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"

export interface InlineMessageProps extends Omit<React.ComponentProps<typeof Alert>, "title"> {
  title?: React.ReactNode
  children?: React.ReactNode
}

function InlineMessage({ title, children, ...props }: InlineMessageProps) {
  return <Alert data-slot="inline-message" {...props}>
    {title ? <AlertTitle>{title}</AlertTitle> : null}
    {children ? <AlertDescription>{children}</AlertDescription> : null}
  </Alert>
}

export { InlineMessage }
