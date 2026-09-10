import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CopyButton, FilterGroup, InlineMessage, KeyValue, ProgressIndicator, Stat } from "../components/molecules"

afterEach(cleanup)

describe("display and action molecules", () => {
  it("copies a value and announces the copied state", async () => {
    const user = userEvent.setup()
    const onCopied = vi.fn()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } })
    render(<CopyButton value="record-42" onCopied={onCopied} />)
    await user.click(screen.getByRole("button", { name: "Copy" }))
    expect(writeText).toHaveBeenCalledWith("record-42")
    expect(onCopied).toHaveBeenCalledOnce()
    expect(screen.getByRole("button", { name: "Copied" })).toBeVisible()
  })

  it("renders semantic key value, stat, message, progress, and filter group primitives", () => {
    render(<>
      <KeyValue label="Status" value="Ready" />
      <Stat label="Cases" value="42" trend="+2" />
      <InlineMessage title="Saved">The record is ready.</InlineMessage>
      <ProgressIndicator label="Completion" value={75} showValue />
      <FilterGroup legend="Filters"><button>Apply</button></FilterGroup>
    </>)
    expect(screen.getByText("Ready")).toBeVisible()
    expect(screen.getByText("42")).toBeVisible()
    expect(screen.getByRole("alert")).toHaveTextContent("The record is ready.")
    expect(screen.getByText("75%"))
    expect(screen.getByRole("group", { name: "Filters" })).toBeVisible()
  })
})
