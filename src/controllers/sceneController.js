import sceneModel from './../database/models/sceneModel';
import deviceModel from './../database/models/deviceModel';

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

const index = ctx => {
  // console.log(ctx.params);
  const { id: _id, date } = ctx.params;
  const x = null;

  sceneModel
    .findOne({
      _id,
      date
    })
    .then(res => {
      const scene = res;
      const sceneName = res.name;
      // console.log('scene', scene);
      // console.log('sceneName', sceneName);

      // $in operator: match any value in array
      deviceModel.find({ scenes: { $in: [sceneName] } }).then(res => {
        const devices = res;
        // console.log(devices);

        // DEVICE IDS
        const deviceIds = res.map(e => e._id);
        // console.log(deviceIds);

        // COUNT
        const count = devices.length; //length of array
        // console.log('count', count);

        // RELATED SCENES
        const relatedScenes = res.map(e => e.scenes);
        const merged = [].concat.apply([], relatedScenes);
        // console.log('merged', merged);

        merged.forEach((e, i) => {
          if (e === sceneName) {
            merged.splice(i, 1);
          }
        });
        // console.log('merged1', merged);

        const final = merged.filter((v, i, a) => a.indexOf(v) === i);
        // console.log('final', final);

        // const indexes = merged.indexOf(sceneName);
        // console.log('index', indexes);
        const object = {
          name: sceneName,
          date,
          count,
          devices: deviceIds,
          relatedScenes: final
        };
        console.log(object);
      });
    });
};

export default { create, index };
