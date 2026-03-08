import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./InputPrefix.styles";

export const InputPrefix = (props) => {
  const { disabled, icon } = props;

  if (icon && icon.position === "start") {
    return (
      <Styles.CustomIcon
        color={disabled ? "blackDisabled" : "blackMediumEmphasis"}
        disabled={disabled}
        name={icon.name}
        size="minor"
      />
    );
  }
  
  return null;
};

InputPrefix.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.oneOf(["start", "end"]).isRequired,
  }),
};