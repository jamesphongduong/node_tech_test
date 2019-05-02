import deviceModel from './../database/models/deviceModel';

// create new device
const create = async ctx => {
  const device = await deviceModel.create({
    name: ctx.request.body.name,
    location: ctx.request.body.location,
    scenes: ctx.request.body.scenes
  });

  // api response
  ctx.body = {
    id: device._id,
    name: device.name,
    location: device.location,
    scenes: device.scenes
  };
};

export default { create };
