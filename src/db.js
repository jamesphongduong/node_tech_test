import mongoose from "mongoose";

let isConnected = false;
let db;

const connect = async () => {
  if (isConnected) {
    return db;
  }

  db = await mongoose.connect(
    "mongodb://localhost:27017/simble?authSource=admin",
    {
      user: "root",
      pass: "simble",
      useNewUrlParser: true
    }
  );

  isConnected = db.connections[0].readyState;
  return db;
};

const device_schema = new mongoose.Schema({
  name: String,
  location: String,
  scenes: [Number]
});

mongoose.model("Device", device_schema);

const SceneSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: String
});

mongoose.model("Scene", SceneSchema);

export default {
  connectToDb: connect,
  Device: mongoose.model("Device"),
  Scene: mongoose.model("Scene")
};
