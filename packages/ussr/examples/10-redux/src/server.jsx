import path from 'path';
import React from 'react';
import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { App } from './App';
import { serverRender } from '../../../src';
import createStore from './store';
import rest from './utils/rest';

const app = new Koa();
const router = new Router();

app.use(serve(path.resolve(__dirname, '../public')));

router.get('/*', async (ctx) => {
  const store = createStore({
    initState: { },
    rest
  });
  const { html } = await serverRender(() => (
    <Provider store={store}>
      <App />
    </Provider>
  ));
  const reduxState = store && typeof store.getState === 'function' ? store.getState() : {};
  ctx.body = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      window.REDUX_DATA = ${serialize(reduxState, { isJSON: true })}
    </script>
</head>
<body>
    <div id="root">${html}</div>
    <script src="/index.js"></script>
</body>
</html>
`;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(4000, () => {
  console.log(`Server is listening ${4000} port`);
});
