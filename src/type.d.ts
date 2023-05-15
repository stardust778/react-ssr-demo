declare module '*css' {
  const content: { [className: string]: string };
  export default content;
}

interface IRoute {
  path: string;
  loadData?: (store: any) => any;
  element: JSX.Element;
  key?: string;
}

interface IRoutes extends IRoute {
  routes?: IRoute[];
}

interface IList {
  name: string;
  id: number;
}

interface ISSRFunction {
  getInitProps?: (dispatch: any) => void;
}