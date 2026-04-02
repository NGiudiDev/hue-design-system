import React from "react";

import { Status } from "./Status";

const meta = {
  component: Status,
  title: "Components/Status",
};

export const Playground =  {
  args: {
    className: null,
    color: "primary",
    disabled: false,
    iconName: "shipped",
    invert: true,
    margin: "a-20",
    subtitle: "Este es el subtitulo",
    title: "Este es el titulo",
  },
  render: (args) => (
    <Status {...args} />
  ),
};

export default meta;