import { styled } from "styled-components";

import { getBorderInputColor, getHoveredBorderInputColor } from "../../utils/input.utils";
import { marginProperties, paddingProperties } from "../../../../../utils/spacing";

const CustomInput = styled("input")((props) => `
  background-color: transparent;
  border: none;
  box-shadow: none;
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  height: 32px;
  line-height: 20px;
  outline: none;
  width: 100%;

  &:disabled {
    color: ${props.theme.colors.black.disabled};
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    box-shadow: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`);

const InputWrapper = styled("div")((props) => `
  align-items: center;
  background-color: ${props.disabled ? props.theme.colors.white.surface : "transparent"};
  border-color: ${getBorderInputColor(props)};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  display: flex;
  height: 32px;
  opacity: ${props.disabled ? 0.7 : 1};
  padding: 6px 12px;
  transition: border-color 0.2s ease-in-out;
  width: 100%;

  &:hover {
    border-color: ${getHoveredBorderInputColor(props)};
  }
`);

const Wrapper = styled("div")`
  width: 100%;

  ${(props) => marginProperties(props)}
  ${(props) => paddingProperties(props)}
`;

export const Styles = {
  CustomInput,
  InputWrapper,
  Wrapper,
};