import { Schema } from 'mongoose';

const deviceSchema = new Schema({
  name: String,
  location: String,
  scenes: Array
});

export default deviceSchema;
