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
        listItem: <Text>Sucursal 1</Text>,
        position: [-34.6037, -58.3816],
      },
      { 
        listItem: <Text>Sucursal 2</Text>,
        position: [-34.6118, -58.3960],
      },
      { 
        listItem: <Text>Sucursal 3</Text>,
        position: [-34.5950, -58.3700],
      },
      { 
        listItem: <Text>Sucursal 4</Text>,
        position: [-34.6200, -58.3650],
      },
      { 
        listItem: <Text>Sucursal 5</Text>,
        position: [-34.5880, -58.4100],
      },
      { 
        listItem: <Text>Sucursal 6</Text>,
        position: [-34.6300, -58.4200],
      },
      { 
        listItem: <Text>Sucursal 7</Text>,
        position: [-34.5750, -58.3500],
      },
      { 
        listItem: <Text>Sucursal 8</Text>,
        position: [-34.6150, -58.3400],
      },
      { 
        listItem: <Text>Sucursal 9</Text>,
        position: [-34.6400, -58.3900],
      },
      { 
        listItem: <Text>Sucursal 10</Text>,
        position: [-34.5820, -58.4300],
      },
      { 
        listItem: <Text>Sucursal 11</Text>,
        position: [-34.6250, -58.3550],
      },
      { 
        listItem: <Text>Sucursal 12</Text>,
        position: [-34.5900, -58.3800],
      },
      { 
        listItem: <Text>Sucursal 13</Text>,
        position: [-34.6080, -58.4050],
      },
      { 
        listItem: <Text>Sucursal 14</Text>,
        position: [-34.6330, -58.3700],
      },
      { 
        listItem: <Text>Sucursal 15</Text>,
        position: [-34.5970, -58.4200],
      },
      { 
        listItem: <Text>Sucursal 16</Text>,
        position: [-34.6180, -58.3300],
      },
      { 
        listItem: <Text>Sucursal 17</Text>,
        position: [-34.5700, -58.3950],
      },
      { 
        listItem: <Text>Sucursal 18</Text>,
        position: [-34.6450, -58.3600],
      },
      { 
        listItem: <Text>Sucursal 19</Text>,
        position: [-34.5850, -58.3650],
      },
      { 
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