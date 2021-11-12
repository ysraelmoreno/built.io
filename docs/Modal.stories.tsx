import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Modal from "../packages/Modal/src";
import Button from "../packages/Button/src";
import { Story, Meta } from "@storybook/react/types-6-0";
import { useCallback, useState } from "react";

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
  title: "Design System/Modal",
  component: Modal,
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
  argTypes: {},
} as Meta;

const Template: Story = (args) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div style={{ width: "200px" }}>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Modal open={open} onHide={handleClose} {...args}>
        <div
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <h5 style={{ color: "#c3c3c3" }}>Modal</h5>
          <Button
            variants="ghost"
            onClick={() => setOpen(!open)}
            css="width: 30px;"
          >
            X
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
