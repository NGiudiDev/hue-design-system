import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { Styles } from "./IconButton.styles";

const DEFAULT_ICON_PROPS = {
  name: "home",
  size: "major",
};

const ICON_COLORS = {
  black: "white.main",
  primary: "primary.main",
  white: "black.main",
};

export const IconButton = (props) => {
  const {
    color = "primary",
    count = 0,
    disabled = false,
    icon = {},
    id = null,
    margin = "a-0",
    onClick,
    type = "button",
  } = props;

  const resolvedIcon = {
    ...DEFAULT_ICON_PROPS,
    ...icon,
    color: ICON_COLORS[color],
  };

  return (
    <Styles.IconButton
      $color={color}
      disabled={disabled}
      id={id}
      $margin={margin}
      onClick={onClick}
      type={type}
    >
      {count > 0 && (
				<Styles.Count>
					<Text align="center" color="white.main" type="captionRegular">
						{count > 9 ? "+9" : count}
					</Text>
				</Styles.Count>
			)}

      <Icon {...resolvedIcon} />
    </Styles.IconButton>
  );
};

IconButton.propTypes = {
  color: PropTypes.oneOf(["black", "primary", "white"]),
  count: PropTypes.number,
  disabled: PropTypes.bool,
  icon: Icon.propTypes,
  id: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
};