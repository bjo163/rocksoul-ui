import type { Meta, StoryObj } from "@storybook/react"
import { PerspectiveIntelligenceBoard } from "../components/perspective-intelligence"

const meta = {
  title: "Domains/PERSPECTIVE Intelligence",
  component: PerspectiveIntelligenceBoard,
  parameters: { layout: "fullscreen" },
  args: {
    className: "m-6",
    phenomenon: "AI and workforce transition",
    perspectives: [
      { id: "p1", label: "New York Fed", actorType: "ACADEMIC", position: "MIXED", framing: "SOCIAL", geography: "US-NY", salience: .86 },
      { id: "p2", label: "Dallas Fed", actorType: "ACADEMIC", position: "QUESTIONING", framing: "ECONOMIC", geography: "US-TX", salience: .9 },
      { id: "p3", label: "PwC", actorType: "CORPORATE", position: "SUPPORT", framing: "ECONOMIC", geography: "GLOBAL", salience: .82 },
      { id: "p4", label: "ILO", actorType: "GLOBAL", position: "QUESTIONING", framing: "SOCIAL", geography: "GLOBAL", salience: .91 },
      { id: "p5", label: "BKN", actorType: "GOVERNMENT", position: "SUPPORT", framing: "TECHNOLOGICAL", geography: "ID", salience: .88 },
    ],
    geography: [
      { id: "g1", label: "US-NY", count: 1 },
      { id: "g2", label: "US-TX", count: 1 },
      { id: "g3", label: "GLOBAL", count: 2 },
      { id: "g4", label: "ID", count: 1 },
    ],
    divergence: .96,
    convergence: .04,
    uncertainty: .25,
    coverage: { source: 1, actor: .8, geography: .8, language: .4, framing: .96, position: .96 },
    framingCells: [
      { actor: "ACADEMIC", framing: "SOCIAL", value: .75 },
      { actor: "ACADEMIC", framing: "ECONOMIC", value: .92 },
      { actor: "CORPORATE", framing: "ECONOMIC", value: .82 },
      { actor: "GLOBAL", framing: "SOCIAL", value: .91 },
      { actor: "GOVERNMENT", framing: "TECHNOLOGICAL", value: .88 },
    ],
    signals: [{ id: "s1", label: "Field disagreement remains high", type: "DIVERGENCE", confidence: .82, detail: "Multiple framing and position clusters remain active." }],
    reactions: [{ type: "CORRECTION", count: 1 }, { type: "WARNING", count: 1 }, { type: "ADOPTION", count: 1 }],
    provenance: [
      { id: "i", label: "ISSUE", count: 1, state: "complete" },
      { id: "s", label: "SOURCE", count: 5, state: "complete" },
      { id: "o", label: "OBSERVATION", count: 5, state: "complete" },
      { id: "p", label: "PERSPECTIVE", count: 5, state: "complete" },
      { id: "sg", label: "SIGNAL", count: 1, state: "active" },
      { id: "in", label: "INSIGHT", count: 1, state: "active" },
    ],
  },
} satisfies Meta<typeof PerspectiveIntelligenceBoard>

export default meta
type Story = StoryObj<typeof meta>
export const BootstrapField: Story = {}
