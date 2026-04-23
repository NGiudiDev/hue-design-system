import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { Styles } from "./Banner.styles";

export const Banner = (props) => {
  const {
    className = null,
    description = "",
    margin = "a-0",
    title = "",
    type = "info",
  } = props;

  const colorsTransform = {
    error: "error",
    highlight: "highlight",
    info: "grey",
    success: "success",
    warning: "warning",
  };
  
  const iconsTransform = {
    error: "error",
    highlight: "info",
    info: "info",
    success: "success",
    warning: "caution",
  };
  
  return (
    <Styles.Wrapper
      className={className}
      $color={colorsTransform[type]}
      $margin={margin}
    >
      <Styles.FlexShrink>
        <Icon
          color={colorsTransform[type]}
          margin="r-8"
          name={iconsTransform[type]}
        />
      </Styles.FlexShrink>

      <Styles.Content>
        <Text
          margin="t-2 b-8"
          type={description ? "bodySemibold" : "bodyRegular"}
        >
          {title}
        </Text>

        {description && (
          <Text margin="t-6">
            {description}
          </Text>
        )}
      </Styles.Content>
    </Styles.Wrapper>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  margin: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(["error", "highlight", "info", "success", "warning"]),
};

Banner.defaultProps = {
  className: null,
  margin: "a-0",
  description: null,
  title: null,
  type: "info",
};