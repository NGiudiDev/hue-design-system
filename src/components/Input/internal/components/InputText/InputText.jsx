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
    icon,
    error,
    helpText,
    id,
    isOptional,
    label,
    margin,
    name,
    onChange,
    padding,
    type = "text",
    value,
  } = props;

  return (
    <Styles.Wrapper $margin={margin} $padding={padding}>
      {label && (
        <Text color={disabled ? "black.disabled" : "black"} margin="b-4" type="bodySemibold">
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
        <InputPrefix disabled={disabled} icon={icon} />

        <Styles.CustomInput
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          required={!isOptional}
          type={getInputType(type)}
          value={value}
        />

        <InputSuffix disabled={disabled} error={error} icon={icon} type={type} />
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
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    position: PropTypes.oneOf(["start", "end"]).isRequired,
  }),
  id: PropTypes.string,
  isOptional: PropTypes.bool,
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  padding: PropTypes.string,
  type: PropTypes.oneOf(["password", "text", "textPassword"]),
  value: PropTypes.any,
};