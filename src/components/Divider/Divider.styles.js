import styled from "styled-components";

import { marginProperties } from "../../utils/spacing";
import { getColorValue } from "../../utils/colors";

const Divider = styled("hr")((props) => `
  background-color: ${getColorValue(props.theme.colors, props.$color)};
  border: none;

  ${props.$orientation === "horizontal" ? `
    height: ${props.$height}px;
    width: 100%;
  ` : `
    display: inline-block;
    height: 100%;
    width: ${props.$height}px;
  `}

  ${marginProperties(props)};
`);

export const Styles = {
  Divider,
};