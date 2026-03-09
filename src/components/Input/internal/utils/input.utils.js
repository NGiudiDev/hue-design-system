/**
 * Gets the input border color based on its state (disabled, error, default).
 * @param {Object} props - Component props; must include the theme and state flags.
 * @returns {string} Color token for the border.
 */
export const getBorderInputColor = (props) => {
  if (props.disabled)
    return props.theme.colors.black.disabled;

  if (props.$error)
    return props.theme.colors.error.main;

  return props.theme.colors.black.border;
};

/**
 * Gets the input border color on hover, based on its state.
 * @param {Object} props - Component props; must include the theme and state flags.
 * @returns {string} Color token for the border on hover.
 */
export const getHoveredBorderInputColor = (props) => {
  if (props.disabled)
    return props.theme.colors.black.disabled;

  if (props.$error)
    return props.theme.colors.error.main;

  return props.theme.colors.black.mediumEmphasis;
};

/**
 * Normalizes the input type by mapping "textPassword" to "text".
 * @param {string} type - Input type received through props.
 * @returns {string} Input type compatible with the HTML element.
 */
export const getInputType = (type) => {
  if (type === "textPassword") {
    return "text";
  }

  return type;
};

/**
 * Determines whether the input type corresponds to a password field.
 * @param {string} type - Input type received through props.
 * @returns {boolean} True if it is a password type, false otherwise.
 */
export const isPasswordType = (type) => {
  return type === "password" || type === "textPassword";
};