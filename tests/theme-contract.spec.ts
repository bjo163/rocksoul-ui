import { expect, test } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"

const surfaces = [
  { name: "dashboard", path: "/?screen=dashboard", selector: ".mw-platform", personality: "operator", density: ".9" },
  { name: "case", path: "/?screen=mw0042", selector: "#case", personality: "editorial", density: "1.08" },
  { name: "platform", path: "/?screen=platform", selector: ".mw-platform", personality: "operator", density: ".9" },
] as const

const expected = {
  dark: { page: "#0B0B0B", panel: "#1B1B1B", text: "#F7F4EC", focus: "#F7F4EC" },
  light: { page: "#F7F4EC", panel: "#EEEAE0", text: "#0B0B0B", focus: "#0B0B0B" },
} as const

for (const surface of surfaces) {
  for (const theme of ["dark", "light"] as const) {
    test(`${surface.name} honors the global ${theme} theme`, async ({ page }, testInfo) => {
      await page.addInitScript((value) => localStorage.setItem("mw-theme", value), theme)
      await page.goto(surface.path, { waitUntil: "networkidle" })
      const shell = page.locator(surface.selector).first()
      await expect(shell).toHaveAttribute("data-surface-personality", surface.personality)
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme)

      const tokens = await shell.evaluate((node) => {
        const style = getComputedStyle(node)
        return {
          page: style.getPropertyValue("--mw-surface-page").trim(),
          panel: style.getPropertyValue("--mw-surface-panel").trim(),
          text: style.getPropertyValue("--mw-text-primary").trim(),
          focus: style.getPropertyValue("--mw-focus").trim(),
          personality: style.getPropertyValue("--mw-shell-density").trim(),
        }
      })
      expect(tokens).toEqual({ ...expected[theme], personality: surface.density })
      const accessibility = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze()
      expect(accessibility.violations.filter((item) => item.impact === "critical" || item.impact === "serious")).toEqual([])
      await page.screenshot({ path: testInfo.outputPath(`${surface.name}-${theme}.png`), fullPage: true })
    })
  }
}

test("theme preference persists and system mode follows the operating system", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" })
  await page.goto("/?screen=dashboard", { waitUntil: "networkidle" })
  const toggle = page.getByRole("button", { name: /^Theme / })
  await expect(page.locator("html")).toHaveAttribute("data-theme-preference", "system")
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark")

  await toggle.click()
  await expect(page.locator("html")).toHaveAttribute("data-theme-preference", "dark")
  await toggle.click()
  await expect(page.locator("html")).toHaveAttribute("data-theme-preference", "light")
  await page.reload({ waitUntil: "networkidle" })
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light")

  await page.evaluate(() => localStorage.setItem("mw-theme", "system"))
  await page.reload({ waitUntil: "networkidle" })
  await page.emulateMedia({ colorScheme: "light" })
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light")
})

test("operator chrome, content, statuses, overlays, and focus inherit one theme", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("mw-theme", "dark"))
  await page.goto("/?screen=dashboard", { waitUntil: "networkidle" })
  await page.getByRole("button", { name: "Open command palette" }).click()

  const selectors = [".mw-platform", ".mw-platform aside", ".mw-platform header", ".mw-platform main", ".mw-platform button", "dialog[open]"]
  for (const selector of selectors) {
    const node = page.locator(selector).first()
    await expect(node).toBeVisible()
    const inherited = await node.evaluate((element) => {
      const style = getComputedStyle(element)
      return {
        page: style.getPropertyValue("--mw-surface-page").trim(),
        text: style.getPropertyValue("--mw-text-primary").trim(),
        success: style.getPropertyValue("--mw-status-supported-fg").trim(),
        focus: style.getPropertyValue("--mw-focus").trim(),
      }
    })
    expect(inherited).toEqual({ page: "#0B0B0B", text: "#F7F4EC", success: "#2CCB87", focus: "#F7F4EC" })
  }
})
