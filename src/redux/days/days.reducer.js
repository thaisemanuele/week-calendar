import * as actionTypes from "../store/actions/actionTypes";

const INITIAL_STATE = {
  dates: [],
};

const daysReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_DAYS:
      return {
        ...state,
        dates: action.payload,
      };

    default:
      return state;
  }
};

export default daysReducer;
