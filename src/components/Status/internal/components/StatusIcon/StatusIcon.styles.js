import { styled } from "styled-components";

import { marginProperties } from "../../../../../utils/spacing";

const Wrapper = styled("div")((props) => {
  return `
    align-items: center;
    background-color: ${
      props.$invert || props.$disabled
        ? "transparent"
        : props.theme.colors[props.$color].main
    };
    border-color: ${
      props.$disabled
        ? props.theme.colors.black.disabled
        : props.theme.colors[props.$color].main
    };
    border-radius: 100%;
    border-style: solid;
    border-width: 1px;
    display: flex;
    height: 48px;
    justify-content: center;
    width: 48px;

    ${marginProperties(props)}
  `;
});

export const Styles = {
  Wrapper,
};