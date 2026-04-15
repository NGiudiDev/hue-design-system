import React from "react";

import { FlexDocs } from "./Flex.docs";

import { Text } from "../Text/Text";
import { Flex } from "./Flex";

const meta = {
  argTypes: {
    children: {
      control: false,
      description: "Contenido que se renderiza dentro del Flex. Puede ser cualquier elemento React válido.",
    },
    direction: {
      control: { type: "select" },
      description: "Define la dirección del eje principal del contenedor flex.",
      options: ["row", "column"],
    },
    hAlign: {
      control: { type: "text" },
      description: "Controla la alineación en el eje horizontal. Acepta valores CSS válidos para align-items o justify-content según la dirección.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen exterior del contenedor. Acepta tokens de espaciado del sistema (ej: 'a-16', 'x-8 y-16').",
    },
    padding: {
      control: { type: "text" },
      description: "Define el espaciado interno del contenedor. Acepta tokens de espaciado del sistema (ej: 'a-16', 'x-8 y-16').",
    },
    vAlign: {
      control: { type: "text" },
      description: "Controla la alineación en el eje vertical. Acepta valores CSS válidos para justify-content o align-items según la dirección.",
    },
  },
  component: Flex,
  parameters: {
    docs: {
      page: FlexDocs,
    },
  },
  tags: ["autodocs"],
  title: "Layout/Flex",
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    direction: "row",
    hAlign: "center",
    margin: "a-0",
    padding: "a-0",
    vAlign: "center",
  },
  render: (args) => (
    <Flex {...args}>
      <Text size="bodyRegular">Texto 1</Text>
      <Text size="bodyRegular">Texto 2</Text>
      <Text size="bodyRegular">Texto 3</Text>
    </Flex>
  ),
};

export default meta;