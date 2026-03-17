import React, { useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon/Icon";

import { Styles } from "./Image.styles";

import { getDimentions } from "./internal/image.utils";
import { merge } from "lodash";

const DEFAULT_PROPS = {
  alt: "",
  height: 0,
  margin: "a-0",
  shape: "square",
  size: "md",
  src: null,
  width: 0,
};

export const Image = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(!attrs.src);

  const dimentions = getDimentions(attrs.shape, attrs.size, attrs.width, attrs.height);

  if (showFallback) {
    return (
      <Styles.Fallback
        aria-label={`${attrs.alt}_fallback`}
        $height={dimentions.height}
        $margin={attrs.margin}
        role="img"
        $shape={attrs.shape}
        $width={dimentions.width}
      >
        <Icon name="image" size="minor"/>
      </Styles.Fallback>
    );
  }

  return (
    <Styles.Wrapper
      $height={dimentions.height}
      $margin={attrs.margin}
      $shape={attrs.shape}
      $width={dimentions.width}
    >
      <Styles.Image
        alt={attrs.alt}
        $height={dimentions.height}
        $isLoading={isLoading}
        onError={() => setShowFallback(true)}
        onLoad={() => setIsLoading(false)}
        $shape={attrs.shape}
        src={attrs.src}
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