import express, { Express, Request, Response } from 'express';
const app: Express = express();

app.get('/api/list', (req: Request, res: Response) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Content-Type', 'application/json;charset=utf-8')
  res.json({
    code: 0,
    list: [
      { name: 'web全栈', id: 1 },
      { name: 'JAVA全栈', id: 2 },
      { name: 'PYTHON全栈', id: 3 },
    ]
  })
});

app.listen('3030', () => {
  console.log('api启动完毕');
})