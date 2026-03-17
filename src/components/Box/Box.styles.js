import styled from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";

const Wrapper = styled("div")`
  ${(props) => marginProperties(props)}
  ${(props) => paddingProperties(props)}
`;

export const Styles = {
  Wrapper,
};