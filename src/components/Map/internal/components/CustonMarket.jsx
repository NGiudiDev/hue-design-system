import React from "react";
import PropTypes from "prop-types";

import { useMapContext } from "../hooks/useMapContext";

import { Marker, Tooltip } from "react-leaflet";
import { LottieMarker } from "./LottieMarker";

export const CustonMarket = (props) => {
  const {
    marker = null,
  } = props;

  const ctx = useMapContext();

  // Si hay un marker seleccionado y no es este, no se renderiza
  if (ctx.markerSelected && ctx.markerSelected !== marker && marker.listItem) {
    return null;
  }

  const eventHandlers = {
    click: () => {
      if (marker.listItem) {
        ctx.setMarkerSelected(marker);
      }
    },
    drag: (e) => {
      const { lat, lng } = e.target.getLatLng();
      marker.position = [lat, lng];
    },
  };

  const tooltip = marker.listItem && <Tooltip>{marker.listItem}</Tooltip>;

  if (marker.lottieIcon) {
    return (
      <LottieMarker marker={marker} eventHandlers={eventHandlers}>
        {tooltip}
      </LottieMarker>
    );
  }

  return (
    <Marker
      draggable={marker.draggable}
      eventHandlers={eventHandlers}
      position={marker.position}
    >
      {tooltip}
    </Marker>
  );
};

CustonMarket.propTypes = {
  marker: PropTypes.shape({
    draggable: PropTypes.bool,
    listItem: PropTypes.node,
    lottieAnchor: PropTypes.arrayOf(PropTypes.number),
    lottieIcon: PropTypes.object,
    lottieSize: PropTypes.arrayOf(PropTypes.number),
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};