import React from "react";

import { Image } from "./Image";

import { ImageDocs } from "./Image.docs";

const meta = {
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
  args: {
    alt: "playground_image",
    size: "sm",
    shape: "square",
    src: null,
  },
  render: (args) => (
    <Image {...args} />
  ),
};

export default meta;