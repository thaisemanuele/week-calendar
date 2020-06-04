import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import "./homepage.styles.scss";
import { Media } from "react-breakpoints";

import { fetchHolidays } from "../../redux/store/actions/holidays";
import { setDays } from "../../redux/store/actions/days";

import {
  createDays,
  retrieveStartYear,
  retrieveEndYear,
  retrieveEndDate,
  currentYear,
  addDays,
} from "../../utils/days.utils";

import Calendar from "../../components/calendar/calendar.component";
import CalendarAppBar from "../../components/calendar-appbar/calendarAppbar.component";

const HomePage = ({ setDays, holidays, getHolidays, startDate }) => {
  const [daysToDisplay] = useState(7);

  const [startYear, setStartYear] = useState(currentYear());
  const [endYear, setEndYear] = useState(
    retrieveEndYear(startDate, daysToDisplay)
  );

  const holidaysStartDate = holidays.startDate;
  const holidaysEndDate = holidays.endDate;

  useEffect(() => {
    setDays(createDays(startDate, daysToDisplay));
    setStartYear(retrieveStartYear(startDate));
    setEndYear(retrieveEndYear(startDate, daysToDisplay));

    if (startDate < holidaysStartDate) {
      getHolidays(
        addDays(holidaysStartDate, -28),
        holidaysStartDate,
        holidaysStartDate,
        holidays.dates
      );
    } else if (retrieveEndDate(startDate, daysToDisplay) > holidaysEndDate) {
      getHolidays(
        addDays(holidaysEndDate, 1),
        addDays(holidaysEndDate, 28),
        holidaysStartDate,
        holidays.dates
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
    <Fragment>
      <CalendarAppBar />
      <div className="homepage">
        <Media>
          {({ breakpoints, currentBreakpoint }) => {
            const calendarClass =
              breakpoints[currentBreakpoint] > breakpoints.mobileLandscape
                ? "calendar"
                : "mobile-calendar";
            return (
              <Calendar
                startYear={startYear}
                endYear={endYear}
                calendarClass={calendarClass}
              />
            );
          }}
        </Media>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays,
    days: state.days,
    startDate: state.days.firstDayOfTheWeek,
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
