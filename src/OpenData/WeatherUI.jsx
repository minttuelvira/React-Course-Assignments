import React, { useState, useEffect } from 'react';
import './Weather.css';
import weatherlogo from './Weather-Logo.png';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);


  const apiKey = '';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((res) => res.json())
      .then((data) => setWeather(data))
  }, [city]);

  return (
    <div class="weather-container">
      <h1>Weather App</h1>
      <img src={weatherlogo} alt="WeatherLogo" className="weatherlogo" />
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city"/>
      {weather && weather.main && (
        <div class="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity} %</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
