import React from "react";
import { PropTypes } from "prop-types";

import { merge } from "lodash";

import { Styles } from "./Divider.styles";

const DEFAULT_PROPS = {
  color: "black.surface",
  height: 1,
  margin: "a-0",
  orientation: "horizontal",
};

export const Divider = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.Divider 
      $color={attrs.color}
      $height={attrs.height}
      $margin={attrs.margin}
      $orientation={attrs.orientation}
    />
  );
};

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  margin: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};