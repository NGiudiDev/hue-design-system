import { SIZE_HEIGHTS, SIZE_WIDTHS } from "./image.consts";

/**
 * calculates the final dimensions of an image based on shape, size, and explicit dimensions.
 * @param {string} shape - Shape of the image (for example, "circle" or "square").
 * @param {string} size - Size of the image, used to get default dimensions from tokens (e.g., "md", "lg").
 * @param {number} width - Explicit width of the image. If 0, the default value according to the size is used.
 * @param {number} height - Explicit height of the image. If 0, the default value according to the size is used.
 * @returns {{ height: number, width: number }} Object with the final dimensions of the image.
 */
export const getDimentions = (shape, size, width, height) => {
  let _height = height;
  let _width = width;
  
  if (height === 0 || width === 0) {
    _height = SIZE_HEIGHTS[size];
    _width = SIZE_WIDTHS[size];
  }

  if (shape === "circle") {
    _height = _width;
  }

  return {
    height: _height,
    width: _width,
  };
};