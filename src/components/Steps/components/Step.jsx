import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Step.styles";

export const Step = (props) => {
  const {
    isCompleted = false,
    label = "",
    step = 0,
  } = props;

  return (
    <Styles.Wrapper step={step}>
      <Styles.Circle $isCompleted={isCompleted}>
        <Styles.Number $isCompleted={isCompleted}>
          {step}
        </Styles.Number>
      </Styles.Circle>

      {!!label && (
        <Styles.Label $isCompleted={isCompleted}>
          {label}
        </Styles.Label>
      )}
    </Styles.Wrapper>
  );
};

Step.propTypes = {
  isCompleted: PropTypes.bool,
  label: PropTypes.string,
  step: PropTypes.number,
};