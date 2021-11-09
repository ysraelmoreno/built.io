import Button, { ButtonProps } from "../packages/Button/src/index";
import { Story, Meta } from "@storybook/react/types-6-0";

const componentDescription = `
---

Um botão é o componente considerado o mais simples, pois server para ele realizar a ação de um formulário, fechar uma modal ou simplesmente executar uma ação.

### Como usar

<hr>

Importe o componente:

import Button from "@built-io/button";

Modifique os controles abaixo para interagir com as propriedades do componente:
`;

export default {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  docs: {
    source: {
      type: "code",
    },
  },
  argTypes: {
    disabled: {
      label: "disabled",
      description: "Desabilita o botão",
      control: {
        type: "boolean",
      },
    },
    variants: {
      control: {
        type: "radio",
        options: ["primary", "alternative", "ghost", "danger"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <div style={{ width: "200px" }}>
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  children: "Primary",
  variants: "primary",
};

export const Alternative = Template.bind({});

Alternative.args = {
  children: "Alternative",
  variants: "alternative",
};

export const Danger = Template.bind({});

Danger.args = {
  children: "Danger",
  variants: "danger",
};

export const Ghost = Template.bind({});

Ghost.args = {
  children: "Ghost",
  variants: "ghost",
};
