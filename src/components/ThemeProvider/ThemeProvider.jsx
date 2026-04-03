import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { animations } from "../../theme/animations";
import { breakpoints } from "../../theme/breakpoints";
import { fontFamily, typography } from "../../theme/typography";
import { shadows } from "../../theme/shadows";
import { colors } from "../../theme/colors";
import { icons } from "../../theme/icons";

const GOOGLE_FONTS_URL = "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap";

export const ThemeProvider = (props) => {
  const {
    children = null,
  } = props;

  useEffect(() => {
    const existingLink = document.querySelector(`link[href="${GOOGLE_FONTS_URL}"]`);

    if (existingLink) {
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = GOOGLE_FONTS_URL;
    document.head.appendChild(link);
  }, []);
  
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
      {children}
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};