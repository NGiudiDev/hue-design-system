import styled from "styled-components";

import { marginProperties } from "../../utils/spacing";

const Fallback = styled("div")((props) => `
  align-items: center;
  background-color: ${props.theme.colors.black.surface};
  border-radius: ${props.$shape === "circle" ? "50%" : "4px"};
  display: flex;
  height: ${`${props.$height}px`};
  justify-content: center;
  width: ${`${props.$width}px`};

  ${marginProperties(props)}
`);

const Image = styled("img")((props) => `
  border-radius: ${props.$shape === "circle" ? "50%" : "4px"};
  display: ${props.$isLoading ? "none" : "block"};
  height: ${`${props.$height}px`};
  max-width: 100%;
  object-fit: cover;
  width: ${`${props.$width}px`};
`);

const Wrapper = styled("div")((props) => `
  border-radius: ${props.$shape === "circle" ? "50%" : "4px"};
  height: ${`${props.$height}px`};
  width: ${`${props.$width}px`};

  ${marginProperties(props)}
`);

export const Styles = {
  Fallback,
  Image,
  Wrapper,
};