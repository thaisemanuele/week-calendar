import React from "react";
import "./holiday.styles.scss";

import { Chip } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";

const MobileHoliday = ({ name, date, type }) => (
  <div className="holiday">
    <div className="name">{name}</div>
    <Chip
      variant="outlined"
      color="secondary"
      size="small"
      icon={<EventIcon />}
      label={type}
    />
  </div>
);

export default MobileHoliday;
