import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Link.styles";

export const Link = (props) => {
  const {
    children = null,
    href = null,
    openInNewTab = false,
    type = "bodyRegular",
  } = props;

  return (
    <Styles.LinkContainer 
      aria-label={openInNewTab ? `${children} (abre en una nueva pestaña)` : undefined}
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      $type={type}
    >
      {children}
    </Styles.LinkContainer>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  openInNewTab: PropTypes.bool,
  type: PropTypes.string,
};