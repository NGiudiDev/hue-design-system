import { use } from "react";

import { MapContext } from "../context/MapContext";

export const useMapContext = () => {
  return use(MapContext);
};