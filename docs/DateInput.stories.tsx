import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Flex from "@kaiju-ui/flex/src";
import DateInput from "@kaiju-ui/date-input/src";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Alpha/DateInput",
  component: DateInput,
  parameters: {
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      description: "Defines the label of the button",
      control: {
        type: "text",
      },
    },
    name: {
      description: "Defines the name of the button",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof DateInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof DateInput> = (args) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={{ maxWidth: "550px", margin: "0 auto", width: "100%" }}
  >
    <DateInput {...args} />
  </Flex>
);

Template.args = {
  label: "Teste",
  name: "test",
};
