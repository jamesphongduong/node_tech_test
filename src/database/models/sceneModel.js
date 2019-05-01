import mongoose from 'mongoose';
import sceneSchema from './../schemas/sceneSchema';

const sceneModel = mongoose.model('Scene', sceneSchema);

export default sceneModel;
