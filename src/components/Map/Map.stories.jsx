import React from "react";

import { Map } from "./Map";
import { Text } from "../Text/Text";

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
    enableZoom: false,
    height: "400px",
    markers: [
      {
        draggable: false,
        listItem: <Text>Sucursal 1</Text>,
        position: [-34.6037, -58.3816],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 2</Text>,
        position: [-34.6118, -58.3960],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 3</Text>,
        position: [-34.5950, -58.3700],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 4</Text>,
        position: [-34.6200, -58.3650],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 5</Text>,
        position: [-34.5880, -58.4100],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 6</Text>,
        position: [-34.6300, -58.4200],
      },
      {
        draggable: true,
        //listItem: <Text>Sucursal 7</Text>,
        position: [-34.5750, -58.3500],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 8</Text>,
        position: [-34.6150, -58.3400],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 9</Text>,
        position: [-34.6400, -58.3900],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 10</Text>,
        position: [-34.5820, -58.4300],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 11</Text>,
        position: [-34.6250, -58.3550],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 12</Text>,
        position: [-34.5900, -58.3800],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 13</Text>,
        position: [-34.6080, -58.4050],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 14</Text>,
        position: [-34.6330, -58.3700],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 15</Text>,
        position: [-34.5970, -58.4200],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 16</Text>,
        position: [-34.6180, -58.3300],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 17</Text>,
        position: [-34.5700, -58.3950],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 18</Text>,
        position: [-34.6450, -58.3600],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 19</Text>,
        position: [-34.5850, -58.3650],
      },
      {
        draggable: false,
        listItem: <Text>Sucursal 20</Text>,
        position: [-34.6010, -58.4350],
      },
    ],
    showList: true,
    width: "100%",
    zoom: 13,
  },
  render: (args) => (
    <Map {...args} />
  ),
};

export default meta;