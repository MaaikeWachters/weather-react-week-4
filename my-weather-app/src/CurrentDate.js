import React, { useState } from "react";
import axios from "axios";

export default function CurrentDate(props) {
  const [dayOfWeek, setDayOfWeek] = useState("Current Weekday");

  function findDayOfWeek(response) {
    let date = new Date(response);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
  }

  function displayDayOfWeek() {
    setDayOfWeek();
  }

  return (
    <div className=" header d-flex p-2 align-items-center">
      <div className="col-3 header-text">Today is:</div>
      <div className="col-9" id="date">
        {dayOfWeek}, {props.month} {props.date}
      </div>
    </div>
  );
}
