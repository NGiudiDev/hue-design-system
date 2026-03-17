import React from "react";
import PropTypes from "prop-types";

import { isPasswordType } from "../../utils/input.utils";

import { Styles } from "./InputSuffix.styles";

export const InputSuffix = (props) => {
  const { disabled, error, icon, inputType, text, type } = props;

  switch (type) {
    case "icon":
      if (error && !isPasswordType(inputType)) {
        return (
          <Styles.CustomIcon color="error" name="error" size="minor" />
        );
      }

      return (
        <Styles.CustomIcon
          $disabled={disabled}
          name={icon.name}
          onClick={disabled ? null : icon.onClick}
          size="minor"
        />
      );
    case "text":
      return (
        <Styles.CustomText
          color={disabled ? "black.disabled" : "black.mediumEmphasis"}
          $disabled={disabled}
          margin="l-4"
        >
          {text}
        </Styles.CustomText>
      );
    default:
      return null;
  };
};

InputSuffix.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  inputType: PropTypes.oneOf(["password", "text", "textPassword"]),
  text: PropTypes.string,
  type: PropTypes.oneOf(["icon", "text"]),
};