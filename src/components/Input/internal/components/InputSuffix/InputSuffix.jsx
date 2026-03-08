import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./InputSuffix.styles";

import { isPasswordType } from "../../utils/input.utils";

export const InputSuffix = (props) => {
  const { disabled, error, icon, type } = props;

  if (error && !isPasswordType(type)) {
    return (
      <Styles.CustomIcon color="error" name="error" size="minor" />
    );
  }
  
  if (icon && icon.position === "end") {
    return (
      <Styles.CustomIcon
        disabled={disabled}
        name={icon.name}
        onClick={disabled ? null : icon.onClick}
        size="minor"
      />
    );
  }

  return null;
};

InputSuffix.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    position: PropTypes.oneOf(["start", "end"]).isRequired,
  }),
  type: PropTypes.oneOf(["password", "text", "textPassword"]),
};