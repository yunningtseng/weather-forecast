import { useRef, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import Chart from './components/Chart';
// import WeatherItem from './components/WeatherItem';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { RootState } from './store/store';
import { fetchData, setErrorMessage } from './store/weatherSlice';

const weatherSelector = createStructuredSelector({
  city: (state: RootState) => state.weather.city,
  weatherList: (state: RootState) => state.weather.weatherList,
  errorMessage: (state: RootState) => state.weather.errorMessage,
});

function App() {
  const dispatch = useAppDispatch();
  const { weatherList, city, errorMessage } = useAppSelector(weatherSelector);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(fetchData('Taipei'));
  }, [dispatch]);

  return (
    <div className="w-full bg-primary px-5 pt-16">
      <div className="max-w-2xl mx-auto pt-10 bg-white rounded-xl p-3 sm:p-10">
        <div className="text-center">
          <input
            className="w-48 sm:w-80 h-8 px-3 border-2 border-black rounded-xl focus:outline-none"
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
                dispatch(fetchData(inputCity));
                // inputRef.current.value = '';
              }
            }}
          >
            Submit
          </button>

          {errorMessage && (
            <p className="mt-2 ml-2 text-rose-600 text-lg text-bold">
              {errorMessage}
            </p>
          )}
        </div>

        <p className="text-center mt-5 text-secondary text-3xl font-bold">
          {city && city}
        </p>

        {/* <WeatherItem weatherList={weatherList} /> */}

        <Chart weatherList={weatherList} />
      </div>
    </div>
  );
}

export default App;
