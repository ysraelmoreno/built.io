import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Flex from "@kaiju-ui/flex/src";
import Button from "@kaiju-ui/button/src";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Alpha/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: {
      description: "Defines if the button is disabled",
      control: "boolean",
    },
    variant: {
      description: "Defines the variant of the button",
      options: ["primary", "secondary", "alternative", "ghost"],
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Button> = (args) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={{
      button: {
        maxWidth: "200px",
      },
    }}
  >
    <Button {...args} />
  </Flex>
);

Template.args = {
  children: "Teste",
};
