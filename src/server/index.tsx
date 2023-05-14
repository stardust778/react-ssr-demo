import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';
import path from 'path';
import store from '@/store';
import App from '@/pages/App';
import { Provider } from 'react-redux';
import routes from '@/router';
import PageViews from '@/utils/renderRoutes';

const app = express();

app.use(express.static(path.resolve(process.cwd(), 'client_build')));

app.get('*', (req, res) => {
  const promises: Promise<any>[] = [];
  const content = renderToString(
    <Provider store={store.serverStore}>
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
        <script src="./bundle.js"></script>
      </body>
    </html>
  `)
})

app.listen('3000', () => {
  console.log('监听完毕');
})