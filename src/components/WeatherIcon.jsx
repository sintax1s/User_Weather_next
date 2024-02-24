import Image from 'next/image';
import React from 'react'

const WeatherIcon = ({isDay, weatherCode}) => {

  function getWeatherIcon(isDay, weatherCode) {
    const timePrefix = isDay ? 'Day' : 'Night';
  
    switch (weatherCode) {
      case 0:
      case 1:
        return `/${timePrefix}ClearSky.png`;
      case 2:
        return `/${timePrefix}PartyCloudy.png`;
      case 3:
        return `/DayOvercast.png`;
      case 45:
      case 48:
        return `/Fog.png`;
      case 51:
      case 53:
      case 55:     
      case 56:
      case 57:
        return `/${timePrefix}Drizzle.png`;
      case 61:
      case 63:
      case 65:
      case 80:
      case 81:
      case 82:
        return `/Rain.png`;
      case 66:
      case 67:
        return `/FreezingRain.png`;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return `/Snowfall.png`;
      case 95:
        return `/${timePrefix}Thunderstorm.png`;
      case 96:
      case 99:
        return `/${timePrefix}ThunderstormHail.png`;
      default:
        return '';
    }
  }
  
  return (
    <div>
      <Image src={getWeatherIcon(isDay, weatherCode)} alt='WeatheIcon' width={50} height={50} />
    </div>
  )
}

export default WeatherIcon;