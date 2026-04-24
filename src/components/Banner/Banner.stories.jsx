import React from "react";

import { BannerDocs } from "./Banner.docs";

import { Banner } from "./Banner";

const meta = {
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Clase CSS personalizada para aplicar al componente.",
    },
    description: {
      control: { type: "text" },
      description: "Texto descriptivo que complementa el título. Acepta strings o nodos React.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del componente. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').",
    },
    title: {
      control: { type: "text" },
      description: "Texto principal del banner. Acepta strings o nodos React.",
    },
    type: {
      control: { type: "select" },
      description: "Define el tipo visual del banner. Determina el color e ícono mostrado.",
      options: ["error", "highlight", "info", "success", "warning"],
    },
  },
  component: Banner,
  parameters: {
    docs: {
      page: BannerDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Banner",
};

export const Playground = {
  args: {
    description: "This is a description for the banner. It provides more details about the message.",
    margin: "a-0",
    title: "This is a banner title",
    type: "info",
  },
  render: (args) => (
    <Banner {...args} />
  ),
};

export default meta;