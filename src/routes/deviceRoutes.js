import Router from 'koa-router';
import deviceController from '../controllers/deviceController';

const router = new Router({ prefix: '/api/devices' });

router.post('/', deviceController.create);

export default router;
