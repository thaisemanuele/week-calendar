import * as actionTypes from "../../store/actions/actionTypes";
const INITIAL_STATE = {
  holidays: [],
};

const fetchHolidaysStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const fetchHolidaysSuccess = (state, action) => {
  const holidays = {
    ...action.payload,
  };
  return {
    ...state,
    loading: false,
    holidays: holidays,
  };
};

const fetchHolidaysFailed = (state, action) => {
  return {
    ...state,
    loading: false,
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

    default:
      return state;
  }
};

export default holidaysReducer;
