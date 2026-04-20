import React from "react";
import PropTypes from "prop-types";

import { MapProvider } from "./internal/context/MapContext";

import { MarkersList } from "./internal/components/MarkersList/MarkersList";

import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

import { Styles } from "./Map.styles";

import "leaflet/dist/leaflet.css";

export const Map = (props) => {
  const {
    center = [0, 0],
    enableZoom = false,
    height = "400px",
    markers = [],
    showList = false,
    width = "100%",
    zoom = 13,
  } = props;

  return (
    <MapProvider>
      <Styles.MapWrapper $height={height} $width={width}>
        {/* Listado de Marcadores */}
        {showList && (
          <MarkersList markers={markers} />
        )}

        {/* Mapa de leaflet */}
        <MapContainer attributionControl={false} center={center} zoom={zoom} scrollWheelZoom={enableZoom}>
          <TileLayer
            attribution='Map data &copy; <a href="https://www.google.com/maps/">Google Maps</a>'
            maxNativeZoom={20}
            maxZoom={20}
            subdomains={["0", "1", "2", "3"]}
            url="https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          />

          {markers.map((marker) => (
            <Marker
              draggable={marker.draggable}
              key={`map-marker-${marker.position[0]}-${marker.position[1]}`}
              position={marker.position}
              onDrag={(event) => {
                const { lat, lng } = event.target.getLatLng();
                marker.position = [lat, lng];
              }}
            >
              {marker.listItem && (
                <Tooltip>{marker.listItem}</Tooltip>
              )}
            </Marker>
          ))}
        </MapContainer>
      </Styles.MapWrapper>
    </MapProvider>
  );
};

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  enableZoom: PropTypes.bool,
  height: PropTypes.string,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      listItem: PropTypes.node,
      position: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ),
  showList: PropTypes.bool,
  width: PropTypes.string,
  zoom: PropTypes.number,
};