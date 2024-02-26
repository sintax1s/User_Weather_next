'use server';

export const getWeather = async (latitude, longitude) => {
  const apiUrl = `https://api.open-meteo.com/v1/forecast` + 
  `?latitude=${latitude}&longitude=${longitude}&current_weather=true` +
  `&hourly=relative_humidity_2m,precipitation_probability,visibility` +
  `&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset`
  try {
    const response = await fetch(apiUrl)

    const weather = await response.json();

    return weather;
  } catch (error) {
    console.error('Error getting weather:', error);

    return null;
  }
}