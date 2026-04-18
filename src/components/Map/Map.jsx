import React from "react";
import PropTypes from "prop-types";

import { MapContainer, TileLayer } from "react-leaflet";

import { Styles } from "./Map.styles";

import "leaflet/dist/leaflet.css";

export const Map = (props) => {
  const {
    center = [0, 0],
    enableZoom = false,
    height = "400px",
    width = "100%",
    zoom = 13,
  } = props;

  return (
    <Styles.MapWrapper $height={height} $width={width}>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={enableZoom}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.google.com/maps/">Google Maps</a>'
          maxNativeZoom={20}
          maxZoom={20}
          subdomains={["0", "1", "2", "3"]}
          url="https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
      </MapContainer>
    </Styles.MapWrapper>
  );
};

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  enableZoom: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  zoom: PropTypes.number,
};