import React from 'react';
import styles from '../styles/WeatherUpdate.module.css';

const WeatherUpdate: React.FC = () => {
  const weather = {
    temperature: '30°C',
    condition: 'Sunny',
    location: 'Chittagong, Bangladesh',
  };

  return (
    <div className={styles.weatherUpdate}>
      <h2>Weather Update</h2>
      <p>{weather.location}</p>
      <p>{weather.temperature}</p>
      <p>{weather.condition}</p>
    </div>
  );
};

export default WeatherUpdate;