import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';
import App from '@/App';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(process.cwd(), 'client_build')));

app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.url}>
      <App title="hello world"/>
    </StaticRouter>
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