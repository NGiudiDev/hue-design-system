import React from "react";
import PropTypes from "prop-types";

import { useField } from "formik";

import { InputText } from "./internal/components/InputText/InputText";
import { InputPassword } from "./internal/components/InputPassword";

//TODO: Agregar un componente tipo NumberInput
//TODO: Agregar un componente tipo TextArea
export const Input = (props) => {
  const {
    disabled,
    helpText,
    id,
    isOptional,
    label,
    margin = "a-0",
    name,
    padding = "a-0",
    prefix = null,
    suffix = null,
    type = "text",
  } = props;

  const [field, meta] = useField({ name });

  switch (type) {
    case "password":
      return (
        <InputPassword
          disabled={disabled}
          error={meta.error}
          helpText={helpText}
          id={id}
          isOptional={isOptional}
          label={label}
          margin={margin}
          name={name}
          onChange={field.onChange}
          padding={padding}
          prefix={prefix}
          value={field.value}
        />
      );

    case "text":  
    default:
      return (
        <InputText
          disabled={disabled}
          error={meta.error}
          helpText={helpText}
          id={id}
          isOptional={isOptional}
          label={label}
          margin={margin}
          name={name}
          onChange={field.onChange}
          padding={padding}
          prefix={prefix}
          suffix={suffix}
          value={field.value}
        />
      );
  }
};

Input.propTypes = {
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  id: PropTypes.string.isRequired,
  isOptional: PropTypes.bool,
  label: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string.isRequired,
  padding: PropTypes.string,
  prefix: PropTypes.shape({
    icon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
    text: PropTypes.string,
    type: PropTypes.oneOf(["text", "icon"]).isRequired,
  }),
  suffix: PropTypes.shape({
    icon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
    text: PropTypes.string,
    type: PropTypes.oneOf(["text", "icon"]).isRequired,
  }),
  type: PropTypes.oneOf(["password", "text"]),
};