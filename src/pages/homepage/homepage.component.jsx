import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import "./homepage.styles.scss";
import CalendarWeek from "../../components/calendar-week/calendarWeek.component";

import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { fetchHolidays } from "../../redux/store/actions/holidays";
import { setDays } from "../../redux/store/actions/days";

import { createDays } from "../../utils/days.utils";

const HomePage = (props) => {
  const [startDate, setStarDate] = useState(moment().format("YYYY-MM-DD"));
  const [daysToDisplay, setDaysToDisplay] = useState(7);

  const { initHolidays, setDays } = props;

  useEffect(() => {
    initHolidays();
  }, [initHolidays]);

  useEffect(() => {
    setDays(createDays(startDate, daysToDisplay));
  }, [startDate]);

  return (
    <div className="homepage">
      <div className="calendar">
        <IconButton
          classes={{
            root: "next-icon",
          }}
          onClick={() => setStarDate(moment(startDate).add(-7, "days"))}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <CalendarWeek />
        <IconButton
          classes={{
            root: "next-icon",
          }}
          onClick={() => setStarDate(moment(startDate).add(7, "days"))}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  initHolidays: () => dispatch(fetchHolidays("2020-06-02", "2020-06-27")),
  setDays: (days) => dispatch(setDays(days)),
});

export default connect(null, mapDispatchToProps)(HomePage);
