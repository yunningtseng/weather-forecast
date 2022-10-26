import { createStructuredSelector } from 'reselect';
import { useAppSelector } from '../hooks/hooks';
import { RootState } from '../store/store';
import { WeatherDetail } from '../types/weather';
import BarChart from './BarChart';
import PieChart from './PieChart';

interface Props {
  weatherList: WeatherDetail[];
}

const weatherSelector = createStructuredSelector({
  unit: (state: RootState) => state.weather.unit,
});

function Chart({ weatherList }: Props) {
  const { unit } = useAppSelector(weatherSelector);

  return (
    <div>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <BarChart
          title={`Max Temperature( ${unit === 'metric' ? '°C' : '°F'})`}
          list={weatherList.map((i) => i.maxTemp)}
          date={weatherList.map((i) => i.dateTime)}
        />
        <BarChart
          title={`Max Temperature( ${unit === 'metric' ? '°C' : '°F'})`}
          list={weatherList.map((i) => i.minTemp)}
          date={weatherList.map((i) => i.dateTime)}
        />
      </div>

      <div className="mt-10">
        <p className="text-center text-xl font-bold text-primary">
          Humidity(%)
        </p>
        <div className="flex md:justify-center mt-4 overflow-auto">
          {weatherList.map((i) => (
            <PieChart
              key={i.dateTime}
              percentage={i.humidity}
              date={i.dateTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chart;
