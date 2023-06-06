import React from 'react';
require('../style.css')

//trims the data from the API to only include today and next 5 days
//maps through each of the days in the 5-day forecast and displays relevant weather data onto the page
function Days({result}) {
  let data = [];
  console.log(result)
  if(result.list.length){
    let array = 6;
    for(let i=0; i < 6 && array < result.list.length; i++){
      data.push(result.list[array])
      array += 8;
    }
    console.log(data);
  }
  
  return (
   
  <div>
    {data && data.length > 0 && data.map((day, index) => (
  <div className="card dayBoxes">
    <div className="card-body" id={"day-" + index}>
    <h3 id ={"today-date-" + index}>{day.dt_txt.split(" ")[0]}</h3> 
    <img id ={"today-image-" + index} alt="weather-icon" src={"https://openweathermap.org/img/w/" + day.weather[0].icon + ".png"}/>
    <h5 id ={"today-temp-" + index}>Temperature: {day.main.temp} degrees</h5>
    <h5 id ={"today-humidity-" + index}>Humidity: {day.main.humidity} %</h5>
    <h5 id ={"today-wind-speed-" + index}>Wind Speed: {day.wind.speed} MPH</h5>
    </div>
  </div>
    ))}
    </div>
    
  );
}
//function to display container of 5-day forecast data
function WeatherData({data}) {
  
  return (
      <div className="row">
        <div className="col">

          <h3>5 Day Forecast:</h3>
  <Days result={data}/>
          </div>
          </div>

          
  );
}

export default WeatherData;
