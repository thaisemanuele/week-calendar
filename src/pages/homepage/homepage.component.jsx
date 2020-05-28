import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./homepage.styles.scss";
import CalendarWeek from "../../components/calendar-week/calendarWeek.component";

import { IconButton, Tooltip } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { fetchHolidays } from "../../redux/store/actions/holidays";
import { setDays } from "../../redux/store/actions/days";

import {
  today,
  createDays,
  retrieveStartYear,
  retrieveEndYear,
  retrieveEndDate,
  currentYear,
  addDays,
} from "../../utils/days.utils";

import FirstDaySelector from "../../components/first-day-selector/firstDaySelector.component";

const HomePage = (props) => {
  const [startDate, setStartDate] = useState(today());
  const [daysToDisplay] = useState(7);

  const [startYear, setStartYear] = useState(currentYear());
  const [endYear, setEndYear] = useState(
    retrieveEndYear(startDate, daysToDisplay)
  );

  const holidaysStartDate = props.holidays.startDate;
  const holidaysEndDate = props.holidays.endDate;

  const { getHolidays, setDays } = props;

  useEffect(() => {
    setDays(createDays(startDate, daysToDisplay));
    setStartYear(retrieveStartYear(startDate));
    setEndYear(retrieveEndYear(startDate, daysToDisplay));

    if (startDate < holidaysStartDate) {
      getHolidays(
        addDays(holidaysStartDate, -28),
        holidaysStartDate,
        holidaysStartDate,
        props.holidays.dates
      );
    } else if (retrieveEndDate(startDate, daysToDisplay) > holidaysEndDate) {
      getHolidays(
        addDays(holidaysEndDate, 1),
        addDays(holidaysEndDate, 28),
        holidaysStartDate,
        props.holidays.dates
      );
    }
  }, [
    setDays,
    setStartYear,
    setEndYear,
    getHolidays,
    startDate,
    daysToDisplay,
  ]);

  return (
    <div className="homepage">
      <div className="calendar-header">
        <div>{startYear}</div>
        <FirstDaySelector
          firstDay={startDate}
          onFirstDayChanged={(newFirstday) => setStartDate(newFirstday)}
        />
        {startYear !== endYear ? <div>{endYear}</div> : null}
      </div>
      <div className="calendar">
        <Tooltip title="Previous Week">
          <IconButton
            classes={{
              root: "next-icon",
            }}
            onClick={() => setStartDate(addDays(startDate, -7))}
          >
            <NavigateBeforeIcon />
          </IconButton>
        </Tooltip>
        <CalendarWeek />
        <Tooltip title="Next Week">
          <IconButton
            classes={{
              root: "next-icon",
            }}
            onClick={() => setStartDate(addDays(startDate, 7))}
          >
            <NavigateNextIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays,
    days: state.days,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getHolidays: (
    fetchHolidaysStart,
    fetchHolidaysEnd,
    holidaysStartDate,
    holidays
  ) => {
    const insertBefore = fetchHolidaysStart < holidaysStartDate;
    dispatch(
      fetchHolidays(
        fetchHolidaysStart,
        fetchHolidaysEnd,
        insertBefore,
        Object.freeze(holidays)
      )
    );
  },
  setDays: (days) => dispatch(setDays(days)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
