import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="row weather">
      <div className="col-6 left">
        <div className="weather-temperature d-flex p-2 align-items-center">
          <img src={props.imgUrl} id="icon" alt="weather icon" />
          <strong id="temperature">{props.degreesCelsius}</strong>
          <span className="units"> °C | °F</span>
        </div>
      </div>
      <div className="col-6 right d-flex p-2 align-items-center">
        <ul>
          <li>
            <span id="weather-description">{props.description}</span>
          </li>

          <li>
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind-speed">{props.windSpeed}</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
