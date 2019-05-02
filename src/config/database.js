import mongoose from 'mongoose';

let isConnected = false;
let db;

const connect = async () => {
  if (isConnected) {
    return db;
  }

  db = await mongoose.connect(
    'mongodb://localhost:27017/test1?authSource=admin',
    {
      user: 'root',
      pass: 'simble',
      useNewUrlParser: true
    }
  );

  isConnected = db.connections[0].readyState;
  return db;
};

connect();
