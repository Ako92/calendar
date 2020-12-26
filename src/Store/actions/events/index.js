import {
  DELETE_EVENT_SUCCESSFUL,
  EDIT_EVENT_SUCCESSFUL,
  SAVE_EVENT_SUCCESSFUL,
} from "../../reducers/events/constants";

export const addEvent = (event) => {
  return {
    type: SAVE_EVENT_SUCCESSFUL,
    payload: event,
  };
};

export const editEventByID = (event) => {
  return {
    type: EDIT_EVENT_SUCCESSFUL,
    payload: event,
  };
};

export const deleteEvent = (index) => {
  return {
    type: DELETE_EVENT_SUCCESSFUL,
    payload: index,
  };
};
