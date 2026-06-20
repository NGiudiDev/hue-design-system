import React from "react";
import PropTypes from "prop-types";

import { Icon, Status } from "../../";

import { Styles } from "./StatusProgress.styles";

export const StatusProgress = (props) => {
  const {
    className = null,
    statuses = null,
  } = props;

  return (
    <Styles.Wrapper className={className}>
      {statuses.map((item, index) => (
        <React.Fragment key={`${item.status}-${index}`}>
          <Status
            color={item.status}
            disabled={!item.at || item.at > new Date().getTime()}
            iconName={item.icon}
            invert={!item.at}
            subtitle={item.subtitle}
            title={item.title}
          />

          {index < statuses.length - 1 ? (
            <Icon
              color="black.mediumEmphasis"
              name="nextAngle"
            />
          ) : null}
        </React.Fragment>
      ))}
    </Styles.Wrapper>
  );
};

StatusProgress.propTypes = {
  className: PropTypes.string,
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      at: PropTypes.number,
      icon: PropTypes.string,
      status: PropTypes.string,
      subtitle: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};