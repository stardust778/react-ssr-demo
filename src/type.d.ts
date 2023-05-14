interface IRoute {
  path: string;
  getInitialData?: (store: any) => any;
  element: JSX.Element;
  key?: string;
}

interface IRoutes extends IRoute {
  routes?: IRoute[];
}