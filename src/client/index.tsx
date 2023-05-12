import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';

ReactDOM.hydrate(
  <BrowserRouter>
    <App title={'hello world'}/>
  </BrowserRouter>, 
  document.getElementById('root')
);