import { Route, Routes } from 'react-router-dom';
function renderRoutes(routes: IRoutes[]) {
  if (routes && routes.length) {
    return routes.map((route) => {
      if (route.routes && route.routes.length) {
        return (
          <Route element={route.element} path={route.path} key={route.key}>
            { renderRoutes(route.routes) }
          </Route>
        )
      } else {
        return <Route path={route.path} element={route.element} key={route.key}/>
      }
    })
  }
}

const PageViews = (routes: IRoutes[]) => {
  return (
    <Routes>
      {renderRoutes(routes)}
    </Routes>
  )
}

export default PageViews;