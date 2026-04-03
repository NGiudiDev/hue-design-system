import React from "react";

import { SkeletonDocs } from "./Skeleton.docs";

import { Skeleton } from "./Skeleton";

const meta = {
  argTypes: {
    height: {
      control: { type: "text" },
      description: "Define la altura del skeleton rectangular. No aplica al tipo 'circle'.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del componente. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').",
    },
    type: {
      control: { type: "select" },
      description: "Define la forma del skeleton. 'rect' para rectangular y 'circle' para circular.",
      options: ["rect", "circle"],
    },
    width: {
      control: { type: "text" },
      description: "Define el ancho del skeleton rectangular. No aplica al tipo 'circle'.",
    },
  },
  component: Skeleton,
  parameters: {
    docs: {
      page: SkeletonDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Skeleton",
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    height: "12px",
    margin: "a-0",
    type: "rect",
    width: "100%",
  },
  render: (args) => (
    <Skeleton {...args} />
  ),
};

export const Circle = {
  args: {
    margin: "a-0",
    type: "circle",
  },
  render: (args) => (
    <Skeleton {...args} />
  ),
};

export default meta;