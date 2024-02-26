import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <CircularProgress />
    </div>
  )
}

export default Loader