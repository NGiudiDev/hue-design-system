import { keyframes } from "styled-components";

export const animations = {
  spin: keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `,
  shine: keyframes`
     0% { background-position: -600px; }
    100% { background-position: 600px; }
  `,
};