import React from "react";
import { connect } from "react-redux";

const CalendarWeek = ({ holidays }) => (
  <div className="calendar-week">Calendar week</div>
);

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays,
  };
};

export default connect(mapStateToProps)(CalendarWeek);
