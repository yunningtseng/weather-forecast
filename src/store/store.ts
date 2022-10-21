import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
