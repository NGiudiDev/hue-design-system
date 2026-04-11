import { keyframes } from "styled-components";

export const animations = {
  fadeIn: keyframes`
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  `,
  shine: keyframes`
     0% { background-position: -600px; }
    100% { background-position: 600px; }
  `,
  spin: keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `,
};