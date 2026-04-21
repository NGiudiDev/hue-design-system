import React from "react";
import PropTypes from "prop-types";

import { useMapContext } from "../hooks/useMapContext";

import { Marker, Tooltip } from "react-leaflet";

export const CustonMarket = (props) => {
  const {
    marker = null,
  } = props;

  const ctx = useMapContext();

  // Si hay un marker seleccionado y no es este, no se renderiza
  if (ctx.markerSelected && ctx.markerSelected !== marker) return null;

  if (marker.listItem) {
    return (
      <Marker
        draggable={marker.draggable}
        eventHandlers={{
          click: () => {
            ctx.setMarkerSelected(marker);
          },
          drag: (event) => {
            const { lat, lng } = event.target.getLatLng();
            marker.position = [lat, lng];
          }
        }}
        position={marker.position}
      >
        {marker.listItem && (
          <Tooltip>{marker.listItem}</Tooltip>
        )}
      </Marker>
    );
  }

  return (
    <Marker
      draggable={marker.draggable}
      eventHandlers={{
        drag: (event) => {
          const { lat, lng } = event.target.getLatLng();
          marker.position = [lat, lng];
        }
      }}
      position={marker.position}
    />
  );
};

CustonMarket.propTypes = {
  marker: PropTypes.shape({
    listItem: PropTypes.node,
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};