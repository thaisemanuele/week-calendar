import React from "react";
import { connect } from "react-redux";

import "./calendarWeek.styles.scss";
import Day from "../calendar-day/day.components";

import { checkHoliday, holidaysByDate } from "../../utils/days.utils";

const CalendarWeek = ({ days, holidays }) => {
  return holidays.dates ? (
    <div className="week">
      {days.dates.map((day) => {
        const isHoliday = checkHoliday(day, holidays.dates);
        return (
          <Day
            key={day.date}
            date={day.date}
            day={day.dayOfTheMonth}
            month={day.month}
            dayOfTheWeek={day.dayOfTheWeek}
            isHoliday={isHoliday}
            holidays={
              isHoliday ? holidaysByDate(day.date, holidays.dates) : null
            }
          />
        );
      })}
    </div>
  ) : (
    <h1>Something went wrong!</h1>
  );
};

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays,
    days: state.days,
  };
};

export default connect(mapStateToProps)(CalendarWeek);
