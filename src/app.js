import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import compose from 'koa-compose';
import deviceRoutes from './routes/deviceRoutes';
import sceneRoutes from './routes/sceneRoutes';

const app = new Koa();

app.use(
  compose([bodyParser(), deviceRoutes.allowedMethods(), deviceRoutes.routes()])
);

app.use(
  compose([bodyParser(), sceneRoutes.allowedMethods(), sceneRoutes.routes()])
);

export default app;
