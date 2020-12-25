import {
  EDIT_EVENT_SUCCESSFUL,
  SAVE_EVENT_SUCCESSFUL,
} from "../../reducers/events/constants";

export const addEvent = (event) => {
  return {
    type: SAVE_EVENT_SUCCESSFUL,
    payload: event,
  };
};

export const editEventByIndex = (event) => {
  return {
    type: EDIT_EVENT_SUCCESSFUL,
    payload: event,
  };
};
