import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Flex from "@kaiju-ui/flex/src";
import Skeleton from "@kaiju-ui/skeleton/src";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Alpha/Skeleton",
  component: Skeleton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: {
      description: "Defines the width of the skeleton",
      control: {
        type: "range",
        min: 0,
        max: 1000,
      },
    },
    height: {
      description: "Defines the height of the skeleton",
      control: {
        type: "range",
        min: 0,
        max: 1000,
      },
    },
  },
} as ComponentMeta<typeof Skeleton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Flex alignItems="center" justifyContent="center">
    <Skeleton {...args} />
  </Flex>
);

Template.args = {
  width: 500,
  height: 300,
};
