import styled from "styled-components";

import { marginProperties } from "../../utils/spacing";

const Wrapper = styled("div")((props) => `
  background-color: ${props.theme.colors[props.$color].light};
  border-color: ${props.theme.colors[props.$color].main};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  padding: 8px 16px;
  
  ${marginProperties(props)}
`);

const Content = styled("div")(`
  flex-grow: 1;
  flex-shrink: 2;
  margin: 8px 12px 0 0;
`);

const FlexShrink = styled("div")(`
  flex-shrink: 1;
`);

export const Styles = {
  Content,
  FlexShrink,
  Wrapper,
};