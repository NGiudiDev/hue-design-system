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

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <Styles.IconWrapper
      aria-label={onClick ? name : undefined}
      className={className}
      $margin={margin}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? "button" : undefined}
      $size={size}
      $spin={spin}
      tabIndex={onClick ? 0 : undefined}
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