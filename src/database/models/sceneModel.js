import mongoose from 'mongoose';
import sceneSchema from './../schemas/sceneModel';

const sceneModel = mongoose.model('Scene', sceneSchema);

export default sceneModel;
