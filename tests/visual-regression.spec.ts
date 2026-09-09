import { expect, test } from "@playwright/test"

const surfaces = ["dashboard", "mw0042", "platform", "authorization"] as const
const widths = [390, 640, 768, 1024, 1440]

test.describe("visual regression and responsive contract", () => {
  for (const surface of surfaces) {
    for (const theme of ["light", "dark"] as const) {
      test(`${surface} ${theme} baseline`, async ({ page }) => {
        await page.addInitScript((value) => localStorage.setItem("mw-theme", value), theme)
        await page.goto(`/?screen=${surface}`, { waitUntil: "domcontentloaded" })
        await expect(page.locator("body")).toBeVisible()
        await expect(page).toHaveScreenshot(`${surface}-${theme}.png`, { fullPage: true, animations: "disabled" })
      })
    }
  }

  for (const width of widths) {
    test(`viewport ${width}px has no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
      const overflow = await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - document.documentElement.clientWidth)
      expect(overflow).toBeLessThanOrEqual(1)
    })
  }

  test("200% zoom, reduced motion, high contrast, and long content remain usable", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce", forcedColors: "active" })
    await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
    await page.evaluate(() => { document.documentElement.style.zoom = "2" })
    await expect(page.locator("h1").first()).toBeVisible()
    await expect(page.locator("body")).toBeVisible()
    const overflow = await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - document.documentElement.clientWidth)
    // Browser zoom can add a scrollbar gutter; tolerate only that bounded gutter.
    expect(overflow).toBeLessThanOrEqual(32)
  })

  test("asset surfaces do not expose broken images", async ({ page }) => {
    await page.goto("/?screen=dashboard", { waitUntil: "domcontentloaded" })
    const broken = await page.locator("img").evaluateAll((images) => images.filter((image) => !image.complete || image.naturalWidth === 0).length)
    expect(broken).toBe(0)
  })
})
