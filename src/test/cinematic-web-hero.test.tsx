import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { CinematicWebHero } from "../components/cinematic-web-hero"

describe("CinematicWebHero", () => {
  it("keeps aria-labelledby unique across multiple hero instances", () => {
    const { container } = render(
      <>
        <CinematicWebHero />
        <CinematicWebHero />
      </>,
    )

    const sections = [...container.querySelectorAll(".mw-cinematic-web-hero")]
    expect(sections).toHaveLength(2)

    const labelledBy = sections.map((section) => section.getAttribute("aria-labelledby"))
    expect(labelledBy[0]).toBeTruthy()
    expect(labelledBy[1]).toBeTruthy()
    expect(labelledBy[0]).not.toBe(labelledBy[1])

    for (const id of labelledBy) {
      expect(id ? document.getElementById(id) : null).toBeInstanceOf(HTMLHeadingElement)
    }
  })
})
