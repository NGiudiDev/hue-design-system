import React from "react";
import PropTypes from "prop-types";

import { Styles } from "../Panel.styles";

export const PanelContent = (props) => {
  const {
    children = null,
    margin = "a-0",
    padding = "a-0",
  } = props;

  return (
    <Styles.Content
      $margin={margin}
      $padding={padding}
    >
      {children}
    </Styles.Content>
  );
};

PanelContent.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};