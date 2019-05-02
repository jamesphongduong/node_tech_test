import Router from 'koa-router';
import sceneController from './../controllers/sceneController';

const router = new Router({ prefix: '/api/scenes' });

router.post('/', sceneController.create);

router.get('/devices/:id/:date', sceneController.index);

export default router;
