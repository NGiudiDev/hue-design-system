import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./InputPrefix.styles";

export const InputPrefix = (props) => {
  const { disabled, icon, text, type } = props;

  switch (type) {
    case "icon":
      return (
        <Styles.CustomIcon
          color={disabled ? "black.disabled" : "black.mediumEmphasis"}
          $disabled={disabled}
          name={icon.name}
          size="minor"
        />
      );
    case "text":
      return (
        <Styles.CustomText
          color={disabled ? "black.disabled" : "black.mediumEmphasis"}
          $disabled={disabled}
          margin="r-4"
        >
          {text}
        </Styles.CustomText>
      );
    default:
      return null;
  };
};

InputPrefix.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  text: PropTypes.string,
  type: PropTypes.oneOf(["icon", "text"]),
};