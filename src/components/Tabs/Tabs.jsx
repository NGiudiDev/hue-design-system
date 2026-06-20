import React, { useState } from "react";
import PropTypes from "prop-types";

import { Badge } from "../Badge/Badge";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { Styles } from "./Tabs.styles";

import { formatNumberAbbreviation } from "../../utils/numbers";

export const Tabs = (props) => {
  const {
    active = null,
    className = null,
    margin = "a-0",
    onClick = null,
    tabs = [],
  } = props;
  
  const [activeTab, setActiveTab] = useState(active || tabs[0]?.value);

  const handleClick = (tab) => {
    if (activeTab === tab.value) return null;

    setActiveTab(tab.value);
    
    onClick?.(tab.value);
  };

  return (
    <Styles.TabsContainer className={className} $margin={margin}>
      {tabs?.map((tab) => {
        if (!tab) return null;
        
        const isActive = activeTab === tab.value;

        return (
          <Styles.Tab
            aria-selected={isActive ? "true" : "false"}
            id={tab.id}
            $isActive={isActive}
            key={tab.value}
            onClick={() => handleClick(tab)}
            role="tab"
          >            
            {tab && tab.icon && (
              <Icon
                color={isActive ? "primary" : "black"}
                margin="r-12"
                name={tab.icon}
                size="minor"
              />
            )}
        
            <Text
              color={isActive ? "primary" : "black.light"}
              margin="r-4"
              type={isActive ? "bodySemibold" : "bodyRegular"}
            >
              {tab.label}
            </Text>

            {tab && tab.count != null && (
              <Badge>
                {formatNumberAbbreviation(tab.count)}
              </Badge>
            )}
          </Styles.Tab>
        );
      })}
    </Styles.TabsContainer>
  );
};

Tabs.propTypes = {
  active: PropTypes.string,
  className: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      icon: PropTypes.string,
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};