import * as actionTypes from "./actionTypes";
import axios from "../../../axios-holidays";
import * as config from "../../../config";

import { buildHolidays, filterRepeated } from "../../../utils/days.utils";

const fetchHolidaysStart = () => {
  return {
    type: actionTypes.FETCH_HOLIDAYS_START,
  };
};

const fetchHolidaysSuccess = (fetchedHolidays) => {
  return {
    type: actionTypes.FETCH_HOLIDAYS_SUCCESS,
    payload: fetchedHolidays,
  };
};

const fetchHolidaysFailed = () => {
  return {
    type: actionTypes.FETCH_HOLIDAYS_FAILED,
  };
};

const setHolidaysStartDate = (startDate) => {
  return {
    type: actionTypes.SET_HOLIDAYS_START_DATE,
    payload: startDate,
  };
};

const setHolidaysEndDate = (endDate) => {
  return {
    type: actionTypes.SET_HOLIDAYS_END_DATE,
    payload: endDate,
  };
};

export const fetchHolidays = (startDate, endDate, insertBefore, holidays) => {
  return (dispatch) => {
    dispatch(fetchHolidaysStart());
    const requestHeaders = {
      apiKey: config.API_KEY,
      startDate: startDate,
      endDate: endDate,
    };
    axios
      .post("holidays", requestHeaders)
      .then((res) => {
        let fetchedHolidays = [];
        if (!res.data.error) {
          fetchedHolidays = filterRepeated(buildHolidays(res.data.holidays));
        }
        fetchedHolidays = insertBefore
          ? [...fetchedHolidays, ...holidays]
          : [...holidays, ...fetchedHolidays];
        dispatch(fetchHolidaysSuccess(fetchedHolidays));
        insertBefore
          ? dispatch(setHolidaysStartDate(startDate))
          : dispatch(setHolidaysEndDate(endDate));
      })
      .catch((error) => {
        dispatch(fetchHolidaysFailed(error));
      });
  };
};
