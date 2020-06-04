import React from "react";
import { render } from "@testing-library/react";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);

import CalendarWeek from "../components/calendar-week/calendarWeek.component";

test("should render error message when holidays has no dates", () => {
  const initialState = {
    holidays: {},
    days: {
      dates: [],
    },
  };
  const store = mockStore(initialState);
  const { container } = render(
    <Provider store={store}>
      <CalendarWeek />
    </Provider>
  );
  expect(container.textContent).toMatch("Something went wrong!");
});

test("should render 22nd of May", () => {
  const days = {
    dates: [
      {
        date: "2020-05-22",
        dayOfTheMonth: "22",
        month: "May",
        dayOfTheWeek: "Friday",
        isHoliday: false,
        holidays: [],
      },
    ],
  };

  const holidays = {
    dates: [],
  };
  const initialState = {
    holidays,
    days,
  };
  const store = mockStore(initialState);
  const { container } = render(
    <Provider store={store}>
      <CalendarWeek days={days} holidays={holidays} />
    </Provider>
  );
  expect(container.textContent).toMatch("22");
  expect(container.textContent).toMatch("May");
  expect(container.textContent).toMatch("Friday");
});
