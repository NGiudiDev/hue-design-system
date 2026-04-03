import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../../Icon/Icon";

import { Styles } from "./StatusIcon.styles";

import { getStatusIconColor } from "../../utils/status_icon.utils";

export const StatusIcon = (props) => {
  const {
    color = "highlight",
    disabled = false,
    iconName = "camera",
    invert = false,
    margin = "a-0",
  } = props;

  return (
    <Styles.Wrapper
      $color={color}
      $disabled={disabled}
      $invert={invert}
      $margin={margin}
    >
      <Icon color={getStatusIconColor(props)} name={iconName} size="major" />
    </Styles.Wrapper>
  );
};

StatusIcon.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
  invert: PropTypes.bool,
  margin: PropTypes.string,
};