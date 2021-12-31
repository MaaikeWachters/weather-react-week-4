import React from "react";

export default function Greeting(props) {
  return (
    <div>
      <div id="greeting">{props.timeOfDay}</div>
    </div>
  );
}
