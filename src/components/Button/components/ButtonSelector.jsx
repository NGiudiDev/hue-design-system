import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../Icon/Icon";

import { Styles } from "../Button.styles";

export const ButtonSelector = (props) => {
  const {
    children = null,
    disabled = false,
    fullWidth = false,
    id = null,
    kind = "filled",
    margin = "",
    onClick = null,
    type = "button",
  } = props;
  
  switch (kind) {
    case "outlined":
      return (
        <Styles.OutlinedButton
          disabled={disabled}
          $fullWidth={fullWidth}
          id={id}
          $margin={margin}
          onClick={onClick}
          type={type}
        >
          {children}
        </Styles.OutlinedButton>
      );
    
    case "text":
      return (
        <Styles.TextButton
          disabled={disabled}
          $fullWidth={fullWidth}
          id={id}
          $margin={margin}
          onClick={onClick}
          type={type}
        >
          {children}
        </Styles.TextButton>
      );

    case "filled":
    default:
      return (
        <Styles.FilledButton
          disabled={disabled}
          $fullWidth={fullWidth}
          id={id}
          $margin={margin}
          onClick={onClick}
          type={type}
        >
          {children}
        </Styles.FilledButton>
      );
  }
};

ButtonSelector.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  disclosure: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconProps: Icon.propTypes,
  id: PropTypes.string,
  kind: PropTypes.oneOf(["filled", "outlined", "text"]),
  margin: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};