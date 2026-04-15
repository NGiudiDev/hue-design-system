import { styled } from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";

const Wrapper = styled("div")((props) => `
  align-items: ${props.$direction === "column" ? props.$hAlign : props.$vAlign};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props.$direction};
  justify-content: ${props.$direction === "column" ? props.$vAlign : props.$hAlign};
  width: 100%;

  ${marginProperties(props)}
  ${paddingProperties(props)}
`);

export const Styles = {
  Wrapper,
};