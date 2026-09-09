import { describe, expect, it } from "vitest"
import { productionScreenAssetMap, semanticPrimitiveByNodeKind, semanticPrimitiveUrl } from "../contracts/semantic-asset-map"

describe("semantic asset mapping", () => {
  it("maps every provenance node to an atomic primitive", () => {
    expect(Object.keys(semanticPrimitiveByNodeKind)).toEqual(expect.arrayContaining(["story", "claim", "evidence", "source", "text", "event", "person", "law", "case", "location"]))
    expect(semanticPrimitiveUrl("graph-node")).toContain("semantic-primitives-pack/svg/graph-node.svg")
  })

  it("declares required families for each production screen", () => {
    for (const contract of Object.values(productionScreenAssetMap)) {
      expect(contract.required.length).toBeGreaterThan(0)
      expect(contract.allowed).toContain("primitive")
    }
  })
})
