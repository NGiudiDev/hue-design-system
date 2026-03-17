import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Text.styles";

import { typography } from "../../theme/typography";

export const Text = (props) => {
  const {
    align = "start",
    as = "p",
    children,
    className = "",
    color = "black",
    decoration = "none",
    htmlFor = "",
    margin = "a-0",
    padding = "a-0",
    type = "bodyRegular",
  } = props;

  let resolvedType = type;

  if (!typography[resolvedType]) {
    console.warn(`Typography type "${resolvedType}" not found. Using default "bodyRegular".`);
    resolvedType = "bodyRegular";
  }

  const labelProps = as === "label" ? { htmlFor } : {};

  const textOptions = {
    $align: align,
    children,
    className,
    $color: color,
    $decoration: decoration,
    $margin: margin,
    $padding: padding,
    $type: resolvedType,
  };

  if (as === "label") {
    return (
      <Styles.LabelWrapper {...labelProps} {...textOptions} />
    );
  }

  return (
    <Styles.TextWrapper as={as} {...textOptions} />
  );
};

Text.propTypes = {
  align: PropTypes.oneOf(["start", "center", "end"]),
  as: PropTypes.oneOf(["p", "span", "label", "h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  decoration: PropTypes.oneOf(["none", "underline", "line-through"]),
  htmlFor: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(typography)),
};