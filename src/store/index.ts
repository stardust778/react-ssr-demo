import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
// import { clientStore } from '@/client';
import indexSlice from './indexSlice';

const serverStore = configureStore({
  reducer: {
    index: indexSlice
  }
})

// declare var window: any;
// const isBrowser = typeof window !== 'undefined';
// const globalObject = isBrowser ? window : {};

// const preloadedState = 
//   globalObject._context.state 
//     ? globalObject._context.state 
//     : (global as any)._context.state;

const clientStore = configureStore({
  reducer: {
    index: indexSlice
  },
  // preloadedState
});

export type RootState = ReturnType<typeof serverStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof serverStore.dispatch;
export const useAppDisaptch = () => useDispatch<AppDispatch>();

export { serverStore };