import { styled } from "styled-components";

import { marginProperties } from "../../utils/spacing";

const TabsContainer = styled("div")((props) => `
  border-bottom: 1px solid ${props.theme.colors.black.border};
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  ${marginProperties(props)}
`);

const Tab = styled("div")((props) => `
  align-items: center;
  border-bottom: ${props.$isActive
    ? `2px solid ${props.theme.colors.primary.main}`
    : "2px solid transparent"
  };
  cursor: pointer;
  display: flex;
  padding: 12px 16px;
  
  "&:active": {
    background-color: ${props.theme.colors.black.surface};
  };

  "&:hover": {
    background-color: ${props.theme.colors.black.hovered};
  };
`);

export const Styles = {
  TabsContainer,
  Tab,
};