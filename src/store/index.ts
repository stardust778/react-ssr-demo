import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { clientStore } from '@/client';
import indexSlice from './indexSlice';

const serverStore = configureStore({
  reducer: {
    index: indexSlice
  }
})


export type RootState = ReturnType<typeof clientStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof clientStore.dispatch;
export const useAppDisaptch = () => useDispatch<AppDispatch>();

export { serverStore };