import { combineReducers } from "redux";
import holidaysReducer from "./holidays/holidays.reducer";

const rootReducer = combineReducers({
  holidays: holidaysReducer,
});

export default rootReducer;
