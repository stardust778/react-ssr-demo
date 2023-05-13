import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import indexSlice from './indexSlice';

const clientStore = configureStore({
  reducer: {
    index: indexSlice
  }
});

const serverStore = configureStore({
  reducer: {
    index: indexSlice
  }
})

export type RootState = ReturnType<typeof clientStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof clientStore.dispatch;
export const useAppDisaptch = () => useDispatch<AppDispatch>();

export default { clientStore, serverStore };