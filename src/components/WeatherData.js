import React from 'react';

// TODO: Add a comment explaining what a react component is
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function Day(result) {
  let data = result.list.slice(0, 6);

  return (
  <div>
    {data && data.length > 0 && data.map((day) => (
  <div class="card dayBoxes">
    <div class="card-body " id = "day0">
      
    <h3 id = "today-date0">placeholder</h3> 
    <img id = "today-image0"/>
    <h5 id = "today-temp0">placeholder</h5>
    <h5 id = "today-humidity0">placeholder</h5>
    <h5 id = "today-wind-speed0">placeholder</h5>
    </div>
  </div>
    ))}
    </div>
    
  );
}
function WeatherData(weatherData) {
  
  return (
      <div class="row">
        <div class="col">

          <h3>5 Day Forecast:</h3>
{weatherData.length > 0  &&
  <Day data={weatherData}/>
}
          </div>
          </div>

          
  );
}

export default WeatherData;
