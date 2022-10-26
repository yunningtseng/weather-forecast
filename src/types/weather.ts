export interface WeatherData {
  type: 'data';
  city: string;
  weatherList: WeatherDetail[];
}

export interface WeatherError {
  type: 'error';
  error: string;
}

export interface APIError {
  code: string;
  message: string;
}

export interface WeatherDetail {
  dateTime: string;
  humidity: number;
  temp: number;
  maxTemp: number;
  minTemp: number;
}

export interface City {
  name: string;
}

export interface RawWeather {
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface RawWeatherDetail {
  dt_txt: string;
  main: RawWeather;
}

export interface RawWeatherData {
  city: City;
  list: RawWeatherDetail[];
}
