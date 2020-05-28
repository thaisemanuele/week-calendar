import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import {
  retrieveEndDate,
  dayOfTheWeekAsString,
  dayOfTheWeekAsNumber,
} from "../../utils/days.utils";

export default function FirstDaySelector(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const currentDay = dayOfTheWeekAsString(props.firstDay);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (value) => {
    handleClose();
    const daysToAdd = value - dayOfTheWeekAsNumber(props.firstDay); // (0 ... 6) - currentDayOfTheWeek
    console.log(daysToAdd);
    if (Math.abs(daysToAdd) < 7) {
      const newFirstDay = retrieveEndDate(props.firstDay, daysToAdd);
      console.log(newFirstDay);
      props.onFirstDayChanged(newFirstDay);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        First Day: {currentDay}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleChange(1)}>Monday</MenuItem>
        <MenuItem onClick={() => handleChange(2)}>Tuesday</MenuItem>
        <MenuItem onClick={() => handleChange(3)}>Wednesday</MenuItem>
        <MenuItem onClick={() => handleChange(4)}>Thursday</MenuItem>
        <MenuItem onClick={() => handleChange(5)}>Friday</MenuItem>
        <MenuItem onClick={() => handleChange(6)}>Saturday</MenuItem>
        <MenuItem onClick={() => handleChange(0)}>Sunday</MenuItem>
      </Menu>
    </div>
  );
}
