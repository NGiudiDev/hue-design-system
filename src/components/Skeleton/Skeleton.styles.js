import { css, styled } from "styled-components";

import { marginProperties } from "../../utils/spacing";

const CircleSkeleton = styled("div")((props) => {
  return css`
    animation-name: ${props.theme.animations.shine};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background-color: ${props.theme.colors.black.disabled};
    background-image: linear-gradient(
      90deg,
      ${props.theme.colors.white.main}00 0px,
      ${props.theme.colors.white.main}80 40px,
      ${props.theme.colors.white.main}00 80px
    );
    background-size: 600px;
    border-radius: 50%;
    height: 48px;
    opacity: 0.35;
    width: 48px;

    ${marginProperties(props)}
  `;
});

const RectSkeleton = styled("div")((props) => {
  return css`
    animation-name: ${props.theme.animations.shine};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background-color: ${props.theme.colors.black.disabled};
    background-image: linear-gradient(
      90deg,
      ${props.theme.colors.white.main}00 0px,
      ${props.theme.colors.white.main}80 40px,
      ${props.theme.colors.white.main}00 80px
    );
    background-size: 600px;
    border-radius: 4px;
    height: ${props.height};
    max-width: 100%;
    opacity: 0.35;
    width: ${props.width};

    ${marginProperties(props)}
  `;
});

export const Styles = {
  CircleSkeleton,
  RectSkeleton,
};