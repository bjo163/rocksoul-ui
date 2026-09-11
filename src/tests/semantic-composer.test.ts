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
    expect(first.accessibilityDescription).toContain("canonical")
    expect(first.accessibilityDescription).toContain("canonical-record")
    expect(first.accessibilityDescription).toContain("provenance")
  })
})
