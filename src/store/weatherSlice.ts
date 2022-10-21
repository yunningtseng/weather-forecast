import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../api/api';
import { Weather } from '../types/weather';
import type { AppThunk } from './store';

export interface WeatherState {
  city: string;
  weather: Weather;
}

const initialState: WeatherState = {
  city: '',
  weather: {} as Weather,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state: WeatherState, action: PayloadAction<Weather>) => {
      state.weather = action.payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export const fetchData = (city: string): AppThunk => async (dispatch) => {
  const data = await api.weather(city);
  dispatch(setWeather(data));
};

export default weatherSlice;
