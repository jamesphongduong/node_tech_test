import Router from 'koa-router';
import deviceController from './../controllers/deviceController';

const router = new Router({ prefix: '/api' });

router.post('/devices', deviceController.index);

export default router;
