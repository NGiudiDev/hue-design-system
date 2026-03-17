import styled from "styled-components";

const LinkContainer = styled("a")((props) => {
  const typographyVariant = props.theme.typography[props.$type] || props.theme.typography.bodyRegular;
  
  return `
    background-color: transparent;
    color: ${props.theme.colors.link.main};
    font-family: ${props.theme.fontFamily};
    font-size: ${typographyVariant.size};
    font-weight: ${typographyVariant.weight};
    line-height: ${typographyVariant.lineHeight};
    text-decoration: underline;

    &:hover {
      color: ${props.theme.colors.link.hovered};
    }

    &:active {
      color: ${props.theme.colors.link.pressed};
    }

    &:visited {
      color: ${props.theme.colors.link.visited};
    }
  `;
});

export const Styles = {
  LinkContainer,
};