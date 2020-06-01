import React from "react";
import { render, cleanup } from "@testing-library/react";

import FirstDaySelector from "../components/first-day-selector/firstDaySelector.component";

afterEach(cleanup);

test("should call FirstDaySelector with Jun 03 2020", () => {
  const onFirstDayChanged = jest.fn();
  const { getByText } = render(
    <FirstDaySelector
      firstDay={"2020-06-02"}
      onFirstDayChanged={onFirstDayChanged}
    />
  );
  const changeButton = getByText("Wednesday", { exact: false });
  changeButton.click();

  expect(onFirstDayChanged).toHaveBeenCalledTimes(1);
  expect(onFirstDayChanged).toHaveBeenCalledWith("2020-06-03");
});
