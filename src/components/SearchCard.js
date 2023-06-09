import React, { useState, useEffect }from 'react';
import TodaysForecast from './TodaysForecast';
import WeatherData from './WeatherData';
import { v4 as uuid } from 'uuid';
require('../style.css');

function SearchCard() {
  
    const [searchTerm, setSearchTerm] = useState("");
    const [searchHistory, setSearchHistory] = useState(() => {
      //if searchHistory already exists in localstorage, we set the initial state of searchHistory to be the array in localstorage
      //otherwise, the initial state should be an empty array
      return JSON.parse(localStorage.getItem('searchHistory')) || []
    });

    //when searchHistory is changed, we set/update searchHistory in localStorage
        useEffect(() => {
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }, [searchHistory]);
   
    const [weatherData, setWeatherData] = useState({});
    //getCoordinates takes the user's search term and makes an API call to retrieve the longitude and latitude for that location
    //then, it calls the getForecast() function, passing in the lat and longitude - this function will retrieve the appropriate weather data
    //the handleSearchHistory() function is also called here, adding the current searchTerm to the searchHistory 
    async function getCoordinates() {
        //TODO: generate a new API ID and hide in dotenv file
        var getCoordinatesURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&limit=5&appid=e7ab2c780e57f015e576cf3eb59ae5a7';
        try{
      const response = await fetch(getCoordinatesURL);
      const data = await response.json();
                let latitude = data[0].lat;
                let longitude = data[0].lon;
                console.log(latitude);
                console.log(longitude);
                getForecast(latitude, longitude);
                handleSearchHistory(searchTerm);

        }catch(error) {
          console.log('Error fetching coordinates', error);
        }
       
    }
    //getForecast() takes in lat and longitude and pulls forecast data from the openweathermap api
    async function getForecast(latitude, longitude) {
      var getForecastURL =
        'https://api.openweathermap.org/data/2.5/forecast?lat=' +
        latitude +
        '&lon=' +
        longitude +
        '&appid=e7ab2c780e57f015e576cf3eb59ae5a7&units=imperial';
    
      try {
        const response = await fetch(getForecastURL);
        const data = await response.json();
        console.log(data.list);
        console.log(data);
        //setWeatherData({});
        setWeatherData(data);
        console.log(weatherData)
      } catch (error) {
        console.log('Error fetching forecast data:', error);
      }
    }
    //handleSearchHistory() adds the latest searchTerm into the searchHistory if it is not already part of the list
    function handleSearchHistory(lastSearch){
        if(!searchHistory.includes(lastSearch)){
        setSearchHistory([...searchHistory, lastSearch]);
        } else return;
        
    }
    //handleHistoryButtons() runs the getCoordinates() function on the searchTerm from the history button which was clicked
    function handleHistoryButtons(btnClicked){
        setSearchTerm(btnClicked);
        getCoordinates();
    }
  return (
    <div className="container">
    <div className="row">
      <div className="col-3 col-lg-3">
        <div className="card">
          <div className="card-body" id = "search-box">
            <h3>Search for a city to see the 5 day forecast: </h3>
            <br/>
            <br/>
            <div className="input-group mb-3">
              <input id = "searchInput" type="text" className="form-control" placeholder="Search" aria-label="Search term"
                aria-describedby="basic-addon2"
                onChange={(e) => setSearchTerm(e.target.value)}/>
              <button type="submit" className="btn btn-primary" id="search-btn" onClick={() => getCoordinates()}>Submit</button>
              </div>
          {/* Render Search History buttons if search history exists */}
          <div id ="search-history-box">
                {searchHistory && searchHistory.length > 0 && 
                searchHistory.map((pastSearch) => (
                    <button className="history-btns" key={uuid()} onClick={ ()=> handleHistoryButtons(pastSearch)}>{pastSearch}</button>
                ))
                }
            </div>
          </div>
        </div>
      </div>
      {weatherData.list? (
        <TodaysForecast data={weatherData}/>
      ) :(
        <h5> </h5>
      )}
      </div>
      {weatherData.list? (
        <WeatherData data={weatherData}/>
      ):
      (
        <h6> </h6>
      )}
      
      </div>

  );
}

export default SearchCard;
