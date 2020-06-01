import React from "react";
import { render, cleanup } from "@testing-library/react";

import configureStore from "redux-mock-store";
const middlewares = [];
const mockStore = configureStore(middlewares);
import { Provider } from "react-redux";

import Calendar from "../components/calendar/calendar.component";

afterEach(cleanup);

test("should call setStartDate", () => {
  const initialState = {
    holidays: {
      dates: [],
    },
    days: {
      dates: [],
    },
  };
  const store = mockStore(initialState);
  const setStartDate = jest.fn();

  const { getByTitle } = render(
    <Provider store={store}>
      <Calendar
        startYear={"2020"}
        startDate={"2020-06-02"}
        setStartDate={setStartDate}
      />
    </Provider>
  );
  const changeButton = getByTitle("Previous Week");
  changeButton.firstChild.click();

  expect(setStartDate).toHaveBeenCalledTimes(1);
  expect(setStartDate).toHaveBeenCalledWith("2020-05-26");
});

test("should call setStartDate", () => {
  const initialState = {
    holidays: {
      dates: [],
    },
    days: {
      dates: [],
    },
  };
  const store = mockStore(initialState);
  const setStartDate = jest.fn();

  const { getByTitle } = render(
    <Provider store={store}>
      <Calendar
        startYear={"2020"}
        startDate={"2020-06-02"}
        setStartDate={setStartDate}
      />
    </Provider>
  );
  const changeButton = getByTitle("Next Week");
  changeButton.firstChild.click();

  expect(setStartDate).toHaveBeenCalledTimes(1);
  expect(setStartDate).toHaveBeenCalledWith("2020-06-09");
});
