import * as React from "react"
import { Button } from "./button"

type IconButtonProps = Omit<React.ComponentProps<typeof Button>, "size" | "children"> & {
  "aria-label": string
  children: React.ReactNode
  size?: Extract<NonNullable<React.ComponentProps<typeof Button>["size"]>, "icon" | "icon-xs" | "icon-sm" | "icon-lg">
}

/** A button for icon-only actions. An accessible name is required by the type contract. */
function IconButton({ size = "icon", ...props }: IconButtonProps) {
  return <Button size={size} {...props} />
}

export { IconButton, type IconButtonProps }
