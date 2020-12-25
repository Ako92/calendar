import { SAVE_EVENT_SUCCESSFUL } from "../../reducers/events/constants";

export const addEvent = (event) => {
  return {
    type: SAVE_EVENT_SUCCESSFUL,
    payload: event,
  };
};
