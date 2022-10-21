import { Weather } from '../types/weather';

const api = {
  weather: async (city: string): Promise<Weather> => {
    const fetchData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8da1ea379d115cb3e1c4763d9b772921&units=metric`,
    );
    const data = (await fetchData.json()) as Weather;
    return data;
  },
};

export default api;
