"use server"

export async function getUsers(page) {
  const results = 5;
  const apiUrl = `https://randomuser.me/api/?results=${results}&page=${page}&nat=gb,au,br,ca,de,dk,es,fi,fr,ie,in,nl,no,nz,rs,ua,us`;

  try {
    const response = await fetch(apiUrl);

    const resJson = await response.json();

    const users = await Promise.all(resJson.results.map(async (user) => {
      const city = user.location.city;
      const country = user.location.country;
      const state = user.location.state;

      try {
        const coordinatesResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${state}%20${city}%20${country}&apiKey=${process.env.API_KEY}`);
        const coordinatesData = await coordinatesResponse.json();

        return { ...user, coordinates: [coordinatesData.features[0].properties.lat, coordinatesData.features[0].properties.lon] };
      } catch (error) {
        const coordinatesResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${country}&apiKey=${process.env.API_KEY}`);
        const coordinatesData = await coordinatesResponse.json();

        return { ...user, coordinates: [coordinatesData.features[0].properties.lat, coordinatesData.features[0].properties.lon] };
      }
      
    }));

    return users;
  } catch (error) {
    console.error('Error getting users:', error);

    return null;
  }
}