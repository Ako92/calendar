import React, { useState } from "react";
import PropTypes from "prop-types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import AddEventScreen from "../../Screens/AddEventScreen";
import { addEvent } from "../../Store/actions/events";
import ModalRenderer from "../Modal";
import {
  CircularButtonTag,
  CircularScreenContainerTag,
  CircularScreenDescriptionTag,
} from "../../Styles/globalStyles";
import EventListRenderer from "../EventListRenderer";
import { AddNewItemContainerTag, AddNewItemSpanTag, PlusCharTag } from "./modalEventsStyles";
const ADD_EVENT = "Add Event";
/**
 * Modal Events
 * Will use to get this day events from reducer and render them
 * If there's no event it should shows add new event content
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
  const [eventToEdit, setEventToEdit] = useState();
  const dispatch = useDispatch();

  const { events } = useSelector(
    (state) => ({
      events: state?.eventsReducer?.events,
    }),
    shallowEqual
  );

  const onCancelAddOrEditEvent = () => {
    /**
     * on add or edit cancel
     */
    if (eventToEdit) {
      return setEventToEdit(null);
    }
    setAddNewEvent(false);
  };

  const onAddEventSubmit = (time, title, description) => {
    /**
     * on add submit
     */

    /** to make a unique id */
    const uniqueId = Date.now();

    dispatch(
      addEvent({
        currentDate: CurrentDate,
        time,
        title,
        description,
        id: uniqueId,
      })
    );
    return setAddNewEvent(false);
  };

  const currentDayEvents = events.filter(
    (event) => event.currentDate.getTime() === CurrentDate.getTime()
  );
  const AddEventModalContent = (
    <AddEventScreen
      OnSubmit={onAddEventSubmit}
      OnCancel={onCancelAddOrEditEvent}
    />
  );

  const pageContent = (() => {
    /** this function will decide if there's event/events in current date, it shows event card,
     *  otherwise it will show no event layout, to add new event  */
    if (currentDayEvents && currentDayEvents[0]) {
      return <EventListRenderer ItemsToRender={currentDayEvents} />;
    } else {
      return (
        <CircularScreenContainerTag>
          <CircularButtonTag
            onClick={() => {
              setAddNewEvent(true);
            }}
          >
            <AddNewItemSpanTag>+</AddNewItemSpanTag>
          </CircularButtonTag>
          <CircularScreenDescriptionTag>
            {ADD_EVENT}
          </CircularScreenDescriptionTag>
        </CircularScreenContainerTag>
      );
    }
  })();

  return (
    <>
      {pageContent}
      {currentDayEvents && currentDayEvents[0] && (
        <AddNewItemContainerTag
          onClick={() => {
            setAddNewEvent(true);
          }}
        >
          <PlusCharTag />
          {ADD_EVENT}
        </AddNewItemContainerTag>
      )}
      <ModalRenderer
        ModalProps={{
          Title: ADD_EVENT,
          Content: AddEventModalContent,
        }}
        IsOpenModal={addNewEvent}
        HandleCloseModal={() => {
          setAddNewEvent(false);
        }}
      />
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
