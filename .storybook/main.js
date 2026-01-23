/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@etchteam/storybook-addon-status",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "viteFinal": async (config) => {
    return {
      ...config,
      base: "/ngiudi-hue-ds/",
    };
  },
};

export default config;