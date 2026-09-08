import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  staticDirs: ["../public"],
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(viteConfig) {
    return {
      ...viteConfig,
      // Storybook copies ../public through staticDirs. Disable Vite's second
      // publicDir copy so directory assets such as candidate-v1.3 are not
      // created twice during the static build.
      publicDir: false,
    }
  },
}

export default config
