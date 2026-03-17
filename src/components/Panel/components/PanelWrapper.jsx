import React from "react";
import PropTypes from "prop-types";

import { Styles } from "../Panel.styles";

export const PanelWrapper = (props) => {
  const {
    borderless = false,
    children = null,
    isFullHeight = false,
    margin = "a-0",
    onClick = null,
    padding = "a-16",
  } = props;

  return (
    <Styles.Wrapper
      $borderless={borderless}
      $isFullHeight={isFullHeight}
      $margin={margin}
      onClick={onClick}
      $padding={padding}
    >
      {children}
    </Styles.Wrapper>
  );
};

PanelWrapper.propTypes = {
  borderless: PropTypes.bool,
  children: PropTypes.node,
  isFullHeight: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.string,
};