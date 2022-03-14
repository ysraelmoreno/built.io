import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Flex from "@kaiju-ui/flex/src";
import Collapse, { CollapseItem } from "@kaiju-ui/collapse/src";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Alpha/Collapse",
  component: Collapse,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Collapse>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Collapse> = (args) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={{ maxWidth: "1050px", margin: "0 auto", width: "100%" }}
  >
    <Collapse
      collapseTitle={args.collapseTitle}
      defaultValue={args.defaultValue}
      isMultiple={args.isMultiple}
      type={args.type}
    >
      <CollapseItem value="testing" title="Test 1">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin
        eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum
        id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
        sem. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin
        molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum
        sed sit amet dui. Nulla porttitor accumsan tincidunt. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
        velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
        amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat.
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie
        malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis
        at tellus.
      </CollapseItem>
      <CollapseItem value="testing1" title="Test 2">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin
        eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum
        id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
        sem. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin
        molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum
        sed sit amet dui. Nulla porttitor accumsan tincidunt. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
        velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
        amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat.
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie
        malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis
        at tellus.
      </CollapseItem>
      <CollapseItem value="testing2" title="Test 3">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin
        eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum
        id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
        sem. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin
        molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum
        sed sit amet dui. Nulla porttitor accumsan tincidunt. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
        velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
        amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat.
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie
        malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis
        at tellus.
      </CollapseItem>
    </Collapse>
  </Flex>
);
