import React from 'react';
import Home from '@/pages/Home';
import About from '@/pages/About';

// interface IRoute {
//   path: string;
//   element: React.FunctionComponent;
//   loadData?: (store: any) => any;
//   key?: string;
//   exact?: boolean;
// }

// interface IRoutes extends IRoute {
//   routes?: IRoute[]
// }

// const routes: IRoutes[] = [
//   {
//     path: '/',
//     element: App,
//     routes: [
//       {
//         path: '/',
//         element: Home,
//         exact: true,
//         key: '/'
//       },
//       {
//         path: '/about',
//         element: About,
//         exact: true,
//         key: '/about'
//       }
//     ]
//   }
// ]

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