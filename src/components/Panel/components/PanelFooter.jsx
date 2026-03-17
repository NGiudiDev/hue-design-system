import React from "react";
import PropTypes from "prop-types";

import { Styles } from "../Panel.styles";

export const PanelFooter = (props) => {
  const {
    children = null,
    margin = "a-0",
    padding = "a-0",
  } = props;

  return (
    <Styles.Footer
      $margin={margin}
      $padding={padding}
    >
      {children}
    </Styles.Footer>
  );
};

PanelFooter.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};