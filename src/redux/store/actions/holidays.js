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

export const fetchHolidays = (startDate, endDate) => {
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
        dispatch(fetchHolidaysSuccess(fetchedHolidays));
      })
      .catch((error) => {
        dispatch(fetchHolidaysFailed(error));
      });
  };
};
