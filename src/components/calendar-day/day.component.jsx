import React from "react";
import "./day.styles.scss";
import HolidayCard from "../holiday-card/holidayCard.component";

const Day = ({ day, month, dayOfTheWeek, isHoliday, holidays }) => {
  return (
    <div className="day">
      <span className="number">{day}</span>
      <span className="month">{month}</span>
      <div className={isHoliday ? "day-week holiday" : "day-week"}>
        {dayOfTheWeek}
      </div>
      <div className="holidays">
        {isHoliday
          ? holidays.map((holiday) => (
              <HolidayCard
                key={holiday.name}
                name={holiday.name}
                type={holiday.type}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Day;
