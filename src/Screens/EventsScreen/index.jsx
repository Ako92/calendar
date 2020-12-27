import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import EventListRenderer from "../../Components/EventListRenderer";

/**
 * Component for render events tab
 *  this will get all of events from redux and render them categorized and sorted by date.
 * @component
 * @example
 *
 * return (
 *   <Events
 * />
 * )
 */
const Events = () => {
  const { events } = useSelector(
    (state) => ({
      events: state?.eventsReducer?.events,
    }),
    shallowEqual
  );

  return <EventListRenderer ItemsToRender={events} IsCategorizedByDate={true}/>;
};
export default Events;
