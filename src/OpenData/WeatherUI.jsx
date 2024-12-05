import React, { useState } from 'react';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Oulu');

  return (
    <div>
      <h1>Weather App</h1>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
    </div>
  );
};

export default WeatherApp;
