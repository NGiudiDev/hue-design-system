import React, { useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon/Icon";

import { getDimensions } from "./internal/image.utils";
import { Styles } from "./Image.styles";

export const Image = (props) => {
  const {
    alt = "",
    height = 0,
    margin = "a-0",
    shape = "square",
    size = "md",
    src = null,
    width = 0,
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(!src);

  const dimensions = getDimensions(shape, size, width, height);

  if (showFallback) {
    return (
      <Styles.Fallback
        aria-label={`${alt}_fallback`}
        $height={dimensions.height}
        $margin={margin}
        role="img"
        $shape={shape}
        $width={dimensions.width}
      >
        <Icon name="image" size="minor"/>
      </Styles.Fallback>
    );
  }

  return (
    <Styles.Wrapper
      $height={dimensions.height}
      $margin={margin}
      $shape={shape}
      $width={dimensions.width}
    >
      <Styles.Image
        alt={alt}
        $height={dimensions.height}
        $isLoading={isLoading}
        onError={() => setShowFallback(true)}
        onLoad={() => setIsLoading(false)}
        $shape={shape}
        src={src}
        $width={dimensions.width}
      />
    </Styles.Wrapper>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number,
  margin: PropTypes.string,
  shape: PropTypes.oneOf(["circle", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  src: PropTypes.string,
  width: PropTypes.number,
};