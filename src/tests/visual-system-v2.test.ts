import { describe, expect, it } from "vitest"
import {
  isVisualSystemV2DensityMode,
  isVisualSystemV2GraphEdgeId,
  isVisualSystemV2GraphNodeId,
  isVisualSystemV2SurfacePersonality,
  visualSystemV2RuntimeIdentity,
  visualSystemV2SurfacePersonalities,
} from "../contracts/visual-system-v2"

describe("Visual System V2 runtime compatibility", () => {
  it("binds the frozen authority to the pinned accepted asset delivery", () => {
    expect(visualSystemV2RuntimeIdentity.visualSystemVersion).toBe(2)
    expect(visualSystemV2RuntimeIdentity.authority.repository)
      .toBe(visualSystemV2RuntimeIdentity.runtimeDelivery.repository)
    expect(visualSystemV2RuntimeIdentity.runtimeDelivery.commit).toMatch(/^[0-9a-f]{40}$/)
    expect(visualSystemV2RuntimeIdentity.runtimeDelivery.acceptedMainCommit).toMatch(/^[0-9a-f]{40}$/)
    expect(visualSystemV2RuntimeIdentity.runtimeDelivery.repositoryAcceptance).toBe("passed")
  })

  it("keeps the frozen six-personality model exact", () => {
    expect(visualSystemV2SurfacePersonalities).toEqual([
      "operator",
      "forensic",
      "editorial",
      "archive",
      "cinematic",
      "community",
    ])
  })

  it("rejects semantic values outside the frozen V2 projection", () => {
    expect(isVisualSystemV2DensityMode("compact")).toBe(true)
    expect(isVisualSystemV2DensityMode("ultra-dense")).toBe(false)
    expect(isVisualSystemV2SurfacePersonality("operator")).toBe(true)
    expect(isVisualSystemV2SurfacePersonality("hud")).toBe(false)
    expect(isVisualSystemV2GraphNodeId("evidence")).toBe(true)
    expect(isVisualSystemV2GraphNodeId("custom-node")).toBe(false)
    expect(isVisualSystemV2GraphEdgeId("provenance")).toBe(true)
    expect(isVisualSystemV2GraphEdgeId("magic-link")).toBe(false)
  })
})
