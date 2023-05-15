import App from '@/pages/App';
import Home from '@/pages/Home';
import About from '@/pages/About';

const routes: IRoutes[] = [
  {
    path: '/',
    element: <App />,
    key: '/App',
    loadData: App.getInitProps,
    routes: [
      {
        path: '/',
        element: <Home/>,
        key: '/home'
      },
      {
        path: '/about',
        element: <About />,
        key: '/about'
      }
    ]
  }
]

export default routes;