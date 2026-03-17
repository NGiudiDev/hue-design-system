import React from "react";
import PropTypes from "prop-types";

import { Text } from "../Text/Text";

import { Styles } from "./Badge.styles";

const DEFAULT_TEXT_PROPS = {
  color: "white.main",
  type: "captionSemibold",
};

export const Badge = (props) => {
  const {
    children = null,
    color = "primary.main",
    margin = "a-0",
    padding = "x-4 y-2",
    textProps = {},
  } = props;
  
  const resolvedTextProps = { ...DEFAULT_TEXT_PROPS, ...textProps };

  return (
    <Styles.Wrapper
      $color={color}
      $margin={margin}
      $padding={padding}
    >
      <Text {...resolvedTextProps}>
        {children}
      </Text>
    </Styles.Wrapper>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  textProps: PropTypes.object,
};