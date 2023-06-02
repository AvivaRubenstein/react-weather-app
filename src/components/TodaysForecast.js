import React from 'react';

function TodaysForecast(data) {
    let today = data.list[0];
    let cityName = data.city.name;
  
  return (
    <div className="col-9 col-lg-9">
    <div className="card">
      <div className="card-body" id = "todays-forecast">
        <h3>Today's Forecast</h3>
        <h2 id = "city-name">{cityName}</h2>
        <img alt="weather-icon" id = "today-image" src={"https://openweathermap.org/img/w/" + today.weather[0].icon + ".png"}/>
        <h3 id = "today-date">{today.dt_txt.split(" ")[0]}</h3>
        <h5 id = "today-temp">Temperature: {today.main.temp} degrees</h5>
        <h5 id = "today-humidity">Humidity: {today.main.humidity} %</h5>
        <h5 id = "today-wind-speed">Wind Speed: {today.wind.speed} MPH</h5>
      </div>
    </div>
  </div>

  );
}

export default TodaysForecast;