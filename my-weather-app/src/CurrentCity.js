import React, { useState } from "react";
import axios from "axios";

export default function CurrentCity(props) {
  const [city, setCity] = useState(props.city);

 function getApiUrl(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "ca5af28648d86b7925348bb9fb85cd3a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayCityName);
     
  }
  navigator.geolocation.getCurrentPosition(getApiUrl);

  function displayCityName(response) {
    setCity(response.data.name);
  }
    
    return (
  
    <div className="header d-flex p-2 align-items-center">
      <div className="col-3 header-text">You are in:</div>
      <div className="col-9" id="city">{city}</div>

      </div>
  );
}
