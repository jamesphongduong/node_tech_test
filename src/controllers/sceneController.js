import sceneModel from './../database/models/sceneModel';

const create = async ctx => {
  const scene = await sceneModel.create({
    name: ctx.request.body.name,
    description: ctx.request.body.description,
    date: ctx.request.body.date
  });

  ctx.body = {
    id: scene._id,
    name: scene.name,
    description: scene.description,
    date: scene.date
  };

  console.log(scene);
};

const index = async ctx => {
  console.log(ctx.params);
  // const scene =
};

export default { create, index };
