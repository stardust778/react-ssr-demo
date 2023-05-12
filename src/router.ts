import React from 'react';
import Home from '@/pages/Home';
import About from '@/pages/About';

interface IRoute {
  path: string;
  element: React.FunctionComponent;
}

const routes: IRoute[] = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/about',
    element: About
  }
]

export default routes;