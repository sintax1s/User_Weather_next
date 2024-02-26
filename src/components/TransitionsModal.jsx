'use client'

import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import AirIcon from '@mui/icons-material/Air';
import WindDirection from './WindDirection';
import WeatherBriefly from './WeatherBriefly';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2.5,
};

const TransitionsModal = ({weather}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  function parseTime(datetimeString) {
    const time = datetimeString.split('T')[1].split(':');
    return time[0] + ':' + time[1];
}
  return (
    <div>
      <button 
        onClick={handleOpen} 
        className='flex gap-2 border-2 border-cyan-500 pointer pt-1 pb-1 pl-3 pr-3 rounded-2xl text-cyan-500 bg-white'
      >
        Weather Details <Image src='/weather.png' width={20} height={20} alt='Weather'/>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-4'>
                <div className='bg-slate-200 p-6 rounded-2xl flex flex-col gap-4'>
                  <WeatherBriefly 
                    isDay={weather.current_weather?.is_day} 
                    weatherCode={weather.current_weather?.weathercode}
                    currentTemperature={weather.current_weather?.temperature} 
                    minTemperature={weather.daily?.temperature_2m_min[0]} 
                    maxTemperature={weather.daily?.temperature_2m_max[0]}
                  />
                </div>
                <div className='bg-slate-200 p-6 rounded-2xl flex flex-col gap-4'>
                  <p className='font-bold flex gap-2'>
                      {parseTime(weather.daily?.sunrise[0])} 
                      <span className='font-normal'>
                        Sunrise
                      </span>
                      <Image src='/sunrise.png' alt='Sunset' width={20} height={20} className='object-contain'/>
                    </p>
                  <p className='font-bold flex gap-2'>
                      {parseTime(weather.daily?.sunset[0])} 
                      <span className='font-normal'>
                        Sunset
                      </span>
                      <Image src='/sunset.png' alt='Sunset' width={20} height={20}/>
                    </p>
                </div>
                <div className='bg-slate-200 p-6 rounded-2xl flex flex-col gap-4'>             
                  <p className='flex items-center'><AirIcon />{weather.current_weather.windspeed} Km/h</p>
                  <WindDirection winddirection={weather.current_weather.winddirection} />
                </div>
                <div className='bg-slate-200 p-6 rounded-2xl flex flex-col gap-4'>
                  <p>Humidity: <span className='font-bold'>{weather.hourly.relative_humidity_2m[0]}%</span></p>
                  <p>Precipitation Probability: <span className='font-bold'>{weather.hourly.precipitation_probability[0]}%</span></p>
                  <p>Visibility: <span className='font-bold'>{weather.hourly.visibility[0]} Meters</span></p>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default TransitionsModal;