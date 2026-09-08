import type { Meta, StoryObj } from "@storybook/react-vite"
import { LegalApplicabilityMatrix } from "../components/legal-applicability-matrix"

const meta = {
  title: "Domains/LAW Applicability Matrix",
  component: LegalApplicabilityMatrix,
  parameters: { layout: "fullscreen" },
  args: { className: "m-6" },
} satisfies Meta<typeof LegalApplicabilityMatrix>

export default meta
type Story = StoryObj<typeof meta>

export const Unassessed: Story = {}

export const MixedAxisStates: Story = {
  args: {
    assessments: [
      { axisId: "temporal", state: "supported", basis: "Illustrative source-linked temporal assessment.", sourceRefs: ["SRC-LAW-A"] },
      { axisId: "territorial", state: "disputed", basis: "Illustrative competing territorial positions remain open." },
      { axisId: "personal", state: "unresolved", basis: "Illustrative actor scope has not been established." },
      { axisId: "subject-matter", state: "not-supported", basis: "Illustrative record does not currently support subject-matter scope." },
    ],
  },
}
