import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Divider.styles";

export const Divider = (props) => {
  const {
    color = "black.surface",
    height = 1,
    margin = "a-0",
    orientation = "horizontal",
  } = props;

  return (
    <Styles.Divider 
      $color={color}
      $height={height}
      $margin={margin}
      $orientation={orientation}
    />
  );
};

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  margin: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};