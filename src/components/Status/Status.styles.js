import { styled } from "styled-components";

import { marginProperties } from "../../utils/spacing";

const Wrapper = styled("div")`
  align-items: center;
  display: flex;
  
  ${(props) => marginProperties(props)}
`;

export const Styles = {
  Wrapper,
};