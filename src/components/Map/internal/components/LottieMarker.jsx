import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Marker } from "react-leaflet";
import L from "leaflet";

import lottie from "lottie-web";

export const LottieMarker = (props) => {
  const {
    children,
    eventHandlers,
    marker,
  } = props;

  const markerRef = useRef(null);
  const lottieRef = useRef(null);

  // Monta o re-monta la animación Lottie tras cada render
  const mountLottie = () => {
    if (!markerRef.current) return;

    const iconEl = markerRef.current.getElement();
    if (!iconEl) return;

    const container = iconEl.querySelector(".lottie-container");
    if (!container) return;

    // Evitar re-montar si el container ya tiene una animación activa
    if (lottieRef.current) {
      lottieRef.current.destroy();
      lottieRef.current = null;
    }

    lottieRef.current = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: marker.lottieIcon,
    });
  };

  // Re-monta Lottie en cada render (el divIcon genera un nuevo container cada vez)
  useEffect(() => {
    mountLottie();
  });

  // Limpia la animación al desmontar
  useEffect(() => {
    return () => {
      if (lottieRef.current) {
        lottieRef.current.destroy();
        lottieRef.current = null;
      }
    };
  }, []);

  const icon = L.divIcon({
    className: "",
    html: `<div class="lottie-container" style="width:${marker.lottieSize?.[0] ?? 50}px;height:${marker.lottieSize?.[1] ?? 50}px;"></div>`,
    iconSize: marker.lottieSize ?? [50, 50],
    iconAnchor: marker.lottieAnchor ?? [25, 50],
  });

  return (
    <Marker
      draggable={marker.draggable}
      eventHandlers={eventHandlers}
      icon={icon}
      position={marker.position}
      ref={markerRef}
    >
      {children}
    </Marker>
  );
};

LottieMarker.propTypes = {
  children: PropTypes.node,
  eventHandlers: PropTypes.object,
  marker: PropTypes.shape({
    draggable: PropTypes.bool,
    lottieAnchor: PropTypes.arrayOf(PropTypes.number),
    lottieIcon: PropTypes.object.isRequired,
    lottieSize: PropTypes.arrayOf(PropTypes.number),
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};