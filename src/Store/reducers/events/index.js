import {
  DELETE_EVENT_SUCCESSFUL,
  EDIT_EVENT_SUCCESSFUL,
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

    case EDIT_EVENT_SUCCESSFUL: {
      /**
       * find data by index and replace it with new object sent from component
       */
      const tempEvents = [
        ...state.events.slice(0, action.payload.index),
        {
          ...action.payload.event,
          currentDate: state.events[action.payload.index].currentDate,
        },
        ...state.events.slice(action.payload.index + 1),
      ];
      return {
        ...state,
        events: tempEvents,
      };
    }
    case DELETE_EVENT_SUCCESSFUL: {
      /**
       * find data by index and delete in redux state
       */
      const tempEvents = [
        ...state.events.slice(0, action.payload),
        ...state.events.slice(action.payload + 1),
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
