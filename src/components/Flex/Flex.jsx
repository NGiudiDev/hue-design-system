import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Flex.styles";

export const Flex = (props) => {
  const {
    children = null,
    className = "",
    direction = "row",
    hAlign = "center",
    margin = "",
    padding = "a-0",
    vAlign = "center",
  } = props;

  return (
    <Styles.Wrapper
      className={className}
      $direction={direction}
      $hAlign={hAlign}
      $margin={margin}
      $padding={padding}
      $vAlign={vAlign}
    >
      {children}
    </Styles.Wrapper>
  );
};

Flex.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["row", "column"]),
  hAlign: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  vAlign: PropTypes.string,
};