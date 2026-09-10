import * as React from "react"
import { VisuallyHidden as VisuallyHiddenPrimitive } from "radix-ui"

/** Content visible to assistive technology while remaining visually hidden. */
function VisuallyHidden(props: React.ComponentProps<typeof VisuallyHiddenPrimitive.Root>) {
  return <VisuallyHiddenPrimitive.Root data-slot="visually-hidden" {...props} />
}

export { VisuallyHidden }
