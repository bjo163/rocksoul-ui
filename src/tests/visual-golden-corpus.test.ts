import { describe, expect, it } from "vitest"
import {
  visualGoldenCorpusVersion,
  visualGoldenFixtures,
  visualGoldenInvalidFixtures,
} from "../contracts/visual-golden-corpus"

describe("Visual Golden Corpus contract", () => {
  it("contains the required deterministic corpus size", () => {
    expect(visualGoldenCorpusVersion).toBe("1.0.0")
    expect(visualGoldenFixtures).toHaveLength(20)
    expect(new Set(visualGoldenFixtures.map((fixture) => fixture.id)).size).toBe(20)
  })

  it("keeps every canonical fixture surface-addressable", () => {
    for (const fixture of visualGoldenFixtures) {
      expect(fixture.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      expect(fixture.title.length).toBeGreaterThan(0)
      expect(fixture.surfaces.length).toBeGreaterThan(0)
      expect(fixture.tags.length).toBeGreaterThan(0)
      expect(fixture.valid).toBe(true)
    }
  })

  it("keeps explicit invalid fixtures separate from valid corpus records", () => {
    expect(visualGoldenInvalidFixtures).toHaveLength(5)
    expect(new Set(visualGoldenInvalidFixtures.map((fixture) => fixture.id)).size).toBe(5)
    expect(visualGoldenInvalidFixtures.every((fixture) => fixture.reason.length > 0)).toBe(true)
  })

  it("binds the dense fixture to a deterministic seed", () => {
    const dense = visualGoldenFixtures.find((fixture) => fixture.id === "dense-multistate-composite")
    expect(dense?.seed).toBe(20260912)
    expect(dense?.surfaces).toContain("console")
    expect(dense?.surfaces).toContain("print")
  })
})
