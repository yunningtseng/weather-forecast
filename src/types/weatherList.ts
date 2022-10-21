import { WeatherDetail } from './weatherDetail';

export interface WeatherList {
  // dt: number;
  dt_txt: string;
  main: WeatherDetail;
}
