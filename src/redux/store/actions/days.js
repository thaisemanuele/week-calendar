import * as actionTypes from "./actionTypes";

export const setDays = (days) => {
  return {
    type: actionTypes.SET_DAYS,
    payload: days,
  };
};
