import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ConfidenceMeter } from "../components/confidence-meter"
import { QualifiedReferenceView } from "../components/qualified-reference"
import { RecordFieldGrid } from "../components/record-field-grid"
import { parseQualifiedReference } from "../contracts/ecosystem-domains"
import { semanticStatusVariant } from "../contracts/status-semantics"

describe("research semantic contracts", () => {
  it("resolves qualified references without consumer prefix branches", () => {
    expect(parseQualifiedReference("legend:EVT-JERUSALEM-70")).toMatchObject({ domain: "EVENT", kind: "event", repository: "rocksoul-legend" })
    expect(parseQualifiedReference("legend:PLC-JERUSALEM")).toMatchObject({ domain: "EVENT", kind: "location" })
    expect(parseQualifiedReference("superhero:SRC-SH-001")).toMatchObject({ domain: "PERSON", kind: "source" })
    expect(parseQualifiedReference("mftl:CAND-001")).toMatchObject({ domain: "STORY", kind: "story" })
  })

  it("resolves data statuses through the shared semantic map", () => {
    expect(semanticStatusVariant("strongly_supported")).toBe("supported")
    expect(semanticStatusVariant("anonymous")).toBe("unresolved")
    expect(semanticStatusVariant("contradicts")).toBe("disputed")
    expect(semanticStatusVariant("new-status")).toBe("neutral")
  })

  it("renders confidence and arbitrary nested record fields accessibly", () => {
    render(
      <>
        <ConfidenceMeter value={0.93} />
        <QualifiedReferenceView value="legend:EVT-JERUSALEM-70" />
        <RecordFieldGrid record={{ id: "X-1", source_refs: ["superhero:SRC-SH-001"], review: { status: "canonical" } }} />
      </>,
    )
    expect(screen.getByRole("meter", { name: "Confidence" })).toHaveAttribute("aria-valuenow", "93")
    expect(screen.getAllByText("legend:EVT-JERUSALEM-70").length).toBeGreaterThan(0)
    expect(screen.getByText("canonical")).toBeInTheDocument()
  })
})
