
import React from "react";

import { StatusProgress } from "./StatusProgress";

const meta = {
  title: "Components/StatusProgress",
  component: StatusProgress,
};

const now = new Date().getTime();

export const Playground = {
  args: {
    statuses: [
      {
        title: "Stock reservado",
        subtitle: "120 unidades",
        icon: "orders",
        status: "success",
        at: now - 120 * 60 * 60 * 1000, // 120 horas atrás
      },
      {
        title: "Preparado",
        subtitle: "75 unidades",
        icon: "box",
        status: "grey",
        at: now - 75 * 60 * 60 * 1000, // 75 horas atrás
      },
      {
        title: "Despachado",
        subtitle: "50 unidades",
        icon: "loading",
        status: "highlight",
        at: now + 12 * 60 * 60 * 1000, // 12 horas en el futuro
      },
      {
        title: "Entrega",
        subtitle: "30 unidades",
        icon: "home",
        status: "success",
        at: now + 3 * 24 * 60 * 60 * 1000, // 3 días en el futuro
      },
    ],
  },
  render: (args) => (
    <StatusProgress {...args} />
  ),
};

export default meta;