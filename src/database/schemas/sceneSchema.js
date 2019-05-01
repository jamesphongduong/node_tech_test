import { Schema } from 'mongoose';

const SceneSchema = new Schema({
  name: String,
  description: String,
  date: String
});

export default SceneSchema;
