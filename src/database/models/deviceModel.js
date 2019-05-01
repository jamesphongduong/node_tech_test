import mongoose from 'mongoose';
import deviceSchema from './../schemas/deviceSchema';

const deviceModel = mongoose.model('Device', deviceSchema);

export default deviceModel;
