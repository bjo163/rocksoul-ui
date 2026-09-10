import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Checkbox } from "../components/ui/checkbox"
import { Button } from "../components/ui/button"
import { Asset } from "../components/ui/asset"
import { MoonWitnessAssetProvider } from "../components/asset-provider"
import { SearchInput } from "../components/molecules/search-input"

afterEach(cleanup)

describe("ROCKSOUL composable primitives", () => {
  it("opens an accordion with the keyboard and exposes expanded state", async () => {
    const user = userEvent.setup()
    render(<Accordion type="single" collapsible><AccordionItem value="evidence">
      <AccordionTrigger>Evidence</AccordionTrigger><AccordionContent>Reviewed source</AccordionContent>
    </AccordionItem></Accordion>)
    await user.tab()
    await user.keyboard("{Enter}")
    expect(screen.getByRole("button", { name: "Evidence" })).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("Reviewed source")).toBeVisible()
    await user.keyboard("{Enter}")
    expect(screen.getByRole("button", { name: "Evidence" })).toHaveAttribute("aria-expanded", "false")
  })

  it("moves focus into a named dialog, closes with Escape, and restores focus", async () => {
    const user = userEvent.setup()
    render(<Dialog><DialogTrigger asChild><Button>Review</Button></DialogTrigger>
      <DialogContent><DialogTitle>Review evidence</DialogTitle><DialogDescription>Check source provenance.</DialogDescription>
        <Button>Save</Button></DialogContent></Dialog>)
    const trigger = screen.getByRole("button", { name: "Review" })
    await user.click(trigger)
    expect(screen.getByRole("dialog", { name: "Review evidence" })).toBeVisible()
    expect(screen.getByRole("button", { name: "Save" })).toHaveFocus()
    await user.keyboard("{Escape}")
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
    expect(trigger).toHaveFocus()
  })

  it("supports keyboard tab selection", async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="source"><TabsList aria-label="Record sections">
      <TabsTrigger value="source">Source</TabsTrigger><TabsTrigger value="history">History</TabsTrigger>
    </TabsList><TabsContent value="source">Source details</TabsContent><TabsContent value="history">History details</TabsContent></Tabs>)
    await user.tab()
    await user.keyboard("{ArrowRight}")
    expect(screen.getByRole("tab", { name: "History" })).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("tabpanel")).toHaveTextContent("History details")
  })

  it("honors disabled checkbox state and supports keyboard toggling", async () => {
    const user = userEvent.setup()
    const changed = vi.fn()
    render(<><Checkbox aria-label="Accepted" onCheckedChange={changed} /><Checkbox aria-label="Locked" disabled onCheckedChange={changed} /></>)
    await user.tab()
    await user.keyboard(" ")
    expect(screen.getByRole("checkbox", { name: "Accepted" })).toBeChecked()
    expect(changed).toHaveBeenCalledExactlyOnceWith(true)
    await user.click(screen.getByRole("checkbox", { name: "Locked" }))
    expect(changed).toHaveBeenCalledTimes(1)
  })

  it("composes buttons as links and resolves ROCKSOUL assets through the provider", () => {
    render(<MoonWitnessAssetProvider baseUrl="/product/assets"><Button asChild><a href="/records">Records</a></Button>
      <Asset pack="product-icons" file="svg/status/check.svg" alt="Verified" /></MoonWitnessAssetProvider>)
    expect(screen.getByRole("link", { name: "Records" })).toHaveAttribute("href", "/records")
    expect(screen.getByRole("img", { name: "Verified" })).toHaveAttribute("src", "/product/assets/icons/svg/status/check.svg")
  })

  it("provides an accessible search input with a clear action", async () => {
    const user = userEvent.setup()
    const clear = vi.fn()
    render(<SearchInput aria-label="Search records" defaultValue="Jerusalem" onClear={clear} />)
    expect(screen.getByRole("searchbox", { name: "Search records" })).toHaveValue("Jerusalem")
    await user.click(screen.getByRole("button", { name: "Clear search" }))
    expect(clear).toHaveBeenCalledOnce()
  })
})
