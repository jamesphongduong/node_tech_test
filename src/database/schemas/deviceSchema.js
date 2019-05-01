import { Schema } from 'mongoose';

const deviceSchema = new Schema({
  name: String,
  location: String,
  // scenes: [Number]
  scenes: Number
});

export default deviceSchema;
