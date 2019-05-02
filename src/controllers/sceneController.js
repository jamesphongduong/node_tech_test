import sceneModel from './../database/models/sceneModel';
import deviceModel from './../database/models/deviceModel';
import {
  flattenArray,
  removeArrayDuplicates,
  deleteElement
} from './../helperFunctions/arrayHelpers';
import { parseDate } from './../helperFunctions/dateParser';

// make new scene
const create = async ctx => {
  const scene = await sceneModel.create({
    name: ctx.request.body.name,
    description: ctx.request.body.description,
    date: ctx.request.body.date
  });

  // api response
  ctx.body = {
    id: scene._id,
    name: scene.name,
    description: scene.description,
    date: scene.date
  };
};

// retrieve scene data
const index = async ctx => {
  const { id: _id, date } = ctx.params;
  const parsedDate = parseDate(date);
  console.log('31', parsedDate);
  const scene = await sceneModel.findOne({
    _id,
    date: parsedDate
  });

  // scene name
  const name = scene.name;

  // $in operator: match any value in array
  const deviceList = await deviceModel.find({ scenes: { $in: [name] } });
  console.log('dL', deviceList);
  // device ids
  const devices = deviceList.map(e => e._id);

  // count
  const count = deviceList.length; //length of array

  // related scenes (dirty data)
  const allScenes = deviceList.map(e => e.scenes);
  const dirtyRelatedScenes = flattenArray(allScenes); // to flatten array of arrays
  deleteElement(dirtyRelatedScenes, name); // to remove selected scene from related scenes

  // related scenes (cleaned)
  const relatedScenes = removeArrayDuplicates(dirtyRelatedScenes); // remove duplicate scenes in array

  // api response
  ctx.body = {
    name,
    date: parsedDate,
    count,
    devices,
    relatedScenes
  };
};

export default { create, index };
