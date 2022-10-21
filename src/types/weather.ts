import { City } from './city';
import { WeatherList } from './weatherList';

export interface Weather {
  list: WeatherList[];
  city: City;
}
