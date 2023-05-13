import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store';
import { Provider } from 'react-redux';
import App from '@/pages/App';

ReactDOM.hydrate(
  <Provider store={store.clientStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);