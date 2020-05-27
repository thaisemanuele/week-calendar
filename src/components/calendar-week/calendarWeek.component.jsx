import React from "react";
import { connect } from "react-redux";

const CalendarWeek = ({ holidays }) => {
  return holidays.dates ? (
    holidays.dates.map((day) => {
      return (
        <div key={day.name}>
          {day.name} - {day.type}
        </div>
      );
    })
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
