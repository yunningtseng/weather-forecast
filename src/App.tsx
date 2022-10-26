import { useRef, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import Chart from './components/Chart';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { RootState } from './store/store';
import { fetchData, setErrorMessage, setUnit } from './store/weatherSlice';

const weatherSelector = createStructuredSelector({
  city: (state: RootState) => state.weather.city,
  weatherList: (state: RootState) => state.weather.weatherList,
  errorMessage: (state: RootState) => state.weather.errorMessage,
  unit: (state: RootState) => state.weather.unit,
});

function App() {
  const dispatch = useAppDispatch();

  const {
    weatherList, city, errorMessage, unit,
  } = useAppSelector(weatherSelector);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(fetchData(city, unit));
  }, [dispatch, city, unit]);

  return (
    <div className="w-full bg-primary px-5 pt-16">
      <div className="max-w-2xl mx-auto pt-10 bg-white rounded-xl p-3 sm:p-10">
        <div className="block sm:flex text-center">
          <div className="flex w-full">
            <input
              className="w-full h-8 px-3 border-2 border-black rounded-xl focus:outline-none"
              ref={inputRef}
              placeholder="Search City"
            />

            <button
              type="button"
              className="ml-5 px-3 py-1 rounded-lg bg-primary text-white hover:bg-third"
              onClick={() => {
                const inputCity = inputRef?.current?.value;
                if (inputCity) {
                  dispatch(setErrorMessage(''));
                  dispatch(fetchData(inputCity, unit));
                }
              }}
            >
              Submit
            </button>
          </div>

          <div className="flex justify-end ml-0 mt-5 sm:ml-5 sm:mt-0">
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
        </div>

        {errorMessage && (
          <p className="mt-2 ml-2 text-rose-600 text-lg text-bold">
            {errorMessage}
          </p>
        )}

        <p className="text-center mt-5 text-secondary text-3xl font-bold">
          {city && city}
        </p>

        <Chart weatherList={weatherList} />
      </div>
    </div>
  );
}

export default App;
