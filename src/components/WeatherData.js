import React from 'react';

function Day({result}) {
  let data;
  console.log(result)
  if(result.list.length){
    data = result.list.slice(0, 6);
    console.log(data);
  }
  

  return (
   
  <div>
     <h2>Hello</h2>
    {data && data.length > 0 && data.map((day, index) => (
  <div className="card dayBoxes">
    <div className="card-body " id={"day-" + index}>
      
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
function WeatherData({data}) {
  
  return (
      <div className="row">
        <div className="col">

          <h3>5 Day Forecast:</h3>
  <Day result={data}/>
          </div>
          </div>

          
  );
}

export default WeatherData;
