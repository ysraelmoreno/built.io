export const entries = "./docs/**/*.stories.@(js|jsx|ts|tsx)";

export const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-controls",
  "@storybook/addon-measure",
  "storybook-addon-outline",
];

export const webpack = async (config, env) => {
  return config;
};
