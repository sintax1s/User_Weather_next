import Image from 'next/image';
import React, { Fragment } from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import axios from 'axios';
import { getWeather } from '@/actions/getWeather';

const UserCard = ({gender, profileImage, email, name, location, weather}) => {
/*   const [weather, setWeather] = useState({});
  console.log(location)

  useEffect(() => {
    getWeather(location.coordinates.latitude, location.coordinates.longitude)
      .then(data => setWeather(data))
  }, [location.coordinates.latitude, location.coordinates.longitude]) */
/*    console.log(weather) */

  const weatherValues = [
    { title: 'Name' , value: `${name.title} ${name.first} ${name.last}`},
    { title: 'Gender', value: gender},
    { title: 'Location', value: `${location.country}, ${location.state}, ${location.city}`},
    { title: 'Email', value: email}
  ]

  return (
    <div className='p-4 rounded-lg flex flex-col bg-slate-100 w-100 gap-8'>
      <div className='flex flex-col'>
      <Image src={profileImage} alt='Profile-image' width={80} height={80} className='rounded-full'/>
        {weatherValues.map(({title, value}) => (
          <Fragment key={value}>
            <p className='text-xs text-zinc-300'>{title}</p>
            <p>{value}</p>
          </Fragment>
        ))}
      </div>
      <div className='flex gap-4'>
        <>
          <WeatherIcon 
            isDay={weather.current_weather?.is_day} 
            weatherCode={weather.current_weather?.weathercode}
          />
          <WeatherTemperature 
            currentTemperature={weather.current_weather?.temperature} 
            minTemperature={weather.daily?.temperature_2m_min[0]} 
            maxTemperature={weather.daily?.temperature_2m_max[0]}
          />
        </>
      </div>
    </div>
  )
}

export default UserCard;