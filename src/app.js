import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import compose from 'koa-compose';
import router from './routes';

const app = new Koa();

app.use(compose([bodyParser(), router.allowedMethods(), router.routes()]));

export default app;
