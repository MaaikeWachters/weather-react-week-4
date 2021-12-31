import React from "react";

export default function CurrentCity(props) {
  return (
    <div className="header d-flex p-2 align-items-center">
      <div className="col-3 header-text">You are in:</div>
      <div className="col-9" id="city">
        {props.city}
      </div>
    </div>
  );
}
