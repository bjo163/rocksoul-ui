import { afterEach, expect, it, vi } from "vitest"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { Button } from "../components/compat/button"
import { Input, Select } from "../components/compat/form-controls"
import { Dialog, Drawer } from "../components/compat/overlays"
import { Tabs } from "../components/compat/tabs"

afterEach(cleanup)

it("preserves loading buttons and labelled field APIs through shared primitives", async () => {
  const changed = vi.fn()
  const user = userEvent.setup()
  render(<><Button loading onClick={changed}>Save</Button>
    <Input label="Title" helper="Required" />
    <Select label="Status" options={[{ value: "draft", label: "Draft" }, { value: "reviewed", label: "Reviewed" }]} onChange={changed} /></>)
  expect(screen.getByRole("button", { name: "Save" })).toBeDisabled()
  expect(screen.getByRole("textbox", { name: "Title" })).toHaveAttribute("data-slot", "input")
  expect(screen.getByRole("textbox", { name: "Title" })).toHaveAccessibleDescription("Required")
  await user.selectOptions(screen.getByRole("combobox", { name: "Status" }), "reviewed")
  expect(changed).toHaveBeenCalledTimes(1)
})

it.each([Dialog, Drawer])("closes controlled compatibility overlays and restores focus", async Overlay => {
  function Example() {
    const [open, setOpen] = useState(false)
    return <><Button onClick={() => setOpen(true)}>Open</Button><Overlay title="Details" open={open} onClose={() => setOpen(false)}>Record details</Overlay></>
  }
  const user = userEvent.setup()
  render(<Example />)
  await user.click(screen.getByRole("button", { name: "Open" }))
  expect(screen.getByRole("dialog", { name: "Details" })).toBeVisible()
  await user.keyboard("{Escape}")
  await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
  expect(screen.getByRole("button", { name: "Open" })).toHaveFocus()
})

it("uses shared keyboard navigation while preserving mounted tab content", async () => {
  const user = userEvent.setup()
  render(<Tabs items={[{ id: "first", label: "First", content: <input aria-label="Note" defaultValue="Saved" /> }, { id: "second", label: "Second", content: "History" }]} />)
  await user.tab()
  await user.keyboard("{End}")
  expect(screen.getByRole("tab", { name: "Second" })).toHaveAttribute("aria-selected", "true")
  expect(screen.getByDisplayValue("Saved")).toBeInTheDocument()
  expect(screen.getByDisplayValue("Saved")).not.toBeVisible()
})
