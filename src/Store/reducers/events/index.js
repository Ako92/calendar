import { SAVE_EVENT_ERROR, SAVE_EVENT_SUCCESSFUL } from "./constants";

const initState = {
  hasError: false,
  events: {},
};
export const eventsReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_EVENT_SUCCESSFUL: {
      return {
        ...state,
        events: {...state.events, ...action.payload},
      };
    }
    case SAVE_EVENT_ERROR: {
      return {
        ...state,
        hasError: true,
      };
    }
    default:
      return state;
  }
};
