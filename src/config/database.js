import mongoose from 'mongoose';

let isConnected = false;
let db;

const connect = async () => {
  if (isConnected) {
    return db;
  }

  db = await mongoose.connect('mongodb://localhost:27017/simble');
  // /simble?authSource=admin', {
  //   user: 'root',
  //   pass: 'simble',
  //   useNewUrlParser: true
  // })
  // .catch(err => console.log(err));
  isConnected = db.connections[0].readyState;
  return db;
};

connect();
