import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs, { TabsContent, TabsItem, TabsList } from "@kaiju-ui/tabs/src";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Alpha/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Tabs> = (args) => (
  <div style={{ width: "500px" }}>
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
  </div>
);

Template.args = {
  children: "Teste",
};
