import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";

import { animations } from "../../theme/animations";
import { breakpoints } from "../../theme/breakpoints";
import { fontFamily, typography } from "../../theme/typography";
import { shadows } from "../../theme/shadows";
import { colors } from "../../theme/colors";
import { icons } from "../../theme/icons";

const DEFAULT_PROPS = {
  children: null,
};

const GoogleFontsStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');
`;

export const ThemeProvider = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  const theme = {
    animations: animations,
    breakpoints: breakpoints,
    colors: colors,
    fontFamily: fontFamily,
    icons: icons,
    shadows: shadows,
    typography: typography,
  };

  return (
    <StyledThemeProvider theme={theme}>
      <GoogleFontsStyle />

      {attrs.children}
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};