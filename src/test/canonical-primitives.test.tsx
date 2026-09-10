import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { IconButton } from "../components/ui/icon-button"
import { RegistryAsset } from "../components/ui/asset"
import { VisuallyHidden } from "../components/ui/visually-hidden"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

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
})
