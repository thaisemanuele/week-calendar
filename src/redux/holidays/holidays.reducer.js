import * as actionTypes from "../store/actions/actionTypes";
import moment from "moment";
import { retrieveEndDate } from "../../utils/days.utils";

const DATE_FORMAT = "YYYY-MM-DD";
const INITIAL_STATE = {
  dates: [],
  startDate: moment().format(DATE_FORMAT),
  endDate: retrieveEndDate(moment().format(DATE_FORMAT)),
};

const fetchHolidaysStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const fetchHolidaysSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    dates: action.payload,
  };
};

const fetchHolidaysFailed = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};

const setHolidaysStartDate = (state, action) => {
  return {
    ...state,
    startDate: action.payload,
  };
};

const setHolidaysEndDate = (state, action) => {
  return {
    ...state,
    endDate: action.payload,
  };
};

const holidaysReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOLIDAYS_START:
      return fetchHolidaysStart(state, action);

    case actionTypes.FETCH_HOLIDAYS_SUCCESS:
      return fetchHolidaysSuccess(state, action);

    case actionTypes.FETCH_HOLIDAYS_FAILED:
      return fetchHolidaysFailed(state, action);

    case actionTypes.SET_HOLIDAYS_START_DATE:
      return setHolidaysStartDate(state, action);

    case actionTypes.SET_HOLIDAYS_END_DATE:
      return setHolidaysEndDate(state, action);

    default:
      return state;
  }
};

export default holidaysReducer;
