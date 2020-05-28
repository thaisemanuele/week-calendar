import React, { Fragment } from "react";

import { Tooltip, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import FirstDaySelector from "../first-day-selector/firstDaySelector.component";
import CalendarWeek from "../calendar-week/calendarWeek.component";
import { addDays } from "../../utils/days.utils";

import "./mobileCalendar.styles.scss";

const Calendar = ({
  startYear,
  startDate,
  setStartDate,
  endYear,
  calendarClass,
}) => {
  return (
    <Fragment>
      <div className="calendar-header">
        <div>{startYear}</div>
        <FirstDaySelector
          firstDay={startDate}
          onFirstDayChanged={(newFirstday) => setStartDate(newFirstday)}
        />
        {startYear !== endYear ? <div>{endYear}</div> : null}
      </div>
      <div className={calendarClass}>
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
    </Fragment>
  );
};

export default Calendar;
