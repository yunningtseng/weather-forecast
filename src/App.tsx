import { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import Chart from './components/Chart';
import SearchBar from './components/SearchBar';
import ToggleUnit from './components/ToggleUnit';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { RootState } from './store/store';
import { fetchData } from './store/weatherSlice';

const weatherSelector = createStructuredSelector({
  city: (state: RootState) => state.weather.city,
  weatherList: (state: RootState) => state.weather.weatherList,
  errorMessage: (state: RootState) => state.weather.errorMessage,
});

function App() {
  const dispatch = useAppDispatch();

  const { weatherList, city, errorMessage } = useAppSelector(weatherSelector);

  useEffect(() => {
    dispatch(fetchData('Taipei', 'metric'));
  }, [dispatch]);

  return (
    <div className="w-full bg-primary px-5 pt-16">
      <div className="max-w-2xl mx-auto pt-10 bg-white rounded-xl p-3 sm:p-10">
        <div className="sm:flex text-center">
          <SearchBar />

          <div
            className={`flex mt-5 sm:mt-0 items-center ${
              errorMessage ? 'justify-between' : 'justify-end'
            }`}
          >
            {errorMessage && (
              <p className="sm:hidden ml-2 text-rose-600 text-lg text-bold">
                {errorMessage}
              </p>
            )}

            <ToggleUnit />
          </div>
        </div>

        {errorMessage && (
          <p className="hidden sm:block mt-2 ml-2 text-rose-600 text-lg text-bold">
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
