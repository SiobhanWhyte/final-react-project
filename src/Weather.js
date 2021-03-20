import React, { useState } from "react";
import WeatherDescription from "./WeatherDescription";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: response.data.dt,
      description: response.data.weather[0].main,
      high: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      low: response.data.main.temp_min,
      icon: response.data.weather[0].icon,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "01b17aae800ab2a9d70b7fce5aecbe7c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleLocation(position) {
    const apiKey = "01b17aae800ab2a9d70b7fce5aecbe7c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
}

  function updateCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleLocation);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-md-center ">
            <div className="col-md-auto">
              <input
                type="search"
                placeholder="Search Location... "
                className="form-control shadow"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-md-auto">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-info shadow text-warning"
              />
              </div>
              <div className="col-md-auto">
              <button type="submit" className="btn btn-outline-info shadow" onClick={updateCurrentLocation}>
                <svg
                  width="60"
                  height="20"
                  fill="rgb(167, 7, 167)"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                  />
                </svg>
              </button>
              </div>
          </div>
          
        </form>
        <WeatherDescription data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
      
    );

  } else {
    search();
    return "Searching...";
  }
}