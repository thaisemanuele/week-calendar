import * as actionTypes from "./actionTypes";
import axios from "../../axios-holidays";
import * as config from "../../config";

export const fetchHolidaysStart = () => {
  return {
    type: actionTypes.FETCH_HOLIDAYS_START,
  };
};

export const fetchHolidaysSuccess = (fetchedHolidays) => {
  return {
    type: actionTypes.FETCH_HOLIDAYS_SUCCESS,
    payload: fetchedHolidays,
  };
};

export const fetchHolidaysFailed = () => {
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
          fetchedHolidays = buildHolidays(res.data.holidays);
        }
        dispatch(fetchHolidaysSuccess(fetchedHolidays));
      })
      .catch((error) => {
        dispatch(fetchHolidaysFailed(error));
      });
  };
};

function buildHolidays(data) {
  const fetchedHolidays = [];
  Object.keys(data).forEach((key) => {
    for (let day of data[key]) {
      fetchedHolidays.push(Object.assign(day, { date: key }));
    }
  });
  return fetchedHolidays;
}
