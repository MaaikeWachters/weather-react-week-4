import React, { useState } from "react";
import axios from "axios";
import CurrentConditions from "./CurrentConditions";

export default function SearchForm(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);

    return <CurrentConditions />;
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "ca5af28648d86b7925348bb9fb85cd3a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appID=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="row">
          <span className="search-form-text">
            Which location would you like to see?
          </span>
          <form id="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input type="search" placeholder="Type a city" />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="current"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    search();

    return <p>Loading...</p>;
  }
}
