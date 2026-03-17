import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";
import { useField } from "formik";

import { InputText } from "./internal/components/InputText/InputText";
import { InputPassword } from "./internal/components/InputPassword";

const DEFAULT_PROPS = {
  disabled: false,
  helpText: null,
  id: null,
  isOptional: false,
  label: null,
  margin: "a-0",
  name: null,
  padding: "a-0",
  prefix: null,
  suffix: null,
  type: "text",
};

//TODO: Agregar un componente tipo NumberInput
//TODO: Agregar un componente tipo TextArea
export const Input = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  const [field, meta] = useField({ name: attrs.name });

  switch (attrs.type) {
    case "password":
      return (
        <InputPassword
          disabled={attrs.disabled}
          error={meta.error}
          helpText={attrs.helpText}
          id={attrs.id}
          isOptional={attrs.isOptional}
          label={attrs.label}
          margin={attrs.margin}
          name={attrs.name}
          onChange={field.onChange}
          padding={attrs.padding}
          prefix={attrs.prefix}
          value={field.value}
        />
      );

    case "text":  
    default:
      return (
        <InputText
          disabled={attrs.disabled}
          error={meta.error}
          helpText={attrs.helpText}
          id={attrs.id}
          isOptional={attrs.isOptional}
          label={attrs.label}
          margin={attrs.margin}
          name={attrs.name}
          onChange={field.onChange}
          padding={attrs.padding}
          prefix={attrs.prefix}
          suffix={attrs.suffix}
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