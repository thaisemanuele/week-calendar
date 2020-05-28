import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import "./homepage.styles.scss";
import CalendarWeek from "../../components/calendar-week/calendarWeek.component";

import { IconButton, Tooltip } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { fetchHolidays } from "../../redux/store/actions/holidays";
import { setDays } from "../../redux/store/actions/days";

import {
  createDays,
  retrieveStartYear,
  retrieveEndYear,
  retrieveEndDate,
} from "../../utils/days.utils";

const DATE_FORMAT = "YYYY-MM-DD";

const HomePage = (props) => {
  const [startDate, setStartDate] = useState(moment().format(DATE_FORMAT));
  const [daysToDisplay] = useState(7);

  const [startYear, setStartYear] = useState(moment().format("YYYY"));
  const [endYear, setEndYear] = useState(
    retrieveEndYear(startDate, daysToDisplay)
  );
  const [fetchHolidaysStart, setfetchHolidaysStart] = useState(
    moment().format(DATE_FORMAT)
  );
  const [fetchHolidaysEnd, setfetchHolidaysEnd] = useState(
    moment(startDate).add(28, "days").format(DATE_FORMAT)
  );

  const holidaysStartDate = props.holidays.startDate;
  const holidaysEndDate = props.holidays.endDate;

  const { getHolidays, setDays } = props;

  useEffect(() => {
    setDays(createDays(startDate, daysToDisplay));
    setStartYear(retrieveStartYear(startDate));
    setEndYear(retrieveEndYear(startDate, daysToDisplay));
    console.log(startDate, holidaysStartDate, startDate < holidaysStartDate);

    if (startDate < holidaysStartDate) {
      getHolidays(
        moment(holidaysStartDate).subtract(28, "days").format(DATE_FORMAT),
        holidaysStartDate,
        holidaysStartDate,
        props.holidays.dates
      );
    } else if (retrieveEndDate(startDate, daysToDisplay) > holidaysEndDate) {
      getHolidays(
        moment(holidaysEndDate).add(1, "days").format(DATE_FORMAT),
        moment(holidaysEndDate).add(28, "days").format(DATE_FORMAT),
        holidaysStartDate,
        props.holidays.dates
      );
    }
  }, [setDays, setStartYear, setEndYear, startDate, daysToDisplay]);

  return (
    <div className="homepage">
      <div className="calendar-header">
        <div>{startYear}</div>
        {startYear !== endYear ? <div>{endYear}</div> : null}
      </div>
      <div className="calendar">
        <Tooltip title="Previous Week">
          <IconButton
            classes={{
              root: "next-icon",
            }}
            onClick={() =>
              setStartDate(
                moment(startDate).add(-7, "days").format(DATE_FORMAT)
              )
            }
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
            onClick={() =>
              setStartDate(moment(startDate).add(7, "days").format(DATE_FORMAT))
            }
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
