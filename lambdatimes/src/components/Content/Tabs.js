import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab'

const Tabs = props => {

  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map((item, index) =>
              <Tab tab={item}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
              key={index}
              />
            )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.string) };

export default Tabs;
