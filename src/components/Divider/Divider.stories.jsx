import React from "react";

import { DividerDocs } from "./Divider.docs";

import { Divider } from "./Divider";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Define el color de fondo del divider. Acepta tokens de color del tema (ej: 'primary.main', 'error.light', 'success.dark').",
    },
    height: {
      control: { type: "number" },
      description: "Define la altura del divider en píxeles (o el ancho si la orientación es vertical).",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del divider. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').",
    },
    orientation: {
      control: { type: "select" },
      description: "Define la orientación del divider.",
      options: ["horizontal", "vertical"],
    },
  },
  component: Divider,
  parameters: {
    docs: {
      page: DividerDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Divider",
  
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    color: "primary.main",
    height: 1,
    margin: "a-0",
    orientation: "horizontal",
  },
  render: (args) => (
    <div style={{ height: "200px", width: "100%" }}>
      <Divider {...args} />
    </div>
  ),
};

export default meta;