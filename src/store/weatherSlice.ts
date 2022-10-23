import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../api/api';
import { WeatherDetail } from '../types/weather';
import type { AppThunk } from './store';

export interface WeatherState {
  city: string;
  weatherList: WeatherDetail[];
  errorMessage: string;
}

const initialState: WeatherState = {
  city: '',
  weatherList: [],
  errorMessage: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (
      state: WeatherState,
      action: PayloadAction<WeatherDetail[]>,
    ) => {
      state.weatherList = action.payload;
    },

    setCity: (state: WeatherState, action: PayloadAction<string>) => {
      state.city = action.payload;
    },

    setErrorMessage: (state: WeatherState, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setWeather, setCity, setErrorMessage } = weatherSlice.actions;

export const fetchData = (city: string): AppThunk => async (dispatch) => {
  const data = await api.getWeather(city);
  if (data.type === 'data') {
    dispatch(setWeather(data.weatherList));
    dispatch(setCity(data.city));
  } else {
    dispatch(setErrorMessage(data.error));
  }
};

export default weatherSlice;
