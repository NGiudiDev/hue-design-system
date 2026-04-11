import React from "react";

import { Image } from "./Image";

import { ImageDocs } from "./Image.docs";

const meta = {
  argTypes: {
    alt: {
      control: { type: "text" },
      description: "Texto alternativo que describe la imagen. Obligatorio para accesibilidad.",
    },
    height: {
      control: { type: "number" },
      description: "Altura explícita de la imagen en píxeles. Si es 0, se usa el valor por defecto según el tamaño.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del componente. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').",
    },
    shape: {
      control: { type: "select" },
      description: "Define la forma de la imagen.",
      options: ["circle", "square"],
    },
    size: {
      control: { type: "select" },
      description: "Tamaño predefinido de la imagen usando tokens del sistema.",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    src: {
      control: { type: "text" },
      description: "URL de la imagen a mostrar. Si no se proporciona, se muestra un fallback.",
    },
    width: {
      control: { type: "number" },
      description: "Ancho explícito de la imagen en píxeles. Si es 0, se usa el valor por defecto según el tamaño.",
    },
  },
  component: Image,
  parameters: {
    docs: {
      page: ImageDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Image",
};

// Playground interactivo para probar todas las props
export const Playground = {
  args:{
    alt:"playground_image",
    size:"sm",
    shape:"square",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlmWueUsfk-7eDhFEOyKZAUkQVLj2fpWqSw&s",
  },
  render:(args) => (
    <Image {...args} />
  ),
};

export default meta;