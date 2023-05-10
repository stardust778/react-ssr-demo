import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from '@/App';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<App />);
  res.send(`
    <html>
      <head>
        <meta charset='utf-8' />
        <title>react ssr demo</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `)
})

app.listen('3000', () => {
  console.log('监听完毕');
})