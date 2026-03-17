import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Box.styles";

export const Box = (props) => {
  const {
    children = null,
    margin = "a-0",
    padding = "a-0",
  } = props;

  return (
    <Styles.Wrapper $margin={margin} $padding={padding}>
      {children}
    </Styles.Wrapper>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};