import React from "react";
import TabGenerator from "../../Components/TabGenerator/TabGenerator";
import CalendarScreen from "../CalendarScreen";
import Events from "../EventsScreen";
const CALENDAR_TITLE = "Calendar";
const EVENTS_TITLE = "Events";
const Home = () => {
  const tabData = [
    {
      title: CALENDAR_TITLE,
      extraClassName: "",
      Component: CalendarScreen,
    },
    {
      title: EVENTS_TITLE,
      extraClassName: "",
      Component: Events,
    },
  ];
  return <TabGenerator TabsContent={tabData} />;
};
export default Home;
