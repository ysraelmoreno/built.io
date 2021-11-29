import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Input from "../packages/Input/src";
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

const NoIcon = null;

export default {
  title: "Design System/Input",
  component: Input,
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
    label: {
      description: "Label do input",
      control: "text",
      type: "string",
    },
    placeholder: {
      description: "Placeholder do input",
      control: "text",
      type: "string",
      defaultValue: "",
    },
    icon: {
      description: "Ícone do input",
      control: {
        type: "select",
        options: { NoIcon, FiMail, FiUser, FiLock },
      },
    },
    floatingLabel: {
      description: "Define se o label será flutuante",
      control: "boolean",
      type: "boolean",
    },
  },
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: "200px" }}>
    <Input {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Name",
  icon: FiUser,
};

export const WithNoFloatingLabel = Template.bind({});

WithNoFloatingLabel.args = {
  floatingLabel: false,
  label: "Name",
  icon: FiUser,
};

export const WithNoIcon = Template.bind({});

WithNoIcon.args = {
  label: "Name",
};

export const WithDefaultValue = Template.bind({});

WithDefaultValue.args = {
  label: "Name",
  defaultValue: "John Doe",
};

export const Alternative = Template.bind({});

Alternative.args = {
  label: "Email",
  icon: FiMail,
  variant: "alternative",
};

export const AlternativeWithNoIcon = Template.bind({});

AlternativeWithNoIcon.args = {
  label: "Email",
  variant: "alternative",
};

export const AlternativeWithDefaultValue = Template.bind({});

AlternativeWithDefaultValue.args = {
  label: "Email",
  variant: "alternative",
  defaultValue: "John Doe",
};

export const AlternativeWithNoFloatingLabel = Template.bind({});

AlternativeWithNoFloatingLabel.args = {
  floatingLabel: false,
  label: "Email",
  variant: "alternative",
};
