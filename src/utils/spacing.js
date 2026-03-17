/**
 * receives a string in a specific format and transforms it into CSS
 * properties.
 * @param {string} spacingString string with spacing values.
 * @param {string} type spacing type.
 * @return {string} spacing css code.
 */
const handleSpacing = (spacingString, type) => {
  const spacingsObj = {};

  const spacings = spacingString.split(" ");

  spacings.forEach((elem) => {
    const keys = elem.split("-");
    const border = keys[0];
    const value = keys[1];

    spacingsObj[border] = value;
  });

  const bottom = spacingsObj.b || spacingsObj.y || spacingsObj.a || 0;
  const left = spacingsObj.l || spacingsObj.x || spacingsObj.a || 0;
  const right = spacingsObj.r || spacingsObj.x || spacingsObj.a || 0;
  const top = spacingsObj.t || spacingsObj.y || spacingsObj.a || 0;

  return `${type}-bottom: ${bottom}px; ${type}-left: ${left}px; ${type}-right: ${right}px; ${type}-top: ${top}px;`;
};

/**
 * receives a string in a specific format and transforms it into CSS margins.
 * @param {string} props components properties.
 * @param {string} defaultValue used if margin property is not received.
 * @return {string} string with margin values.
 */
export const marginProperties = (props, defaultValue) => {
  if (props.$margin || defaultValue) {
    return handleSpacing(props.$margin || defaultValue, "margin");
  }

  return "";
};

/**
 * receives a string in a specific format and transforms it into CSS paddings.
 * @param {string} props components properties.
 * @param {string} defaultValue used if padding property is not received.
 * @return {string} string with padding values.
 */
export const paddingProperties = (props, defaultValue) => {
  if (props.$padding || defaultValue) {
    return handleSpacing(props.$padding || defaultValue, "padding");
  }

  return "";
};