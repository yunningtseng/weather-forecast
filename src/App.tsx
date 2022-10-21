import { Console } from 'console';
import { useRef, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import WeatherItem from './components/WeatherItem';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { RootState } from './store/store';
import { fetchData } from './store/weatherSlice';

const weatherSelector = createStructuredSelector({
  weather: (state: RootState) => state.weather.weather.list,
  city: (state: RootState) => state.weather.weather.city,
});

function App() {
  const dispatch = useAppDispatch();
  const { weather, city } = useAppSelector(weatherSelector);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(fetchData('Taipei'));
  }, [dispatch]);

  return (
    <div className="max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mt-5">
      <input className="border rounded-lg focus:outline-none" ref={inputRef} />

      <button
        type="button"
        onClick={() => {
          const inputCity = inputRef?.current?.value;
          if (inputCity) {
            dispatch(fetchData(inputCity));
          }
        }}
      >
        送出
      </button>

      {!weather && <p>查無資料，請重新輸入關鍵字</p>}

      <p>{city && city.name}</p>

      {weather && <WeatherItem weather={weather} />}
    </div>
  );
}

export default App;
