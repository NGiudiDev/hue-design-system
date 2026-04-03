import { styled } from "styled-components";

import { marginProperties } from "../../utils/spacing";

const Content = styled("div")`
  flex-grow: 1;
`;

const Wrapper = styled("div")`
  align-items: center;
  display: flex;

  ${(props) => marginProperties(props)}
`;

export const Styles = {
  Content,
  Wrapper,
};