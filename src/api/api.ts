import {
  RawWeatherData,
  WeatherData,
  WeatherError,
  APIError,
} from '../types/weather';

const api = {
  getWeather: async (
    city: string,
    units: string,
  ): Promise<WeatherData | WeatherError> => {
    const fetchData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8da1ea379d115cb3e1c4763d9b772921&units=${units}`,
    );

    if (fetchData.ok) {
      const data = (await fetchData.json()) as RawWeatherData;

      const weatherDetail = [0, 8, 16, 24, 32].map((i) => ({
        dateTime: data.list[i].dt_txt.substring(5, 11).replace('-', '/'),
        humidity: data.list[i].main.humidity,
        temp: data.list[i].main.temp,
        maxTemp: data.list[i].main.temp_max,
        minTemp: data.list[i].main.temp_min,
      }));

      return {
        type: 'data',
        city: data.city.name,
        weatherList: weatherDetail,
      };
    }

    const err = (await fetchData.json()) as APIError;
    return { type: 'error', error: err.message };
  },
};

export default api;
