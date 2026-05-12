import { TabsDocs } from "./Tabs.docs";

import { Tabs } from "./Tabs";

const meta = {
  component: Tabs,
  parameters: {
    docs: {
      page: TabsDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Tabs",  
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    active: "",
    className: "",
    margin: "a-16",
    onClick: null,
    tabs: [
      {
        count: 122000,
        label: "Label 1",
        value: "value",
      },
      {
        count: 500000,
        label: "Label 2",
        value: "value2",
      },
      {
        count: 12200000000,
        label: "Label 3 con texto largo",
        value: "value3",
      },
      {
        icon: "truck",
        label: "Label 3",
        value: "value4",
      },
    ],
  },
  render: (args) => (
    <Tabs {...args} />
  ),
};

export default meta;