import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Flex from "@kaiju-ui/flex/src";
import Checkbox from "@kaiju-ui/checkbox/src";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Alpha/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      description: "Defines the text of the Checkbox",
      control: "text",
    },
    name: {
      description: "Defines the name of the componet",
      control: "text",
    },
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={{
      button: {
        maxWidth: "200px",
      },
    }}
  >
    <Checkbox name={args.name}>{args.children}</Checkbox>
  </Flex>
);

Template.args = {
  children: "Teste",
};
