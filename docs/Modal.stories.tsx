import { FiChevronRight } from "react-icons/fi";
import Modal from "../packages/Modal/src";
import Button from "../packages/Button/src";
import Input from "../packages/Input/src";
import { Story, Meta } from "@storybook/react/types-6-0";
import { useState } from "react";

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
    console.log("handleClose");
    setOpen((prevState) => !prevState);
  };

  return (
    <div style={{ width: "200px" }}>
      <Button onClick={handleClose}>Open Modal</Button>
      <Modal open={open} onHide={() => setOpen(!open)} {...args}>
        <div style={{ padding: "30px" }}>
          <div
            style={{
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h5 style={{ color: "#c3c3c3" }}>Build Your Trip</h5>
              <FiChevronRight style={{ stroke: "#c3c3c3", margin: "0 10px" }} />
              <h5 style={{ color: "#c3c3c3" }}>Create a Category</h5>
            </div>
            <Button variants="ghost" onClick={handleClose} css="width: 30px;">
              X
            </Button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Input placeholder="Category Name" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Button variants="ghost" css="width: fit-content;">
                #ffc500
              </Button>
              <Button css="width: fit-content;">Create category</Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
