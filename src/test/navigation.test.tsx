import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"
import { NavigationLink, NavigationProvider } from "../components/navigation"

afterEach(cleanup)

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

  it.each([
    ["new tab", { target: "_blank" }],
    ["modified click", { ctrlKey: true }],
    ["secondary click", { button: 1 }],
  ])("does not intercept %s", async (_case, clickOptions) => {
    const navigate = vi.fn()
    render(
      <NavigationProvider adapter={{ navigate }}>
        <NavigationLink href="/cases" {...clickOptions}>Cases</NavigationLink>
      </NavigationProvider>,
    )

    fireEvent.click(screen.getByRole("link", { name: "Cases" }), clickOptions)

    expect(navigate).not.toHaveBeenCalled()
  })

  it("does not intercept when the consumer prevents the click", async () => {
    const navigate = vi.fn()
    const onClick = vi.fn((event) => event.preventDefault())
    render(
      <NavigationProvider adapter={{ navigate }}>
        <NavigationLink href="/cases" onClick={onClick}>Cases</NavigationLink>
      </NavigationProvider>,
    )

    fireEvent.click(screen.getByRole("link", { name: "Cases" }))

    expect(onClick).toHaveBeenCalledOnce()
    expect(navigate).not.toHaveBeenCalled()
  })

  it("delegates custom rendering to the consumer adapter", () => {
    const renderLink = vi.fn(({ href, children }) => <button data-href={href}>{children}</button>)
    render(
      <NavigationProvider adapter={{ renderLink }}>
        <NavigationLink href="/cases">Cases</NavigationLink>
      </NavigationProvider>,
    )

    expect(screen.getByRole("button", { name: "Cases" })).toHaveAttribute("data-href", "/cases")
    expect(renderLink).toHaveBeenCalledOnce()
  })
})
