import React from "react";
import PropTypes from "prop-types";

import { useMapContext } from "../../hooks/useMapContext.jsx";

import { Styles } from "./MarkerItem.styles.js";

export const MarkerItem = (props) => {
  const {
    marker = {},
    onClick = null,
  } = props;

  const ctx = useMapContext();

  if (marker.listItem) {
    return (
      <Styles.MarkerItem $isSelected={marker === ctx.markerSelected} onClick={onClick}>
        {marker.listItem}
      </Styles.MarkerItem>
    );
  }

  return null;
};

MarkerItem.propTypes = {
  marker: PropTypes.shape({
    listItem: PropTypes.node,
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
  onClick: PropTypes.func,
};