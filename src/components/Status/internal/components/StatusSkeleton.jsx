import React from "react";
import PropTypes from "prop-types";

import { Skeleton } from "../../../Skeleton/Skeleton";

import { Styles } from "../../Status.styles";

export const StatusSkeleton = (props) => {
  const {
    margin = "a-0",
  } = props;

  return (
    <Styles.Wrapper $margin={margin}>
      <Skeleton margin="r-12" type="circle" />

      <div style={{ flexGrow: 1 }}>
        <Skeleton margin="b-8" />

        <Skeleton width="70px" />
      </div>
    </Styles.Wrapper>
  );
};

StatusSkeleton.propTypes = {
  margin: PropTypes.string,
};