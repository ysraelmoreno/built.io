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
    placeholder: {
      description: "Placeholder do input",
      control: "text",
      type: "string",
    },
    icon: {
      description: "Ícone do input",
      control: {
        type: "select",
        options: { NoIcon, FiMail, FiUser, FiLock },
      },
    },
    floatingLabel: {
      description: "Define se o placeholder será flutuante",
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
  placeholder: "Name",
  icon: FiUser,
};

export const WithNoFloatingLabel = Template.bind({});

WithNoFloatingLabel.args = {
  floatingLabel: false,
  placeholder: "Name",
  icon: FiUser,
};

export const WithNoIcon = Template.bind({});

WithNoIcon.args = {
  placeholder: "Name",
};

export const WithDefaultValue = Template.bind({});

WithDefaultValue.args = {
  placeholder: "Name",
  defaultValue: "John Doe",
};

export const Alternative = Template.bind({});

Alternative.args = {
  placeholder: "Email",
  icon: FiMail,
  variant: "alternative",
};

export const AlternativeWithNoIcon = Template.bind({});

AlternativeWithNoIcon.args = {
  placeholder: "Email",
  variant: "alternative",
};

export const AlternativeWithDefaultValue = Template.bind({});

AlternativeWithDefaultValue.args = {
  placeholder: "Email",
  variant: "alternative",
  defaultValue: "John Doe",
};

export const AlternativeWithNoFloatingLabel = Template.bind({});

AlternativeWithNoFloatingLabel.args = {
  floatingLabel: false,
  placeholder: "Email",
  variant: "alternative",
};
