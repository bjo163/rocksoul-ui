import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import {
  DivergenceCompass,
  PerspectiveConstellation,
  PerspectiveIntelligenceBoard,
} from "../components/perspective-intelligence"

const perspectives = [
  { id: "p1", label: "Actor A", actorType: "MEDIA", position: "QUESTIONING", salience: .8 },
  { id: "p2", label: "Actor B", actorType: "GOVERNMENT", position: "SUPPORT", salience: .7 },
]

describe("perspective intelligence visual system", () => {
  it("renders a text-equivalent constellation", () => {
    render(<PerspectiveConstellation phenomenon="Example" perspectives={perspectives} />)
    expect(screen.getByLabelText("Perspective constellation")).toBeInTheDocument()
    expect(screen.getByText("Actor A")).toBeInTheDocument()
    expect(screen.getByText("Actor B")).toBeInTheDocument()
  })

  it("exposes divergence and uncertainty without calling them truth", () => {
    render(<DivergenceCompass divergence={.8} uncertainty={.3} coverage={.6} />)
    expect(screen.getByLabelText("Divergence and uncertainty compass")).toBeInTheDocument()
    expect(screen.getByText("80%")).toBeInTheDocument()
    expect(screen.queryByText(/truth score/i)).not.toBeInTheDocument()
  })

  it("renders the composite board with all major visual regions", () => {
    render(
      <PerspectiveIntelligenceBoard
        phenomenon="Example"
        perspectives={perspectives}
        geography={[{ id: "g1", label: "GLOBAL", count: 2 }]}
        divergence={.8}
        uncertainty={.3}
        coverage={{ source: .8, actor: .7, geography: .5, language: .4, framing: .8, position: .7 }}
        framingCells={[{ actor: "MEDIA", framing: "SOCIAL", value: .8 }]}
        signals={[{ id: "s1", label: "Shift", type: "DIVERGENCE", confidence: .8 }]}
        reactions={[{ type: "QUESTIONING", count: 2 }]}
        snapshots={[{ id: "snap1", timestamp: "2026-09-08T00:00:00Z", divergence: .8, uncertainty: .3, perspectives: 2 }]}
        changes={[]}
        provenance={[{ id: "issue", label: "ISSUE", state: "complete" }, { id: "source", label: "SOURCE", count: 2, state: "active" }]}
      />,
    )
    expect(screen.getByLabelText("Perspective intelligence visual board")).toBeInTheDocument()
    expect(screen.getByLabelText("Perspective geography coverage")).toBeInTheDocument()
    expect(screen.getByLabelText("Actor by framing matrix")).toBeInTheDocument()
    expect(screen.getByLabelText("Zigzag signal timeline")).toBeInTheDocument()
    expect(screen.getByLabelText("Perspective temporal history")).toBeInTheDocument()
    expect(screen.getByText("BASELINE ESTABLISHED")).toBeInTheDocument()
    expect(screen.getByLabelText("Reaction spectrum")).toBeInTheDocument()
    expect(screen.getByLabelText("Perspective coverage radar")).toBeInTheDocument()
    expect(screen.getByLabelText("Perspective provenance flow")).toBeInTheDocument()
  })
})
