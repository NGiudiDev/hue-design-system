import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Icon.styles";

import { icons } from "../../theme/icons";

export const Icon = (props) => {
  const {
    className = null,
    color = "black.main",
    margin = "a-0",
    name = "home",
    onClick = null,
    size = "major",
    spin = false,
  } = props;

  const iconData = icons[name];
  
  if (!iconData) { 
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <Styles.IconWrapper
      className={className}
      $margin={margin}
      onClick={onClick}
      $size={size}
      $spin={spin}
    >
      <Styles.IconItem
        $color={color}
        $size={size}
        viewBox={iconData.viewBox}
      >
        <path d={iconData.path} />
      </Styles.IconItem>
    </Styles.IconWrapper>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["minor", "major", "spot"]),
  spin: PropTypes.bool,
};