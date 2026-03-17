import React from "react";
import PropTypes from "prop-types";

import { ButtonSelector } from "./components/ButtonSelector";
import { Icon } from "../Icon/Icon";

import { Styles } from "./Button.styles";

const DEFAULT_ICON_PROPS = {
  color: "currentColor",
  margin: "r-8",
  name: "",
  size: "minor",
};

export const Button = (props) => {
  const {
    children = null,
    disabled = false,
    disclosure = false,
    fullWidth = false,
    iconProps = {},
    id = null,
    isLoading = false,
    kind = "filled",
    margin = "",
    onClick = null,
    type = "button",
  } = props;

  const resolvedIconProps = { ...DEFAULT_ICON_PROPS, ...iconProps };

  return (
    <ButtonSelector
      disabled={disabled || isLoading}
      disclosure={disclosure}
      fullWidth={fullWidth}
      id={id}
      kind={kind}
      margin={margin}
      onClick={onClick}
      type={type}
    >
      {/* loading view */}
      <Styles.LoaderWrapper $isLoading={isLoading}>
        <Icon color="currentColor" name="spinner" size="minor" />
      </Styles.LoaderWrapper>

      {/* content view */}
      <Styles.ContentWrapper $isLoading={isLoading}>
        {resolvedIconProps.name && <Icon {...resolvedIconProps} />}

        {children}

        {disclosure && (
          <Icon color="currentColor" margin="l-8" name="downAngle" size="minor" />  
        )}
      </Styles.ContentWrapper>
    </ButtonSelector>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  disclosure: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconProps: Icon.propTypes,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  kind: PropTypes.oneOf(["filled", "outlined", "text"]),
  margin: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};