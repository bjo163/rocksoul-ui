import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { EventTopologyGraph, HistoricityBand } from "../components/event-intelligence"

describe("Event intelligence visual contracts", () => {
  it("renders a topology with an accessible text equivalent", () => {
    render(<EventTopologyGraph
      nodes={[
        { id: "EVT-1", kind: "event", label: "Event" },
        { id: "CLM-1", kind: "claim", label: "Claim" },
        { id: "SRC-1", kind: "source", label: "Source", external: true },
        { id: "ALT-1", kind: "alternative", label: "Alternative" },
      ]}
      edges={[
        { id: "a", from: "EVT-1", to: "CLM-1", label: "asserts" },
        { id: "b", from: "CLM-1", to: "SRC-1", label: "attested_by", confidence: .9 },
        { id: "c", from: "CLM-1", to: "ALT-1", label: "alternative_explanation", status: "unresolved" },
      ]}
    />)
    expect(screen.getByRole("img", { name: /event intelligence topology/i })).toBeInTheDocument()
    const textEquivalent = screen.getAllByRole("listitem").map((item) => item.textContent ?? "").join(" ")
    expect(textEquivalent).toMatch(/Event.*asserts.*Claim/)
    expect(textEquivalent).toMatch(/Claim.*attested by.*Source/)
    expect(textEquivalent).toMatch(/Claim.*alternative explanation.*Alternative/)
  })

  it("exposes historicity confidence semantically", () => {
    render(<HistoricityBand confidence={.91} scope="Event occurrence" uncertainty={["Motive unknown"]} alternatives={["Alternative sequence"]} status="strongly_supported" />)
    expect(screen.getByRole("progressbar", { name: /historicity confidence/i })).toHaveAttribute("aria-valuenow", "91")
    expect(screen.getByText(/Motive unknown/)).toBeInTheDocument()
    expect(screen.getByText(/Alternative sequence/)).toBeInTheDocument()
  })
})
