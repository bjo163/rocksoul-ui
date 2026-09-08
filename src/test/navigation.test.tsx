import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { NavigationLink, NavigationProvider } from "../components/navigation"

describe("NavigationLink", () => {
  it("delegates internal routes to the consumer adapter", async () => {
    const navigate = vi.fn()
    const user = userEvent.setup()
    render(<NavigationProvider adapter={{ navigate }}><NavigationLink href="/cases">Cases</NavigationLink></NavigationProvider>)
    await user.click(screen.getByRole("link", { name: "Cases" }))
    expect(navigate).toHaveBeenCalledWith("/cases")
  })

  it("does not intercept anchor links", async () => {
    const navigate = vi.fn()
    const user = userEvent.setup()
    render(<NavigationProvider adapter={{ navigate }}><NavigationLink href="#case">Case</NavigationLink></NavigationProvider>)
    await user.click(screen.getByRole("link", { name: "Case" }))
    expect(navigate).not.toHaveBeenCalled()
  })
})
