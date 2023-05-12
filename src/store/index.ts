import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import indexSlice from './indexSlice';

const store = configureStore({
  reducer: {
    index: indexSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDisaptch = () => useDispatch<AppDispatch>();

export default store;