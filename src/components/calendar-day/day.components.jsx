import React from "react";
import "./day.styles.scss";
import Holiday from "../calendar-holiday/holiday.components";

const Day = ({ date, day, month, dayOfTheWeek, isHoliday, holidays }) => {
  return (
    <div className="day">
      <div className="date">
        <span className="number">{day}</span>
        <span className="month">{month}</span>
      </div>
      <span className={isHoliday ? "day-week holiday" : "day-week"}>
        {dayOfTheWeek}
      </span>
      {isHoliday
        ? holidays.map((holiday) => (
            <Holiday
              key={holiday.name}
              name={holiday.name}
              type={holiday.type}
            />
          ))
        : null}
    </div>
  );
};

export default Day;
