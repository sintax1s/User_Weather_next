import React from 'react'
import WeatherTemperature from './WeatherTemperature';
import WeatherIcon from './WeatherIcon';

const WeatherBriefly = ({isDay, weatherCode, currentTemperature, minTemperature, maxTemperature}) => {
  return (
    <>
      <WeatherIcon 
        isDay={isDay} 
        weatherCode={weatherCode}
      />
      <WeatherTemperature 
        currentTemperature={currentTemperature} 
        minTemperature={minTemperature} 
        maxTemperature={maxTemperature}
      />
    </>
  )
}

export default WeatherBriefly;