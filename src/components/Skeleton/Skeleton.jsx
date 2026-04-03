import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Skeleton.styles";

export const Skeleton = (props) => {
  const {
    height = "12px",
    margin = "a-0",
    type = "rect",
    width = "100%",
  } = props;

  if (type === "circle") {
    return <Styles.CircleSkeleton $margin={margin} />;
  }

  return <Styles.RectSkeleton $height={height} $margin={margin} $width={width} />;
};

Skeleton.propTypes = {
  height: PropTypes.string,
  margin: PropTypes.string,
  type: PropTypes.oneOf(["circle", "rect"]),
  width: PropTypes.string,
};