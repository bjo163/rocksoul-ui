import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { ThemeToggle } from "../components/theme-toggle"

describe("ThemeToggle", () => {
  beforeEach(() => {
    const values = new Map<string, string>()
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      value: {
        clear: () => values.clear(),
        getItem: (key: string) => values.get(key) ?? null,
        removeItem: (key: string) => values.delete(key),
        setItem: (key: string, value: string) => values.set(key, value),
      },
    })
    window.localStorage.clear()
    delete document.documentElement.dataset.theme
    delete document.documentElement.dataset.themePreference
    delete document.documentElement.dataset.effectiveTheme
    document.documentElement.classList.remove("light")
  })

  afterEach(cleanup)

  it("restores and persists an explicit theme independently of surface personality", async () => {
    window.localStorage.setItem("mw-theme", "dark")
    const user = userEvent.setup()
    render(<div data-surface-personality="operator"><ThemeToggle /></div>)

    await waitFor(() => expect(document.documentElement.dataset.theme).toBe("dark"))
    expect(document.documentElement.dataset.themePreference).toBe("dark")
    expect(screen.getByRole("button")).toHaveTextContent("dark")

    await user.click(screen.getByRole("button"))
    await waitFor(() => expect(document.documentElement.dataset.theme).toBe("light"))
    expect(window.localStorage.getItem("mw-theme")).toBe("light")
    expect(document.documentElement.classList).toContain("light")
  })

  it("keeps the effective theme explicit when preference is system", async () => {
    render(<ThemeToggle />)
    await waitFor(() => expect(document.documentElement.dataset.themePreference).toBe("system"))
    expect(document.documentElement.dataset.effectiveTheme).toBe(document.documentElement.dataset.theme)
  })
})
