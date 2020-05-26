import React from "react";

import "./homepage.styles.scss";
import CalendarWeek from "../../components/calendar-week/calendarWeek.component";

const HomePage = () => (
  <div className="homepage">
    <CalendarWeek />
  </div>
);

export default HomePage;
