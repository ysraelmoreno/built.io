module.exports = {
  stories: [
    "../docs/**/*.stories.mdx",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-measure",
    "@storybook/addon-viewport",
    "storybook-addon-outline",
  ],
  framework: "@storybook/react",
};
