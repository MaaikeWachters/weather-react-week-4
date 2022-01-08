import React from "react";

export default function Greeting() {
  let date = new Date();
  let hours = date.getHours();

  if (hours < 6) {
    hours = `good night`;
  } else if (hours >= 6 && hours < 12) {
    hours = `good morning`;
  } else if (hours >= 12 && hours < 18) {
    hours = `good afternoon`;
  } else {
    hours = `good evening`;
  }

  return <div className="greeting">{hours}</div>;
}
