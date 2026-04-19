import React, { useState } from "react";
import PropTypes from "prop-types";

export const MapContext = React.createContext();

export const MapProvider = (props) => {
  const { children } = props;
  
  const [markerSelected , setMarkerSelected] = useState(null);

  const valuesObj = {
    markerSelected,
    setMarkerSelected,
  };

  return (
    <MapContext.Provider value={valuesObj}>
      {children}
    </MapContext.Provider>
  );
};

MapProvider.propTypes = {
  children: PropTypes.node,
};