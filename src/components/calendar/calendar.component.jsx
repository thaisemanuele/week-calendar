import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Tooltip, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import CalendarWeek from "../calendar-week/calendarWeek.component";
import { addDays } from "../../utils/days.utils";

import { setFirstDayOfTheWeek } from "../../redux/store/actions/days";

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

const mapStateToProps = (state) => {
  return {
    startDate: state.days.firstDayOfTheWeek,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartDate: (firstDay) => dispatch(setFirstDayOfTheWeek(firstDay)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
