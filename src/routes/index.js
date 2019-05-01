import Router from 'koa-router';
import deviceController from './../controllers/deviceController';
import sceneController from './../controllers/sceneController';

const router = new Router({ prefix: '/api' });

router.post('/devices', deviceController.create);

router.post('/scenes', sceneController.create);

router.get('/scenes/devices/:id/:date', sceneController.index);

export default router;
