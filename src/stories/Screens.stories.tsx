import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  LandingHeroScreen,
  ManifestoScreen,
  RepositoriesOverviewScreen,
  RocksoulCharacterScreen,
} from "../screens/landing"
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

function Dark({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">{children}</div>
}

export const S01LandingHero: Story = { render: () => <Dark><LandingHeroScreen /></Dark> }
export const S02Manifesto: Story = { render: () => <Dark><ManifestoScreen /></Dark> }
export const S03RocksoulCharacter: Story = { render: () => <Dark><RocksoulCharacterScreen /></Dark> }
export const S04RepositoriesOverview: Story = { render: () => <Dark><RepositoriesOverviewScreen /></Dark> }
export const S05Story: Story = { render: () => <Dark><StoryScreen /></Dark> }
export const S06Event: Story = { render: () => <Dark><EventScreen /></Dark> }
export const S07Person: Story = { render: () => <Dark><PersonScreen /></Dark> }
export const S08RGBL: Story = { render: () => <Dark><RGBLScreen /></Dark> }
export const S09AWS: Story = { render: () => <Dark><AWSScreen /></Dark> }
export const S10PublicCase: Story = { render: () => <MW0042Overview /> }
export const S11Correlation: Story = { render: () => <Dark><CorrelationScreen /></Dark> }
export const S12AWSLegal: Story = { render: () => <Dark><AWSLegalScreen /></Dark> }
export const S13Community: Story = { render: () => <CommunityScreen /> }
export const S14Auth: Story = { render: () => <AuthScreen /> }
export const S15Platform: Story = { render: () => <PlatformScreen /> }
export const S16DesignSystem: Story = { render: () => <Dark><DesignSystemScreen /></Dark> }
