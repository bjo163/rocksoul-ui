import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

const surfaces = [
  { name: "public landing", path: "/" },
  { name: "application dashboard", path: "/?screen=dashboard" },
] as const

for (const surface of surfaces) {
  test(`${surface.name} has no serious accessibility or responsive blockers`, async ({ page }) => {
    await page.goto(surface.path, { waitUntil: "domcontentloaded" })
    await expect(page.locator("h1").first()).toBeVisible()

    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    const blocking = accessibility.violations
      .filter((violation) => violation.impact === "critical" || violation.impact === "serious")
      .map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        nodes: violation.nodes.map((node) => node.target),
      }))
    expect(blocking).toEqual([])

    const overflow = await page.evaluate(() => Math.max(
      0,
      document.documentElement.scrollWidth - document.documentElement.clientWidth,
      document.body.scrollWidth - document.body.clientWidth,
    ))
    expect(overflow).toBeLessThanOrEqual(1)

    const duplicateIds = await page.evaluate(() => {
      const ids = [...document.querySelectorAll("[id]")].map((node) => node.id).filter(Boolean)
      return ids.filter((id, index) => ids.indexOf(id) !== index)
    })
    expect(duplicateIds).toEqual([])
  })
}

test("application shell skip link is keyboard-operable", async ({ page }) => {
  await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
  await page.keyboard.press("Tab")
  const skip = page.getByRole("link", { name: "Skip to main content" })
  await expect(skip).toBeFocused()
  await page.keyboard.press("Enter")
  await expect(page.locator("#mw-main-content")).toBeFocused()
})

test("reduced-motion mode keeps the public landing usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/", { waitUntil: "domcontentloaded" })
  await expect(page.locator("h1").first()).toBeVisible()
  await expect(page.locator("body")).toBeVisible()
})
