import Progress from "../packages/Progress/src";
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
  title: "Design System/Progress",
  component: Progress,
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
  const [percent, setPercent] = useState(0);

  return (
    <div style={{ width: "200px" }}>
      <Progress percent={percent} {...args} />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
