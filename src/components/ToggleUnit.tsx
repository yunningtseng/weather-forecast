import { createStructuredSelector } from 'reselect';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { RootState } from '../store/store';
import { fetchData, setUnit } from '../store/weatherSlice';

const weatherSelector = createStructuredSelector({
  city: (state: RootState) => state.weather.city,
  unit: (state: RootState) => state.weather.unit,
});

function ToggleUnit() {
  const dispatch = useAppDispatch();

  const { city, unit } = useAppSelector(weatherSelector);

  return (
    <div className="flex ml-0 sm:ml-5">
      <button
        type="button"
        className={`w-16 px-3 py-1 rounded-l-lg ${
          unit === 'metric'
            ? 'bg-third text-white'
            : 'bg-light text-neutral-800'
        }`}
        onClick={() => {
          dispatch(setUnit('metric'));
          dispatch(fetchData(city, 'metric'));
        }}
      >
        °C
      </button>

      <button
        type="button"
        className={`w-16 px-3 py-1 rounded-r-lg ${
          unit === 'imperial'
            ? 'bg-third  text-white'
            : 'bg-light text-neutral-800'
        }`}
        onClick={() => {
          dispatch(setUnit('imperial'));
          dispatch(fetchData(city, 'imperial'));
        }}
      >
        °F
      </button>
    </div>
  );
}

export default ToggleUnit;
