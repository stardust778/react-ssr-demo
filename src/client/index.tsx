import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store';
import { Provider } from 'react-redux';
import routes from '@/router';
import PageViews from '@/utils/renderRoutes';

ReactDOM.hydrate(
  <Provider store={store.clientStore}>
    <BrowserRouter>
        {PageViews(routes)}
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);