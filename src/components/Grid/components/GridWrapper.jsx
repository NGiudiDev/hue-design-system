import React from "react";
import PropTypes from "prop-types";

import { Styles } from "../Grid.styles";

export const GridWrapper = (props) => {
  const {
    children = null,
    margin = "a-0",
    padding = "a-0",
  } = props;

  return (
    <Styles.Wrapper
      $margin={margin}
      $padding={padding}
    >
      {children}
    </Styles.Wrapper>
  );
};

GridWrapper.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};