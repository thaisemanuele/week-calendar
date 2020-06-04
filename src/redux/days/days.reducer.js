import * as actionTypes from "../store/actions/actionTypes";
import { today } from "../../utils/days.utils";

const INITIAL_STATE = {
  dates: [],
  firstDayOfTheWeek: today(),
};

const daysReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_DAYS:
      return {
        ...state,
        dates: action.payload,
      };
    case actionTypes.SET_FIRST_DAY_OF_THE_WEEK:
      return {
        ...state,
        firstDayOfTheWeek: action.payload,
      };

    default:
      return state;
  }
};

export default daysReducer;
