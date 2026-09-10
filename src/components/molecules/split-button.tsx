"use client"

import * as React from "react"
import { Button } from "../ui/button"
import { ButtonGroup } from "../ui/button-group"
import { ChevronDownIcon } from "../ui/icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

export interface SplitButtonItem {
  label: React.ReactNode
  onSelect?: () => void
  disabled?: boolean
}

export interface SplitButtonProps extends Omit<React.ComponentProps<typeof Button>, "children"> {
  children: React.ReactNode
  items: readonly SplitButtonItem[]
}

function SplitButton({ children, items, ...props }: SplitButtonProps) {
  return <ButtonGroup data-slot="split-button">
    <Button {...props}>{children}</Button>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button {...props} aria-label="More actions" size="icon-sm"><ChevronDownIcon aria-hidden="true" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item, index) => <DropdownMenuItem key={index} disabled={item.disabled} onSelect={item.onSelect}>{item.label}</DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
}

export { SplitButton }
