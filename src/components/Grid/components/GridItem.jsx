import React from "react";
import PropTypes from "prop-types";

import { Styles } from "../Grid.styles";

export const GridItem = (props) => {
  const {
    align = "left",
    children = null,
    padding = "a-0",
    xs = 12,
    sm,
    md,
    lg,
    xl,
  } = props;

  return (
    <Styles.Item
      $align={align}
      $padding={padding}
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
    >
      {children}
    </Styles.Item>
  );
};

GridItem.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  children: PropTypes.node,
  padding: PropTypes.string,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
};