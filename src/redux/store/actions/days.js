import * as actionTypes from "./actionTypes";

export const setDays = (days) => {
  return {
    type: actionTypes.SET_DAYS,
    payload: days,
  };
};

export const setFirstDayOfTheWeek = (firstDay) => {
  return {
    type: actionTypes.SET_FIRST_DAY_OF_THE_WEEK,
    payload: firstDay,
  };
};
