import styled, { css } from "styled-components";

import { marginProperties } from "../../utils/spacing";

const Count = styled("div")((props) => `
  border-radius: 50%;
  background-color: ${props.theme.colors.secondary.main};
  height: 16px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 16px;
`);

const IconButton = styled("button")`
  ${(props) => css`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    height: 38px;
    justify-content: center;
    position: relative;
    transition: background-color 500ms ease, transform 100ms ease;
    width: 38px;

    ${marginProperties(props)}

    &:active:enabled {
      background-color: ${props.$color === "white"
        ? props.theme.colors.white.darkPressed
        : props.$color === "black"
        ? props.theme.colors.black.dragged
        : props.theme.colors.primary.pressed};
      transform: scale(0.92);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      
      * {
        pointer-events: none;
      }
    }

    &:focus-visible {
      outline: 2px solid ${props => props.theme.colors.highlight.main};
      outline-offset: 2px;
    }

    &:hover:enabled {
      background-color: ${props.$color === "white" 
        ? props.theme.colors.white.middleHovered
        : props.$color === "black"
        ? props.theme.colors.black.middleHovered
        : props.theme.colors.primary.hovered};
    }
  `}
`;

export const Styles = {
  Count,
  IconButton,
};