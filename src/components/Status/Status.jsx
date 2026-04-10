import React from "react";
import PropTypes from "prop-types";

import { StatusIcon } from "./internal/components/StatusIcon/StatusIcon";
import { Text } from "../Text/Text";

import { Styles } from "./Status.styles";

import { getTextColor } from "./internal/utils/status_icon.utils";

export const Status = (props) => {
  const {
    className = null,
    color = "highlight",
    disabled = false,
    iconName = "camera",
    invert = false,
    margin = "a-0",
    subtitle = null,
    title = null,
  } = props;

  return (
    <Styles.Wrapper className={className} $margin={margin}>
      <StatusIcon
        color={color}
        disabled={disabled}
        iconName={iconName}
        invert={invert}
        margin="r-12"
      />

      <Styles.Content>
        {title && (
          <Text color={getTextColor(props)} type="bodySemibold">
            {title}
          </Text>
        )}

        {subtitle && (
          <Text color={getTextColor(props)} type="captionRegular">
            {subtitle}
          </Text>
        )}
      </Styles.Content>
    </Styles.Wrapper>
  );
};

Status.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
  invert: PropTypes.bool,
  margin: PropTypes.string,
  subtitle: PropTypes.node,
  title: PropTypes.string,
};