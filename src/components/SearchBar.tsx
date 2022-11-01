import { useRef } from 'react';
import { createStructuredSelector } from 'reselect';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { RootState } from '../store/store';
import { fetchData, setErrorMessage } from '../store/weatherSlice';

const weatherSelector = createStructuredSelector({
  unit: (state: RootState) => state.weather.unit,
});

function SearchBar() {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const { unit } = useAppSelector(weatherSelector);

  return (
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
  );
}

export default SearchBar;
