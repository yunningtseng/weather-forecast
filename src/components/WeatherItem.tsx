import { WeatherDetail } from '../types/weather';

interface Props {
  weatherList: WeatherDetail[];
}

function WeatherItem({ weatherList }: Props) {
  return (
    <div className="mt-5">
      <div className="flex">
        {weatherList.map((item, index) => (
          <div
            key={index}
            className="text-center p-3 border border-neutral-800 bg-cyan-400 text-green-50"
          >
            <p>{item.dateTime}</p>

            <div className="mt-3">{`${item.temp} (°C)`}</div>
          </div>
        ))}
      </div>

      {/* <p>Max Temperature (°C) / Min Temperature (°C)</p>
      <div className="flex">
        {weatherList.map((item, index) => (
          <p key={index} className="mr-5">
            {item.maxTemp}
            <span> / </span>
            {item.minTemp}
          </p>
        ))}
      </div> */}
    </div>
  );
}

export default WeatherItem;
