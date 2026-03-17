import React from "react";
import PropTypes from "prop-types";

import { Step } from "./components/Step";

import { Styles } from "./Steps.styles";

export const Steps = (props) => {
  const {
    labels = [],
    margin = null,
    step = 1,
    steps = 3,
  } = props;

  const stepsArray = Array.from({ length: steps }, (_, index) => index + 1);

  return (
    <Styles.Wrapper $margin={margin}>
      {stepsArray.map((stepNumber, index) => {
        return (
          <React.Fragment key={index}>
            <Step
              isCompleted={stepNumber <= step}
              label={labels[index]}
              step={stepNumber}
            />

            {stepNumber < steps && <Styles.Line />}
          </React.Fragment>
        );
      })}
    </Styles.Wrapper>
  );
};

Steps.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  margin: PropTypes.string,
  step: PropTypes.number,
  steps: PropTypes.number,
};