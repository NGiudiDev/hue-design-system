import styled from "styled-components";

const MarkerItem = styled("div")((props) => `
  background-color: ${props.isSelected ? props.theme.colors.primary.light : "transparent"};  
  cursor: pointer;
  padding: 8px;

  &:active {
    background-color: ${props.isSelected ? props.theme.colors.primary.light : props.theme.colors.primary.pressed};
  }

  &:hover {
    background-color: ${props.isSelected ? props.theme.colors.primary.light : props.theme.colors.primary.hovered};
  }
`);

export const Styles = {
  MarkerItem,
};