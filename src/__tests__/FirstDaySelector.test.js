import React from "react";
import { render, cleanup } from "@testing-library/react";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);
import FirstDaySelector from "../components/first-day-selector/firstDaySelector.component";

afterEach(cleanup);

test("should call setFirstDay with Jun 03 2020", () => {
  const initialState = {
    holidays: {},
    days: {
      dates: [],
      firstDay: "2020-06-02",
    },
  };
  const store = mockStore(initialState);
  const { getByText } = render(
    <Provider store={store}>
      <FirstDaySelector />
    </Provider>
  );
  const changeButton = getByText("Wednesday", { exact: false });
  changeButton.click();

  const actions = store.getActions();
  expect(actions).toEqual([
    { type: "SET_FIRST_DAY_OF_THE_WEEK", payload: "2020-06-03" },
  ]);
});
