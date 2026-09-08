import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import {
  CommunitySourceLocatorLink,
  MoonWitnessCommunityParticipationAsset,
} from "../components/community-participation"
import { resolveCommunitySourceLocator } from "../contracts/ecosystem-links"

describe("community participation contracts", () => {
  it("resolves the dedicated participation asset pack", () => {
    render(<MoonWitnessCommunityParticipationAsset asset="identity-bridge" alt="Identity bridge" />)
    expect(screen.getByRole("img", { name: "Identity bridge" }).getAttribute("src"))
      .toContain("community-participation-pack/svg/identity-bridge.svg")
  })

  it("resolves case provenance through the pinned asset sync point", () => {
    const locator = resolveCommunitySourceLocator("CASE/MW-0042")
    expect(locator?.kind).toBe("case")
    expect(locator?.href).toContain("/rocksoul-assets/blob/")
    expect(locator?.href).toContain("/penpot/golden-cases/mw-0042/SCREEN-CONTRACT.md")
  })

  it("keeps opaque locators visible without inventing links", () => {
    render(<CommunitySourceLocatorLink source="OPAQUE-LOCATOR" />)
    expect(screen.getByText("OPAQUE-LOCATOR")).toBeInTheDocument()
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })
})
