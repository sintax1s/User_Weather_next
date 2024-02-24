import React from 'react'

const WeatherTemperature = ({currentTemperature, minTemperature, maxTemperature}) => {
  return (
    <div className='flex flex-col'>
      <h2 className='text-4xl'>{currentTemperature + '°C'}</h2>
      <p className='text-xs text-zinc-300'>Min</p>
      <p>{minTemperature + '°C'}</p>
      <p className='text-xs text-zinc-300'>Max</p>
      <p>{maxTemperature + '°C'}</p>
    </div>
  )
}

export default WeatherTemperature;