"use server"

export async function getUsers(page) {
  const results = 9;
  const apiUrl = `https://randomuser.me/api/?results=${results}&page=${page}`;

  try {
    const response = await fetch(apiUrl);

    const resJson = await response.json();

    const users = await Promise.all(resJson.results.map(async (user) => {
      const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${user.location.coordinates.latitude}&longitude=${user.location.coordinates.longitude}&current_weather=true&daily=temperature_2m_max&daily=temperature_2m_min`);
      const weatherData = await weatherResponse.json();
      return { ...user, weather: weatherData };
    }));

    return users;
  } catch (error) {
    console.error('Error getting users:', error);

    return null;
  }
}