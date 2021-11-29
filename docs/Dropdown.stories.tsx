import Dropdown from "../packages/Dropdown/src/index";
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
  title: "Design System/Dropdown",
  component: Dropdown,
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

const Template: Story = (args) => (
  <div style={{ width: "200px" }}>
    <Dropdown label="Click me!">
      <ul>
        <li>Teste 1</li>
        <li>Teste 2</li>
        <li>Teste 3</li>
        <li>Teste 4</li>
        <li>Teste 5</li>
      </ul>
    </Dropdown>
  </div>
);

export const Primary = Template.bind({});
