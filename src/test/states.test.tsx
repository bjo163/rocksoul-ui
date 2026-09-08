import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { ApplicationActionsProvider } from "../contracts/interactions"
import { StatePanel } from "../components/archive-components"

describe("StatePanel", () => {
  it("routes recovery through the application action contract", async () => {
    const onRetry = vi.fn()
    const user = userEvent.setup()
    render(<ApplicationActionsProvider actions={{ onRetry }}><StatePanel state="offline" /></ApplicationActionsProvider>)
    await user.click(screen.getByRole("button", { name: "Retry connection" }))
    expect(onRetry).toHaveBeenCalledWith("offline")
  })
})
