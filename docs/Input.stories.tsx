import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "@kaiju-ui/input/src";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Alpha/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      description: "Define the label of the Input",
      control: {
        type: "text",
      },
    },
    placeholder: {
      description: "Define the placeholder of the Input",
      control: {
        type: "text",
      },
    },
    variation: {
      description: "Define the variation of the Input",
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    theme: {
      description: "Define the theme of the Input",
      control: {
        type: "radio",
        options: ["primary", "light"],
      },
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Input> = (args) => (
  <div
    style={{
      padding: "20px",
    }}
  >
    <Input {...args} />
  </div>
);

Template.args = {
  type: "text",
  label: "Insert your email",
};
