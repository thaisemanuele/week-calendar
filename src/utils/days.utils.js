import moment from "moment";

export const createDays = (startDate, numDays) => {
  const days = [];
  const firstDate = moment(startDate);
  const lastDate = moment(firstDate).add(numDays - 1, "days");
  let currentDate = firstDate;
  while (currentDate <= lastDate) {
    const newDay = {
      date: moment(currentDate).format("YYYY-MM-DD"),
      dayOfTheMonth: moment(currentDate).date(),
      dayOfTheWeek: moment(currentDate).format("ddd"),
      month: moment(currentDate).format("MMM"),
    };
    days.push(newDay);
    currentDate = moment(currentDate).add(1, "days");
  }
  return days;
};

export const buildHolidays = (data) => {
  const fetchedHolidays = [];
  Object.keys(data).forEach((key) => {
    for (let day of data[key]) {
      fetchedHolidays.push(Object.assign(day, { date: key }));
    }
  });
  return fetchedHolidays;
};

export const filterRepeated = (holidays) => {
  const namesList = [];
  return holidays.reduce((filtered, holiday) => {
    if (!namesList.includes(holiday.name)) {
      namesList.push(holiday.name);
      filtered.push(holiday);
    }
    return filtered;
  }, []);
};

export const checkHoliday = (day, holidays) => {
  const holidaysDates = holidays.map((holiday) => holiday.date);
  return holidaysDates.includes(day.date);
};

export const holidaysByDate = (date, holidays) => {
  return holidays.filter((holiday) => holiday.date === date);
};
