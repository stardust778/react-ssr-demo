import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import indexSlice from '@/store/indexSlice';
import routes from '@/router';
import PageViews from '@/utils/renderRoutes';

const preloadedState = (window as any)._context.state || (global as any)._context.state;

export const clientStore = configureStore({
  reducer: {
    index: indexSlice
  },
  preloadedState
});

ReactDOM.hydrate(
  <Provider store={clientStore}>
    <BrowserRouter>
        {PageViews(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);