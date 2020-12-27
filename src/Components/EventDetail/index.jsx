import React from "react";
import PropTypes from "prop-types";
import {
  DescriptionPTag,
  DescriptionContainerTag,
  EventDetailContainerTag,
  RemainingTimeTagContainerTag,
  TitleContainerTag,
} from "./eventDetailStyles";
import TimeRenderer from "../TimeRenderer";
import EventCard from "../EventCard";

/**
 * Event Detail:
 * Will use to render detail screen of event
 * @component
 * @example
 *
 * return (
 *   <EventDetail
 *      Event={{
 *          description: "123123",
 *          id: 1609004507508,
 *          time: "12333",
 *          title: "ALI"
 *      }}
 *      OnEdit={()=> // on edit function}
 *      OnDelete={()=> // on edit function}
 * />
 * )
 */
const EventDetail = (props) => {
  const now = new Date().getTime();
  const { Event, OnEdit, OnDelete } = props;
  const splittedTime = Event.time.split(":");
  const EventTime = Event.currentDate.setHours(
    splittedTime[0],
    splittedTime[1]
  );
  const distanceWithNow = EventTime - now;
  var days = Math.floor(distanceWithNow / (1000 * 60 * 60 * 24));

  var hours = Math.floor(
    (distanceWithNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distanceWithNow % (1000 * 60 * 60)) / (1000 * 60));
  return (
    <EventDetailContainerTag>
      <RemainingTimeTagContainerTag>
        <TimeRenderer Type="Days" Value={days} />
        <TimeRenderer Type="Hours" Value={hours} />
        <TimeRenderer Type="Minutes" Value={minutes} />
      </RemainingTimeTagContainerTag>
      <TitleContainerTag>
        <EventCard
          Title={Event.title}
          OnEdit={() => OnEdit(Event)}
          OnDelete={() => OnDelete(Event.id)}
          HasBorderBottom={false}
        />
      </TitleContainerTag>
      <DescriptionContainerTag>
        <DescriptionPTag>{Event.description}</DescriptionPTag>
      </DescriptionContainerTag>
    </EventDetailContainerTag>
  );
};
export default EventDetail;
EventDetail.propTypes = {
  /** selected event details to render */
  Event: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    time: PropTypes.string,
    title: PropTypes.string,
  }),
  /** OnEdit button clicked */
  OnEdit: PropTypes.func.isRequired,
  /** OnEdit Delete clicked */
  OnDelete: PropTypes.func.isRequired,
};
