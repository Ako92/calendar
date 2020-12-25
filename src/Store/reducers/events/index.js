import {
  EDIT_EVENT_SUCCESSFUL,
  SAVE_EVENT_ERROR,
  SAVE_EVENT_SUCCESSFUL,
} from "./constants";

const initState = {
  hasError: false,
  events: [],
};
export const eventsReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_EVENT_SUCCESSFUL: {
      /**
       * insert new event into events list
       */
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    }
    case SAVE_EVENT_ERROR: {
      return {
        ...state,
        hasError: true,
      };
    }

    case EDIT_EVENT_SUCCESSFUL: {
      /**
       * find data by index and replace it with new object sent from component
       */
      const tempEvents = [
        ...state.events.slice(0, action.payload.index),
        action.payload.event,
        ...state.events.slice(action.payload.index + 1),
      ];
      return {
        ...state,
        events: tempEvents,
      };
    }
    default:
      return state;
  }
};
