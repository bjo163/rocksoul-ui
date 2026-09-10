import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { IconButton } from "../components/ui/icon-button"
import { Button } from "../components/ui/button"
import { RegistryAsset } from "../components/ui/asset"
import { VisuallyHidden } from "../components/ui/visually-hidden"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"

afterEach(cleanup)

describe("canonical utility primitives", () => {
  it("requires an accessible name for icon-only actions at the public API", () => {
    render(<IconButton aria-label="Open command palette">⌘</IconButton>)
    expect(screen.getByRole("button", { name: "Open command palette" })).toHaveAttribute("data-size", "icon")
  })

  it("resolves registry assets through the pinned RockSoul asset contract", () => {
    render(<RegistryAsset pack="semantic-primitives" assetId="status-verified" alt="Verified status" />)
    expect(screen.getByRole("img", { name: "Verified status" }).getAttribute("src")).toContain("semantic-primitives-pack")
  })

  it("keeps assistive text in the accessibility tree", () => {
    render(<VisuallyHidden>Command palette</VisuallyHidden>)
    expect(screen.getByText("Command palette")).toBeInTheDocument()
  })

  it("restores focus after a canonical dialog closes with Escape", async () => {
    function Example() {
      const [open, setOpen] = useState(false)
      return <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><IconButton aria-label="Open details">i</IconButton></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Details</DialogTitle></DialogHeader>Evidence details</DialogContent></Dialog>
    }
    const user = userEvent.setup()
    render(<Example />)
    const trigger = screen.getByRole("button", { name: "Open details" })
    await user.click(trigger)
    expect(screen.getByRole("dialog", { name: "Details" })).toBeVisible()
    await user.keyboard("{Escape}")
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
    expect(trigger).toHaveFocus()
  })

  it("supports keyboard activation and controlled content for canonical tabs", async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="overview"><TabsList aria-label="Sections"><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="evidence">Evidence</TabsTrigger></TabsList><TabsContent value="overview">Overview content</TabsContent><TabsContent value="evidence">Evidence content</TabsContent></Tabs>)
    const evidence = screen.getByRole("tab", { name: "Evidence" })
    evidence.focus()
    await user.keyboard("{Enter}")
    expect(evidence).toHaveAttribute("data-state", "active")
    expect(screen.getByText("Evidence content")).toBeVisible()
  })

  it("restores focus after Select, DropdownMenu, and Popover close", async () => {
    const user = userEvent.setup()
    render(<div><Select><SelectTrigger aria-label="Status"><SelectValue placeholder="Choose status" /></SelectTrigger><SelectContent><SelectItem value="verified">Verified</SelectItem></SelectContent></Select><DropdownMenu><DropdownMenuTrigger asChild><IconButton aria-label="Open actions">⋯</IconButton></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Archive</DropdownMenuItem></DropdownMenuContent></DropdownMenu><Popover><PopoverTrigger asChild><Button>Open help</Button></PopoverTrigger><PopoverContent>Help content</PopoverContent></Popover></div>)
    const action = screen.getByRole("button", { name: "Open actions" })
    await user.click(action)
    expect(screen.getByRole("menuitem", { name: "Archive" })).toBeVisible()
    await user.keyboard("{Escape}")
    await waitFor(() => expect(action).toHaveFocus())
    const help = screen.getByRole("button", { name: "Open help" })
    await user.click(help)
    expect(screen.getByText("Help content")).toBeVisible()
    await user.keyboard("{Escape}")
    await waitFor(() => expect(help).toHaveFocus())
  })
})
