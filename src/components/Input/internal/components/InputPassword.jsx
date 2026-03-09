import React, { useState } from "react";
import PropTypes from "prop-types";

import { InputText } from "./InputText/InputText";

export const InputPassword = (props) => {
  const {
    disabled,
    error,
    helpText,
    id,
    isOptional,
    label,
    margin = "a-0",
    name,
    onChange,
    padding = "a-0",
    prefix = null,
    value,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputText
      disabled={disabled}
      error={error}
      helpText={helpText}
      suffix={{
        icon: {
          name: showPassword ? "hide" : "view",
          onClick: () => {
            setShowPassword((prev) => !prev);
          },
        },
        type: "icon",
      }}
      id={id}
      isOptional={isOptional}
      label={label}
      margin={margin}
      name={name}
      onChange={onChange}
      padding={padding}
      prefix={prefix}
      type={showPassword ? "textPassword" : "password"}
      value={value}
    />
  );
};

InputPassword.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  isOptional: PropTypes.bool,
  label: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  padding: PropTypes.string,
  prefix: PropTypes.shape({
    icon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
    text: PropTypes.string,
    type: PropTypes.oneOf(["text", "icon"]).isRequired,
  }),
  value: PropTypes.any,
};