import React from "react";

import { Banner } from "./Banner";

const meta = {
  component: Banner,
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