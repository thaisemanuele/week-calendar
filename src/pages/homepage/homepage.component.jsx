import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./homepage.styles.scss";
import CalendarWeek from "../../components/calendar-week/calendarWeek.component";

import { fetchHolidays } from "../../store/actions/holidays";

const HomePage = (props) => {
  useEffect(() => {
    const { initHolidays } = props;
    initHolidays();
  }, [props]);

  return (
    <div className="homepage">
      <CalendarWeek />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  initHolidays: () => dispatch(fetchHolidays("2020-06-02", "2020-06-27")),
});

export default connect(null, mapDispatchToProps)(HomePage);
