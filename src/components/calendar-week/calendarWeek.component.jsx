import React from "react";
import { connect } from "react-redux";

import "./calendarWeek.styles.scss";
import Holiday from "../calendar-day/holiday.components";

const CalendarWeek = ({ holidays }) => {
  return holidays.dates ? (
    <div className="week">
      {holidays.dates.map((day) => {
        return (
          <Holiday
            key={day.name}
            name={day.name}
            type={day.type}
            date={day.date}
          />
        );
      })}
    </div>
  ) : (
    <h1>day2</h1>
  );
};

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays,
  };
};

export default connect(mapStateToProps)(CalendarWeek);
