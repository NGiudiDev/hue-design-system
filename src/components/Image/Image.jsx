import React, { useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon/Icon";

import { Styles } from "./Image.styles";

import { getDimentions } from "./internal/image.utils";

export const Image = (props) => {
  const {
    alt,
    height = 0,
    margin = "a-0",
    shape = "square",
    size = "md",
    src,
    width = 0,
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(!src);

  const dimentions = getDimentions(shape, size, width, height);

  if (showFallback) {
    return (
      <Styles.Fallback
        aria-label={`${alt}_fallback`}
        $height={dimentions.height}
        margin={margin}
        role="img"
        $shape={shape}
        $width={dimentions.width}
      >
        <Icon name="image" size="minor"/>
      </Styles.Fallback>
    );
  }

  return (
    <Styles.Wrapper
      $height={dimentions.height}
      margin={margin}
      $shape={shape}
      $width={dimentions.width}
    >
      <Styles.Image
        alt={alt}
        $height={dimentions.height}
        $isLoading={isLoading}
        onError={() => setShowFallback(true)}
        onLoad={() => setIsLoading(false)}
        $shape={shape}
        src={src}
        $width={dimentions.width}
      />
    </Styles.Wrapper>
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  margin: PropTypes.string,
  shape: PropTypes.oneOf(["circle", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
};