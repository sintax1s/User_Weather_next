'use client';

import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import TransitionsModal from './TransitionsModal';
import WeatherBriefly from './WeatherBriefly';
import AddUserButton from './AddUserButton';
import { getWeather } from '@/actions/getWeather';

const UserCard = ({gender, profileImage, email, name, location, coordinates, id, setUsers}) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try { 
        const latitude = coordinates[0];
        const longitude = coordinates[1];
        
        const weatherData = await getWeather(latitude, longitude);
  
        setWeather(weatherData);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };
    fetchWeather();
  
    const intervalId = setInterval(fetchWeather, 5 * 60 * 1000);
  
    return () => clearInterval(intervalId);
  }, [coordinates]);
  

  const userValues = [
    { title: 'Name' , value: `${name.title} ${name.first} ${name.last}`},
    { title: 'Gender', value: gender},
    { title: 'Location', value: `${location.country}, ${location.state}, ${location.city}`},
    { title: 'Email', value: email}
  ]

  return (
    <div className='p-4 rounded-lg flex flex-col bg-slate-100 w-full h-max gap-8'>
      <div className='flex flex-col'>
      <Image src={profileImage} alt='Profile-image' width={80} height={80} className='rounded-full'/>
        {userValues.map(({title, value}) => (
          <Fragment key={value}>
            <p className='text-xs text-zinc-300'>{title}</p>
            <p>{value}</p>
          </Fragment>
        ))}
      </div>
      {weather && (
        <>
          <div className='flex gap-4'>
            <WeatherBriefly             
              isDay={weather.current_weather?.is_day} 
              weatherCode={weather.current_weather?.weathercode}
              currentTemperature={weather.current_weather?.temperature} 
              minTemperature={weather.daily?.temperature_2m_min[0]} 
              maxTemperature={weather.daily?.temperature_2m_max[0]}
            />
          </div>
          <div className='flex flex-col gap-4'>
            <TransitionsModal weather={weather}/>
            <AddUserButton user={{gender, profileImage, email, name, location, coordinates, weather, id}} setUsers={setUsers}/>
          </div>          
        </>
      )}
    </div>           
  )
}

export default UserCard;