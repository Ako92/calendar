import React, { useState } from "react";
import PropTypes from "prop-types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  AddButtonTag,
  AddEventTag,
  NoEventContainer,
} from "./modalEventsStyles";
import AddEventScreen from "../../Screens/AddEventScreen";
import {
  addEvent,
  deleteEvent,
  editEventByIndex,
} from "../../Store/actions/events";
import EventCard from "../EventCard";
/**
 * Modal Events
 * Will use to get this day events from reducer and render them
 * If there's no event it should be
 *
 * @component
 * @example
 *
 * return (
 *   <ModalEvents CurrentDate={new Date()} />
 * )
 */
const ModalEvents = (props) => {
  const { CurrentDate } = props;
  const [addNewEvent, setAddNewEvent] = useState(false);
  const dispatch = useDispatch();
  const [eventToEdit, setEventToEdit] = useState();
  const { events } = useSelector(
    (state) => ({
      events: state?.eventsReducer?.events,
    }),
    shallowEqual
  );
  const CurrentDayEvents = events.filter(
    (event) => event.currentDate.getTime() === CurrentDate.getTime()
  );
  if (addNewEvent || eventToEdit) {
    return (
      <AddEventScreen
        InitialValues={eventToEdit?.event}
        OnSubmit={(time, title, description) => {
          if (eventToEdit) {
            dispatch(
              editEventByIndex({
                event: { currentDate: CurrentDate, time, title, description },
                index: eventToEdit.index,
              })
            );
            setEventToEdit(null);
            return setAddNewEvent(false);
          }

          dispatch(
            addEvent({ currentDate: CurrentDate, time, title, description })
          );
          return setAddNewEvent(false);
        }}
        OnCancel={() => {
          if (eventToEdit) {
            return setEventToEdit(null);
          }
          setAddNewEvent(false);
        }}
      />
    );
  }
  if (CurrentDayEvents && CurrentDayEvents[0]) {
    return (
      <>
        {CurrentDayEvents?.map((event, index) => {
          return (
            <EventCard
              Title={event.title}
              OnEdit={() => {
                setEventToEdit({ event, index });
              }}
              OnDelete={() => {
                dispatch(deleteEvent(index));
              }}
            />
          );
        })}
      </>
    );
  }

  return (
    <>
      <NoEventContainer>
        <AddButtonTag
          onClick={() => {
            setAddNewEvent(true);
          }}
        >
          +
        </AddButtonTag>
        <AddEventTag>Add Event</AddEventTag>
      </NoEventContainer>
    </>
  );
};
export default ModalEvents;
ModalEvents.propTypes = {
  /**
   * Current Selected date
   */
  CurrentDate: PropTypes.instanceOf(Date).isRequired,
};
