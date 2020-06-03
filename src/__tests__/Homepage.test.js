import React from "react";
import { render } from "@testing-library/react";

import configureStore from "redux-mock-store";
const middlewares = [];
const mockStore = configureStore(middlewares);
import { Provider } from "react-redux";
import HomePage from "../pages/homepage/homepage.component";
import ReactBreakpoints from "react-breakpoints/lib/ReactBreakpoints";

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
};

test("renders app bar with title", () => {
  const initialState = {
    holidays: {},
    days: {
      dates: [],
    },
  };
  const { getByText } = render(
    <Provider store={mockStore(initialState)}>
      <ReactBreakpoints breakpoints={breakpoints}>
        <HomePage />
      </ReactBreakpoints>
    </Provider>
  );
  const myCalendar = getByText("My calendar", { exact: false });
  expect(myCalendar).toBeTruthy();
});
