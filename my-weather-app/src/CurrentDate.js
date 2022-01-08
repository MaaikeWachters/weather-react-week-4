import React from "react";

export default function CurrentDate(props) {
  return (
    <div className=" header d-flex p-2 align-items-center">
      <div className="col-3 header-text">Today is:</div>
      <div className="col-9" id="date">
        {props.dayOfWeek}, {props.month} {props.date}
      </div>
    </div>
  );
}
