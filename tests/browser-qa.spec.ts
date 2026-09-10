import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

const screens = [
  "dashboard", "kanban", "calendar", "chat", "ai", "resources", "profile",
  "authorization", "states", "notifications", "platform", "mw0042",
] as const

async function assertSurface(page: Parameters<Parameters<typeof test>[2]>[0]["page"]) {
  await expect(page.locator("h1").first()).toBeVisible()

  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze()

  const blocking = accessibility.violations
    .filter(({ impact }) => impact === "critical" || impact === "serious")
    .map(({ id, impact, nodes }) => ({
      id,
      impact,
      nodes: nodes.map(node => ({ target: node.target, html: node.html, failureSummary: node.failureSummary })),
    }))
  expect(blocking).toEqual([])

  const overflow = await page.evaluate(() => Math.max(
    0,
    document.documentElement.scrollWidth - document.documentElement.clientWidth,
    document.body.scrollWidth - document.body.clientWidth,
  ))
  expect(overflow).toBeLessThanOrEqual(1)

  const duplicateIds = await page.evaluate(() => {
    const ids = [...document.querySelectorAll("[id]")].map(node => node.id).filter(Boolean)
    return ids.filter((id, index) => ids.indexOf(id) !== index)
  })
  expect(duplicateIds).toEqual([])
}

for (const screen of screens) {
  test(`${screen} screen is release-auditable`, async ({ page }) => {
    await page.goto(`/?screen=${screen}`, { waitUntil: "domcontentloaded" })
    await assertSurface(page)
  })

  test(`${screen} screen survives reduced motion and forced colors`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce", forcedColors: "active" })
    await page.goto(`/?screen=${screen}`, { waitUntil: "domcontentloaded" })
    await assertSurface(page)
  })
}

test("public landing and dashboard remain valid in baseline mode", async ({ page }) => {
  for (const path of ["/", "/?screen=dashboard"]) {
    await page.goto(path, { waitUntil: "domcontentloaded" })
    await assertSurface(page)
  }
})

test("application shell skip link is keyboard-operable", async ({ page }) => {
  await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
  await page.keyboard.press("Tab")
  const skip = page.getByRole("link", { name: "Skip to main content" })
  await expect(skip).toBeFocused()
  await page.keyboard.press("Enter")
  await expect(page.locator("#mw-main-content")).toBeFocused()
})

test("interactive controls expose deterministic accessible names", async ({ page }) => {
  await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
  const unnamedButtons = await page.locator("button").evaluateAll(buttons =>
    buttons.filter(button => !(button.textContent?.trim() || button.getAttribute("aria-label"))).length,
  )
  expect(unnamedButtons).toBe(0)
})
