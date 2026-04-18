import React from "react";

import { Map } from "./Map";

const meta = {
  argTypes: {
    
  },
  component: Map,
  parameters: {
    /* docs: {
      page: MapDocs,
    }, */
  },
  tags: ["autodocs"],
  title: "Components/Map",
};

export const Playground = {
  args: {
    center: [-34.6037, -58.3816],
    enableZoom: true,
    height: "400px",
    width: "100%",
    zoom: 13,
  },
  render: (args) => (
    <Map {...args} />
  ),
};

export default meta;