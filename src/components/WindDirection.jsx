import React from 'react';

const WindDirection = ({ winddirection }) => {
  function getWeatherDirection(winddirection) {
    switch (true) {
      case winddirection > 340 || winddirection <= 20:
        return 'North';
      case winddirection > 20 && winddirection <= 70:
        return 'Northeast';
      case winddirection > 70 && winddirection <= 110:
        return 'East';
      case winddirection > 110 && winddirection <= 160:
        return 'Southeast';
      case winddirection > 160 && winddirection <= 200:
        return 'South';
      case winddirection > 200 && winddirection <= 250:
        return 'Southwest';
      case winddirection > 250 && winddirection <= 290:
        return 'West';
      case winddirection > 290 && winddirection <= 340:
        return 'Northwest';
      default:
        return 'Unknown';
    }
  }

  const weatherDirection = getWeatherDirection(winddirection);

  return <div>Wind Direction: {weatherDirection}</div>;
};

export default WindDirection;
