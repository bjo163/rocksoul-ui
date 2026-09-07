import type { Meta, StoryObj } from "@storybook/react-vite"
import { LandingScreen } from "../screens/landing"
import { StoryScreen, EventScreen, PersonScreen, RGBLScreen, AWSScreen } from "../screens/domain-screens"
import { MW0042Overview } from "../screens/mw0042-overview"
import { CorrelationScreen } from "../screens/correlation"
import { AWSLegalScreen } from "../screens/aws-legal"
import { CommunityScreen } from "../screens/community"
import { AuthScreen } from "../screens/auth"
import { PlatformScreen } from "../screens/platform"
import { DesignSystemScreen } from "../screens/design-system"

const meta = {
  title: "16 Screen Reference",
  parameters: { layout: "fullscreen" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const S01to04Landing: Story = { render: () => <LandingScreen /> }
export const S05Story: Story = { render: () => <StoryScreen /> }
export const S06Event: Story = { render: () => <EventScreen /> }
export const S07Person: Story = { render: () => <PersonScreen /> }
export const S08RGBL: Story = { render: () => <RGBLScreen /> }
export const S09AWS: Story = { render: () => <AWSScreen /> }
export const S10PublicCase: Story = { render: () => <MW0042Overview /> }
export const S11Correlation: Story = { render: () => <CorrelationScreen /> }
export const S12AWSLegal: Story = { render: () => <AWSLegalScreen /> }
export const S13Community: Story = { render: () => <CommunityScreen /> }
export const S14Auth: Story = { render: () => <AuthScreen /> }
export const S15Platform: Story = { render: () => <PlatformScreen /> }
export const S16DesignSystem: Story = { render: () => <DesignSystemScreen /> }
