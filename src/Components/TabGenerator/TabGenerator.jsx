import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Tab Generator
 * will render tab based on TabsContent array provided to it.
 * @component
 * @example
 *
 * return (
 *   <TabGenerator
 *      TabsContent={[
 *        title: "Tab Title",
 *        extraClassName: "some-class-name",
 *        Component: SampleReactComponent
 *       ]}
 * />
 * )
 */
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
  /** tabs content array to render in generating tabs */
  TabsContent: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * tab title
       */
      title: PropTypes.string,
      /**
       * can pass this className to tab parent
       */
      extraClassName: PropTypes.string,
      /** React Component To Render in Tab Body
       * the right PropTypes for this is Element
       * But there was a false warning in browser and because of that i changed it  */
      Component: PropTypes.func,
    })
  ).isRequired,
};
