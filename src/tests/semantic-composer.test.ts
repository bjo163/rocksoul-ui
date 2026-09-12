import { describe, expect, it } from "vitest"
import {
  composeVisualSemanticState,
  parseVisualSemanticState,
} from "../contracts/semantic-composer"

describe("semantic composer foundation", () => {
  it("rejects unsupported frozen V2 values", () => {
    expect(() => parseVisualSemanticState({ graphNode: "custom-node" })).toThrow(
      "Unsupported V2 graph node id: custom-node",
    )
    expect(() => parseVisualSemanticState({ surface: "hud" })).toThrow(
      "Unsupported V2 surface personality: hud",
    )
    expect(() => parseVisualSemanticState({ unknownDimension: "value" })).toThrow(
      "Unsupported V2 semantic dimension: unknownDimension",
    )
  })

  it("keeps interaction state orthogonal to semantic priority", () => {
    const result = composeVisualSemanticState(
      {
        surface: "operator",
        graphNode: "evidence",
        lifecycle: "active",
      },
      "console",
    )

    expect(result.primaryRole).toBe("active")
    expect(result.secondaryMarks).toEqual(["evidence"])
    expect(result.interactionOverlay).toBe("orthogonal")
  })

  it("uses surface density only when semantic density is absent", () => {
    expect(composeVisualSemanticState({}, "document").density).toBe("editorial")
    expect(composeVisualSemanticState({ density: "compact" }, "document").density).toBe("compact")
  })

  it("covers every supported surface with a deterministic density adapter", () => {
    const expected = {
      table: "compact",
      graph: "compact",
      map: "compact",
      timeline: "comfortable",
      inspector: "comfortable",
      document: "editorial",
      console: "compact",
      mobile: "compact",
    } as const

    for (const [surface, density] of Object.entries(expected)) {
      expect(composeVisualSemanticState({}, surface as keyof typeof expected).density).toBe(density)
    }
  })

  it("applies deterministic semantic precedence without collapsing secondary meaning", () => {
    const result = composeVisualSemanticState(
      {
        typography: "mono",
        chart: "line",
        graphEdge: "provenance",
        graphNode: "evidence",
        lifecycle: "canonical",
        surface: "forensic",
      },
      "graph",
    )

    expect(result.primaryRole).toBe("canonical")
    expect(result.secondaryMarks).toEqual(["evidence", "provenance", "line", "mono"])
    expect(result.tertiaryMetadata).toEqual(["forensic"])
    expect(result.inspectorDetails).toEqual(["evidence", "provenance", "line", "canonical", "forensic"])
  })

  it("produces deterministic accessible output", () => {
    const state = parseVisualSemanticState({
      graphNode: "canonical-record",
      graphEdge: "provenance",
      lifecycle: "canonical",
      surface: "forensic",
    })
    const first = composeVisualSemanticState(state, "graph")
    const second = composeVisualSemanticState(state, "graph")

    expect(first).toEqual(second)
    expect(first.accessibilityDescription).toBe(
      "Semantic entity: canonical, canonical-record, provenance, forensic.",
    )
  })
})
