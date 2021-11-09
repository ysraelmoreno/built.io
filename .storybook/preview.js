export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: "docs",
  previewTabs: {
    canvas: {
      hidden: false,
    },
    "storybook/docs/panel": { index: -1 },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
