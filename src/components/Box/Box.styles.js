import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";

const Wrapper = styled("div")`
  ${(props) => css`
    ${marginProperties(props)}
    ${paddingProperties(props)}
  `}
`;

export const Styles = {
  Wrapper,
};