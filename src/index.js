import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import compose from 'koa-compose';
import deviceController from './controllers/deviceController';
import './config/database';

const app = new Koa();

const router = new Router({ prefix: '/api' });

router.post('/devices', deviceController.index);

app.use(compose([bodyParser(), router.allowedMethods(), router.routes()]));

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8082;

const listener = app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

export { listener as app };
