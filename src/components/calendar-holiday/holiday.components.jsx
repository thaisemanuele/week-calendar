import React from "react";
import "./holiday.styles.scss";

const Holiday = ({ name, date, type }) => (
  <div className="holiday">
    <span className="name">{name}</span>
    <span className="date">{date}</span>
    <span className="type">{type}</span>
  </div>
);

export default Holiday;
