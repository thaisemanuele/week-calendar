import {
  addDays,
  createDays,
  dayOfTheWeekAsString,
  dayOfTheWeekAsNumber,
  retrieveStartYear,
  checkHoliday,
} from "../utils/days.utils";

test("should add 2 days", () => {
  const startDate = "2020-05-22";
  const newDate = addDays(startDate, 2);
  expect(newDate).toEqual("2020-05-24");
});

test("should create seven days", () => {
  const startDate = "2020-05-22";
  const days = createDays(startDate, 7);
  expect(days).toHaveLength(7);
});

test("should return day of the week as a string", () => {
  const sunday = dayOfTheWeekAsString("2020-05-31");
  expect(sunday).toEqual("Sunday");
});

test("should return day of the week represented as a number", () => {
  const saturday = dayOfTheWeekAsNumber("2020-05-30");
  expect(saturday).toEqual("6");
});

test("should retrieve year", () => {
  const year = retrieveStartYear("1995-04-03");
  expect(year).toEqual("1995");
});

test("should return true for a holiday", () => {
  const day = {
    date: "2020-12-25",
  };
  const holidays = {
    dates: [
      {
        date: "2020-12-25",
        name: "Christmas",
        type: "public",
      },
    ],
  };
  const isHoliday = checkHoliday(day, holidays.dates);
  expect(isHoliday).toEqual(true);
});

test("should return false when not a holiday", () => {
  const day = {
    date: "2020-12-12",
  };
  const holidays = {
    dates: [
      {
        date: "2020-12-25",
        name: "Christmas",
        type: "public",
      },
    ],
  };
  const isHoliday = checkHoliday(day, holidays.dates);
  expect(isHoliday).toEqual(false);
});
