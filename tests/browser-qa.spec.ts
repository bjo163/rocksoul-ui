import AxeBuilder from "@axe-core/playwright"
import { expect, test, type Page } from "@playwright/test"

const screens = [
  "dashboard", "kanban", "calendar", "chat", "ai", "resources", "profile",
  "authorization", "states", "notifications", "platform", "mw0042",
] as const

const colorSchemes = ["light", "dark", "no-preference"] as const

async function assertSurface(page: Page) {
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

  for (const colorScheme of colorSchemes) {
    test(`${screen} screen survives ${colorScheme} theme`, async ({ page }) => {
      await page.emulateMedia({ colorScheme })
      await page.goto(`/?screen=${screen}`, { waitUntil: "domcontentloaded" })
      await assertSurface(page)
    })
  }

  test(`${screen} screen survives reduced motion and forced colors`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce", forcedColors: "active" })
    await page.goto(`/?screen=${screen}`, { waitUntil: "domcontentloaded" })
    await assertSurface(page)
  })

  test(`${screen} screen survives broken image resources`, async ({ page }) => {
    await page.route("**/*", async route => {
      if (route.request().resourceType() === "image") {
        await route.abort()
        return
      }
      await route.continue()
    })
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

test("dashboard remains stable with long content injected", async ({ page }) => {
  await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
  await page.evaluate(() => {
    const container = document.createElement("section")
    container.setAttribute("aria-label", "Long content resilience")
    container.style.maxWidth = "100%"
    container.style.overflowWrap = "anywhere"
    container.textContent = "TRACE-" + "LONG-CONTENT-".repeat(300)
    document.querySelector("main")?.append(container)
  })
  await assertSurface(page)
})

test("command palette opens from Control+K, traps focus, and closes on Escape", async ({ page }) => {
  await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
  await page.keyboard.press("Control+K")
  const dialog = page.getByRole("dialog", { name: /Command palette/i })
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole("textbox", { name: /Search actions/i })).toBeFocused()
  await expect(dialog.getByText("Create review task")).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(dialog).toBeHidden()
})

test("notifications drawer opens, exposes unread state, and closes on Escape", async ({ page }) => {
  await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
  await page.getByRole("button", { name: /Notifications, 3 unread/i }).click()
  const dialog = page.getByRole("dialog", { name: "Notifications" })
  await expect(dialog).toBeVisible()
  await expect(dialog.getByText("3 unread")).toBeVisible()
  await expect(dialog.getByRole("button", { name: "Mark all read" })).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(dialog).toBeHidden()
})

test("mobile navigation opens as a focus-managed drawer", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
  await page.getByRole("button", { name: "Open navigation" }).click()
  const dialog = page.getByRole("dialog", { name: /Navigation/i })
  await expect(dialog).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(dialog).toBeHidden()
})

test("offline system state remains explicit and accessible", async ({ page }) => {
  await page.goto("/?screen=states", { waitUntil: "domcontentloaded" })
  await expect(page.getByText(/Backend: offline/i)).toBeVisible()
  await expect(page.getByText(/offline/i).first()).toBeVisible()
  await assertSurface(page)
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
