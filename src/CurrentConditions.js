import React from "react";
import CurrentCity from "./CurrentCity";
import CurrentDate from "./CurrentDate";
import CurrentWeather from "./CurrentWeather";

export default function CurrentConditions() {
  return (
    <div>
      <div className="row">
        <CurrentCity city="Rotterdam" />
        <CurrentDate dayOfWeek="Saturday" month="December" date={18} />
      </div>

      <CurrentWeather
        imgUrl="./icons/01d.png"
        degreesCelsius={10}
        description="Sunny"
        humidity={25}
        windSpeed={2}
      />
    </div>
  );
}
