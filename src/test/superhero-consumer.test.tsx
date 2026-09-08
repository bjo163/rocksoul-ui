import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MWHeader } from "../components/archive-components"
import { MoonWitnessPersonMark } from "../components/asset-provider"

describe("SUPERHERO consumer contracts", () => {
  it("lets PERSON consumers configure the shared public header", () => {
    render(
      <MWHeader
        brandLabel="SUPERHERO / PERSON INTELLIGENCE"
        liveLabel="Canonical snapshot"
        searchHref="#search"
        navItems={[
          { label: "People", href: "#people" },
          { label: "Transmission", href: "#transmission" },
          { label: "Evidence", href: "#claims" },
        ]}
      />,
    )

    expect(screen.getByText("SUPERHERO / PERSON INTELLIGENCE")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Transmission" })).toHaveAttribute("href", "#transmission")
    expect(screen.getAllByText("Canonical snapshot").length).toBeGreaterThan(0)
  })

  it("uses the canonical product PERSON asset instead of a modern persona role", () => {
    render(<MoonWitnessPersonMark alt="Canonical person" />)
    const image = screen.getByRole("img", { name: "Canonical person" })
    expect(image.getAttribute("src")).toContain("moonwitness/icons/svg/navigation/person.svg")
  })
})
