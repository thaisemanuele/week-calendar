import React from "react";
import "./day.styles.scss";
import Holiday from "../calendar-holiday/holiday.component";
import MobileHoliday from "../holiday-card/holidayCard.component";
import { Media } from "react-breakpoints";

const Day = ({ date, day, month, dayOfTheWeek, isHoliday, holidays }) => {
  return (
    <div className="day">
      <div className="date-wrapper">
        <div className="date">
          <span className="number">{day}</span>
          <span className="month">{month}</span>
        </div>
        <div className={isHoliday ? "day-week holiday" : "day-week"}>
          {dayOfTheWeek}
        </div>
      </div>
      <div className="holidays">
        {isHoliday
          ? holidays.map((holiday) => (
              <Media key={holiday.name}>
                {({ breakpoints, currentBreakpoint }) => {
                  return breakpoints[currentBreakpoint] >
                    breakpoints.mobileLandscape ? (
                    <Holiday
                      key={holiday.name}
                      name={holiday.name}
                      type={holiday.type}
                    />
                  ) : (
                    <MobileHoliday
                      key={holiday.name}
                      name={holiday.name}
                      type={holiday.type}
                    />
                  );
                }}
              </Media>
            ))
          : null}
      </div>
    </div>
  );
};

export default Day;
