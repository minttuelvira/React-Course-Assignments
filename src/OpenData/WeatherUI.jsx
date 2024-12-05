import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Weather App</h1>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city"/>
      {weather && weather.main && (
        <div>
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
