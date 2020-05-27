import { combineReducers } from "redux";
import holidaysReducer from "./holidays/holidays.reducer";
import daysReducer from "./days/days.reducer";

const rootReducer = combineReducers({
  holidays: holidaysReducer,
  days: daysReducer,
});

export default rootReducer;
