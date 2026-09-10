import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  DateInput,
  FileInput,
  FormActions,
  InputGroup,
  InputGroupInput,
  PasswordInput,
} from "../components/molecules"

afterEach(cleanup)

describe("form molecules", () => {
  it("toggles password visibility with an accessible button", async () => {
    const user = userEvent.setup()
    render(<PasswordInput aria-label="Password" />)
    const input = screen.getByLabelText("Password")
    expect(input).toHaveAttribute("type", "password")
    await user.click(screen.getByRole("button", { name: "Show password" }))
    expect(input).toHaveAttribute("type", "text")
    expect(screen.getByRole("button", { name: "Hide password" })).toHaveAttribute("aria-pressed", "true")
  })

  it("preserves date and file input contracts", async () => {
    const user = userEvent.setup()
    render(<><DateInput aria-label="Review date" min="2026-01-01" /><FileInput aria-label="Attachment" /></>)
    expect(screen.getByLabelText("Review date")).toHaveAttribute("type", "date")
    const file = new File(["evidence"], "evidence.txt", { type: "text/plain" })
    await user.upload(screen.getByLabelText("Attachment"), file)
    expect(screen.getByLabelText("Attachment")).toHaveValue("C:\\fakepath\\evidence.txt")
  })

  it("composes input group from canonical input primitives", () => {
    render(<InputGroup aria-label="Search group"><InputGroupInput aria-label="Search" /></InputGroup>)
    expect(screen.getByRole("group", { name: "Search group" })).toContainElement(screen.getByRole("textbox", { name: "Search" }))
  })

  it("provides a standard form action region", () => {
    render(<FormActions aria-label="Form actions"><button>Save</button></FormActions>)
    expect(screen.getByLabelText("Form actions")).toHaveAttribute("data-slot", "form-actions")
  })
})
