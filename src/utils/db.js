const mongoose = require("mongoose");
const connection = {};

const connectDB = async () => {
  if (connection.isConnected) {
    console.log("Already connected to Database");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Using existing connection");
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("New connection to the database");
  connection.isConnected = db.connections[0].readyState;
};

export default connectDB;
