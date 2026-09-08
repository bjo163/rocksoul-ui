import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { AuthFormPattern, Pagination, RepositoryMonitor } from "../components/patterns"

describe("consumer behavior contracts", () => {
  it("emits pagination changes", async () => {
    const onPageChange = vi.fn()
    const user = userEvent.setup()
    render(<Pagination page={2} pages={3} onPageChange={onPageChange} />)
    await user.click(screen.getByRole("button", { name: "Next" }))
    expect(onPageChange).toHaveBeenCalledWith(3)
  })

  it("emits repository actions", async () => {
    const onSyncAll = vi.fn()
    const onInspect = vi.fn()
    const user = userEvent.setup()
    render(<RepositoryMonitor repositories={[{ repo: "rocksoul-event", status: "online" }]} onSyncAll={onSyncAll} onInspect={onInspect} />)
    await user.click(screen.getByRole("button", { name: "Sync all" }))
    await user.click(screen.getByRole("button", { name: "Inspect" }))
    expect(onSyncAll).toHaveBeenCalledOnce()
    expect(onInspect).toHaveBeenCalledWith("rocksoul-event")
  })

  it("submits typed auth data", async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<AuthFormPattern onSubmit={onSubmit} />)
    await user.type(screen.getByLabelText("Email"), "researcher@example.com")
    await user.type(screen.getByLabelText("Password"), "example-pass")
    await user.click(screen.getByRole("checkbox", { name: /keep me signed in/i }))
    await user.click(screen.getByRole("button", { name: "Continue" }))
    expect(onSubmit).toHaveBeenCalledWith({
      email: "researcher@example.com",
      password: "example-pass",
      keepSignedIn: true,
    })
  })
})
