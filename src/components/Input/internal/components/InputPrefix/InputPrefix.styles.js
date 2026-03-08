import { styled } from "styled-components";

import { Icon } from "../../../../Icon/Icon";

const CustomIcon = styled(Icon)((props) => `
  cursor: ${props.disabled ? "not-allowed" : "cursor"};
  flex-shrink: 0;
`);

export const Styles = {
  CustomIcon,
};