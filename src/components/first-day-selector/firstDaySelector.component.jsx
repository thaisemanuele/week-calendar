import React from "react";
import { connect } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import {
  retrieveEndDate,
  dayOfTheWeekAsString,
  dayOfTheWeekAsNumber,
} from "../../utils/days.utils";
import { ListItem, ListItemText } from "@material-ui/core";

import { setFirstDayOfTheWeek } from "../../redux/store/actions/days";

const options = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const FirstDaySelector = ({ firstDay, setFirstDay }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const currentDay = dayOfTheWeekAsString(firstDay);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (value) => {
    handleClose();
    const daysToAdd = value - dayOfTheWeekAsNumber(firstDay); // (0 ... 6) - currentDayOfTheWeek
    if (Math.abs(daysToAdd) < 7) {
      const newFirstDay = retrieveEndDate(firstDay, daysToAdd);
      setFirstDay(newFirstDay);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ListItem
        button
        divider
        aria-haspopup="true"
        aria-controls="days-menu"
        aria-label="first-day"
        onClick={handleClick}
        role="listitem"
      >
        <ListItemText primary="First Day" secondary={currentDay} />
      </ListItem>
      <Menu
        id="days-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem key={option} onClick={() => handleChange(index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    firstDay: state.days.firstDayOfTheWeek,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFirstDay: (firstDay) => dispatch(setFirstDayOfTheWeek(firstDay)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstDaySelector);
