import { WeatherList } from '../types/weatherList';

interface Props {
  weather: WeatherList[];
}

const timeList = [0, 8, 16, 24, 32];

function WeatherItem({ weather }: Props) {
  return (
    <div>
      <p>日期</p>
      <div className="flex">
        {timeList.map((item) => (
          <p key={item} className="mr-5">
            {weather[item].dt_txt}
          </p>
        ))}
      </div>

      <p>溫度</p>
      <div className="flex">
        {timeList.map((item) => (
          <p key={item} className="mr-5">
            {weather[item].main.temp}
          </p>
        ))}
      </div>

      <p>最高溫 (°C) / 最低溫 (°C)</p>
      <div className="flex">
        {timeList.map((item) => (
          <p key={item} className="mr-5">
            {weather[item].main.temp_max}
            <span> / </span>
            {weather[item].main.temp_min}
          </p>
        ))}
      </div>

      <p>濕度</p>
      <div className="flex">
        {timeList.map((item) => (
          <p key={item} className="mr-5">
            {weather[item].main.humidity}
            <span> %</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default WeatherItem;
