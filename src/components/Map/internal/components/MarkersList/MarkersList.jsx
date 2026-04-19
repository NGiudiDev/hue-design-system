import React from "react";
import PropTypes from "prop-types";

import { useMapContext } from "../../hooks/useMapContext";

import { Button } from "../../../../Button/Button";
import { Divider } from "../../../../Divider/Divider";
import { MarkerItem } from "../MarkerItem/MarkerItem";

import { Styles } from "./MarkersList.styles";

export const MarkersList = (props) => {
  const {
    markers = [],
  } = props;
  
  const ctx = useMapContext();

  return (
    <Styles.MarkersListPanel>
      <Button disabled={!ctx.markerSelected} fullWidth kind="text" onClick={() => ctx.setMarkerSelected(null)}>
        Limpiar selección
      </Button>
      
      <Divider />

      <Styles.MarkersList>
        {markers.map((marker, index) => (
          <MarkerItem
            key={`marker-list-item-${index}`}
            marker={marker}
            onClick={() => ctx.setMarkerSelected(marker)}
          />
        ))}
      </Styles.MarkersList>
    </Styles.MarkersListPanel>
  );
};

MarkersList.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      listItem: PropTypes.node,
      position: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ),
};