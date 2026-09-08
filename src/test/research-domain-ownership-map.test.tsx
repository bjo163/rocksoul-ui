import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { canonicalDomainOwners } from "../contracts/ecosystem-domains"
import { ResearchDomainOwnershipMap } from "../components/research-domain-ownership-map"

describe("Research domain ownership visual", () => {
  it("renders the canonical owner contract with an accessible text equivalent", () => {
    render(<ResearchDomainOwnershipMap />)

    expect(screen.getByRole("img", { name: /research domain ownership/i })).toBeInTheDocument()
    for (const [domain, owner] of Object.entries(canonicalDomainOwners)) {
      expect(screen.getByText(domain, { selector: "strong" })).toBeInTheDocument()
      expect(screen.getByText(new RegExp(owner.repository))).toBeInTheDocument()
    }
    expect(screen.getByText(/Text equivalent/i)).toBeInTheDocument()
  })
})
