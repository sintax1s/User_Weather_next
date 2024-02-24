'use server';

export const getWeather = async (latitude, longitude) => {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max&daily=temperature_2m_min`;

  try {
    const response = await fetch(apiUrl)

    const weather = await response.json();
    console.log(weather)

    return weather;
  } catch (error) {
    console.error('Error getting weather:', error);

    return null;
  }
  
}