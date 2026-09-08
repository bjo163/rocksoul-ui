import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { LegalApplicabilityMatrix } from "../components/legal-applicability-matrix"
import { legalApplicabilityAxes, legalResultVocabulary, legalReviewPipeline } from "../contracts/legal-intelligence"

describe("LegalApplicabilityMatrix", () => {
  it("renders every canonical axis, reviewed result state, and review stage as live text", () => {
    render(<LegalApplicabilityMatrix />)

    const axisList = screen.getByRole("list", { name: /applicability axes/i })
    for (const axis of legalApplicabilityAxes) {
      expect(within(axisList).getByText(axis.label)).toBeInTheDocument()
      expect(within(axisList).getByText(axis.question)).toBeInTheDocument()
    }

    for (const state of legalResultVocabulary) {
      expect(screen.getByText(state.label)).toBeInTheDocument()
    }

    const pipeline = screen.getByRole("list", { name: /legal review pipeline/i })
    for (const step of legalReviewPipeline) {
      expect(within(pipeline).getByText(step.label)).toBeInTheDocument()
    }

    expect(screen.getByText(/axis state is not itself a legal verdict/i)).toBeInTheDocument()
    expect(screen.getByText(/Text equivalent:/i)).toBeInTheDocument()
  })

  it("renders source-linked assessment basis without converting axis state into a verdict", () => {
    render(
      <LegalApplicabilityMatrix
        assessments={[
          {
            axisId: "temporal",
            state: "supported",
            basis: "The instrument record indicates the rule was in force for the assessed date.",
            sourceRefs: ["SRC-LAW-01", "AUTH-02"],
          },
        ]}
      />,
    )

    expect(screen.getByText(/instrument record indicates/i)).toBeInTheDocument()
    expect(screen.getByText(/SRC-LAW-01 · AUTH-02/)).toBeInTheDocument()
  })
})
