import { styled } from "styled-components";

import { Icon } from "../../../../Icon/Icon";
import { Text } from "../../../../Text/Text";

const CustomIcon = styled(Icon)((props) => `
  cursor: ${props.disabled ? "not-allowed" : "default"};
  flex-shrink: 0;
`);

const CustomText = styled(Text)((props) => `
  cursor: ${props.disabled ? "not-allowed" : "default"};
  flex-shrink: 0;
  user-select: none;
`);

export const Styles = {
  CustomIcon,
  CustomText,
};