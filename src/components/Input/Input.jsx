import React from "react";
import PropTypes from "prop-types";

import { useField } from "formik";

import { InputText } from "./internal/components/InputText/InputText";
import { InputPassword } from "./internal/components/InputPassword";

//TODO: Eliminar la prop icon y agregar suffix/prefix. Agregar otros tipos de suffix y prefix
//TODO: Agregar otros tipos de suffix y prefix como puede ser text.
//TODO: Agregar un componente tipo NumberInput
//TODO: Agregar un componente tipo TextArea
export const Input = (props) => {  const {
    disabled,
    helpText,
    icon,
    id,
    isOptional,
    label,
    margin = "a-0",
    name,
    padding = "a-0",
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
          icon={icon}
          id={id}
          isOptional={isOptional}
          label={label}
          margin={margin}
          name={name}
          onChange={field.onChange}
          padding={padding}
          value={field.value}
        />
      );
  }
};

Input.propTypes = {
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.oneOf(["start", "end"]).isRequired,
  }),
  id: PropTypes.string,
  isOptional: PropTypes.bool,
  label: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string.isRequired,
  padding: PropTypes.string,
  type: PropTypes.oneOf(["password", "text"]),
};