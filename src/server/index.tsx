import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { matchRoutes } from 'react-router-dom';
import express, { Request, Response } from 'express';
import path from 'path';
import { serverStore } from '@/store';
import { Provider } from 'react-redux';
import routes from '@/router';
import PageViews from '@/utils/renderRoutes';

const app = express();
app.use(express.static(path.resolve(process.cwd(), 'client_build')));

app.get('*', (req: Request, res: Response) => {
  // 存储网络请求
  const promises: Promise<any>[] = [];
  const routeMap = new Map<string, Promise<any>>();
  routes.forEach(item => {
    if (item.path && item.loadData) {
      routeMap.set(item.path, item.loadData(serverStore));
    }
  });

  // 匹配当前路由的routes
  const matchedRoutes = matchRoutes(routes, req.path);

  matchedRoutes?.forEach(item => {
    if (routeMap.has(item.pathname)) {
      promises.push(routeMap.get(item.pathname));
    }
  })
  console.log(promises, 'promises123123123');
  // 执行所有网络请求
  Promise.all(promises).then((data) => {
    console.log(data, 'data')
    console.log('promises执行完毕')
    const content = renderToString(
      <Provider store={serverStore}>
        <StaticRouter location={req.url}>
          {PageViews(routes)}
        </StaticRouter>
      </Provider>
    );
    res.send(`
      <html>
        <head>
          <meta charset='utf-8' />
          <title>react ssr demo</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window._context = {
              state: ${JSON.stringify(serverStore.getState())}
            }
          </script>
          <script src="./bundle.js"></script>
        </body>
      </html>
    `)
  })
})

app.listen('3000', () => {
  console.log('监听完毕');
})