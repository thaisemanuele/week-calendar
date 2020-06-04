import React from "react";
import { render, cleanup } from "@testing-library/react";

import configureStore from "redux-mock-store";
const middlewares = [];
const mockStore = configureStore(middlewares);
import { Provider } from "react-redux";

import Calendar from "../components/calendar/calendar.component";

afterEach(cleanup);

test("should send action with May 26 2020", () => {
  const initialState = {
    holidays: {
      dates: [],
    },
    days: {
      dates: [],
      firstDayOfTheWeek: "2020-06-02",
    },
  };
  const store = mockStore(initialState);

  const { getByTitle } = render(
    <Provider store={store}>
      <Calendar startYear={"2020"} />
    </Provider>
  );
  const changeButton = getByTitle("Previous Week");
  changeButton.firstChild.click();

  const actions = store.getActions();
  expect(actions).toEqual([
    { type: "SET_FIRST_DAY_OF_THE_WEEK", payload: "2020-05-26" },
  ]);
});

test("should send action with Jun 09 2020", () => {
  const initialState = {
    holidays: {
      dates: [],
    },
    days: {
      dates: [],
      firstDayOfTheWeek: "2020-06-02",
    },
  };
  const store = mockStore(initialState);

  const { getByTitle } = render(
    <Provider store={store}>
      <Calendar startYear={"2020"} />
    </Provider>
  );
  const changeButton = getByTitle("Next Week");
  changeButton.firstChild.click();

  const actions = store.getActions();
  expect(actions).toEqual([
    { type: "SET_FIRST_DAY_OF_THE_WEEK", payload: "2020-06-09" },
  ]);
});
