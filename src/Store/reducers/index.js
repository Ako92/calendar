import { combineReducers } from "redux";
import { eventsReducer } from "./events";

const reducers = combineReducers({
  eventsReducer,
});

export default reducers;
