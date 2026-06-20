import React from "react";

import { StatusDocs } from "./Status.docs";

import { Status } from "./Status";

const meta = {
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Clase CSS personalizada para aplicar al componente.",
    },
    color: {
      control: { type: "text" },
      description: "Define el color del ícono. Acepta tokens de color del tema (ej: 'primary', 'error', 'success').",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Deshabilita el componente, aplicando estilos de estado inactivo.",
    },
    iconName: {
      control: { type: "text" },
      description: "Nombre del ícono a mostrar. Debe coincidir con un ícono registrado en el tema.",
    },
    invert: {
      control: { type: "boolean" },
      description: "Invierte los colores del ícono, mostrando borde y fondo transparente.",
    },
    loading: {
      control: { type: "boolean" },
      description: "Muestra un estado de carga, reemplazando el contenido del componente con un esqueleto de carga.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del componente. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').",
    },
    subtitle: {
      control: { type: "text" },
      description: "Texto secundario que se muestra debajo del título.",
    },
    title: {
      control: { type: "text" },
      description: "Texto principal que se muestra junto al ícono.",
    },
  },
  component: Status,
  parameters: {
    docs: {
      page: StatusDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Status",
};

export const Playground = {
  args: {
    color: "primary",
    disabled: false,
    iconName: "shipped",
    invert: true,
    loading: false,
    margin: "a-20",
    subtitle: "Este es el subtitulo",
    title: "Este es el titulo",
  },
  render: (args) => (
    <Status {...args} />
  ),
};

export default meta;