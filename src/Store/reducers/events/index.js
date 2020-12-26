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
      const eventIndex = state.events.findIndex(
        (item) => item.id === action.payload.event.id
      );
      const tempEvents = [
        ...state.events.slice(0, eventIndex),
        {
          ...action.payload.event,
          currentDate: state.events[eventIndex].currentDate,
        },
        ...state.events.slice(eventIndex + 1),
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
      const eventIndex = state.events.findIndex(
        (item) => item.id === action.payload
      );
      const tempEvents = [
        ...state.events.slice(0, eventIndex),
        ...state.events.slice(eventIndex + 1),
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
