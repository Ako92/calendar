import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import PropTypes from "prop-types";
const TabGenerator = (props) => {
  const { TabsContent } = props;
  const TabData = TabsContent.map((tab) => {
    return (
      <Tab
        key={tab.title}
        title={tab.title}
        eventKey={tab.title}
        className={`tab-content ${
          tab.extraClassName ? tab.extraClassName : ""
        }`}
      >
        <tab.Component />
      </Tab>
    );
  });
  return <Tabs className="tabs nav-justified">{TabData}</Tabs>;
};
export default TabGenerator;
TabGenerator.propTypes = {
  TabsContent: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      extraClassName: PropTypes.string,
      Component: PropTypes.func,
    })
  ).isRequired,
};
