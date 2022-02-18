import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs, { TabsContent, TabsItem, TabsList } from "@kaiju-ui/tabs/src";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Alpha/Tabs",
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      description: "Defines the variant of the button",
      options: ["primary", "secondary", "alternative", "ghost"],
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs>
    <TabsList defaultValue="personal-data">
      <TabsItem value="personal-data">Personal Data</TabsItem>
      <TabsItem value="login-data">Login Data</TabsItem>
    </TabsList>
    <TabsContent value="personal-data">
      <p>Personal data</p>
    </TabsContent>
    <TabsContent value="login-data">
      <p>Login data</p>
    </TabsContent>
  </Tabs>
);

Template.args = {
  children: "Teste",
};
