import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../api/api';
import { WeatherDetail } from '../types/weather';
import type { AppThunk } from './store';

export interface WeatherState {
  city: string;
  weatherList: WeatherDetail[];
  errorMessage: string;
  unit: 'metric' | 'imperial';
}

const initialState: WeatherState = {
  city: '',
  weatherList: [],
  errorMessage: '',
  unit: 'metric',
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

    setUnit: (
      state: WeatherState,
      action: PayloadAction<'metric' | 'imperial'>,
    ) => {
      state.unit = action.payload;
    },

    setErrorMessage: (state: WeatherState, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setWeather, setCity, setUnit, setErrorMessage,
} = weatherSlice.actions;

export const fetchData = (city: string, units: string): AppThunk => async (dispatch) => {
  const data = await api.getWeather(city, units);
  if (data.type === 'data') {
    dispatch(setWeather(data.weatherList));
    dispatch(setCity(data.city));
  } else {
    dispatch(setErrorMessage(data.error));
  }
};

export default weatherSlice;
