import React from "react";
import PropTypes from "prop-types";

import { InputSuffix } from "../InputSuffix/InputSuffix";
import { InputPrefix } from "../InputPrefix/InputPrefix";

import { Text } from "../../../../Text/Text";

import { getInputType } from "../../utils/input.utils";

import { Styles } from "./InputText.styles";

export const InputText = (props) => {
  const {
    disabled,
    error,
    helpText,
    id,
    isOptional,
    label,
    margin,
    name,
    onChange,
    padding,
    prefix,
    suffix,
    type = "text",
    value,
  } = props;

  return (
    <Styles.Wrapper $margin={margin} $padding={padding}>
      {label && (
        <Text
          as="label"
          color={disabled ? "black.disabled" : "black"}
          htmlFor={id}
          margin="b-4"
          type="bodySemibold"
        >
          {label}
          {isOptional && (
            <Text as="span" color={disabled ? "black.disabled" : "black.mediumEmphasis"} type="captionRegular">
              {" (Opcional)"}
            </Text>
          )}
        </Text>
      )}

      {helpText && (
        <Text color={disabled ? "black.disabled" : "black.mediumEmphasis"} margin="b-4" type="captionRegular">
          {helpText}
        </Text>
      )}

      <Styles.InputWrapper disabled={disabled} $error={error}>
        <InputPrefix
          disabled={disabled}
          icon={prefix?.icon}
          text={prefix?.text}
          type={prefix?.type}
        />

        <Styles.CustomInput
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          required={!isOptional}
          type={getInputType(type)}
          value={value}
        />

        <InputSuffix
          disabled={disabled}
          error={error}
          icon={suffix?.icon}
          inputType={type}
          text={suffix?.text}
          type={suffix?.type}
        />
      </Styles.InputWrapper>

      {error && (
        <Text color={disabled ? "black.disabled" : "error"} margin="t-4" type="captionRegular">
          {error}
        </Text>
      )}
    </Styles.Wrapper>
  );
};

InputText.propTypes = {
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
  suffix: PropTypes.shape({
    icon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
    text: PropTypes.string,
    type: PropTypes.oneOf(["text", "icon"]).isRequired,
  }),
  type: PropTypes.oneOf(["password", "text", "textPassword"]),
  value: PropTypes.any,
};