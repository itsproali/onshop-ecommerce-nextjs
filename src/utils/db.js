const mongoose = require("mongoose");
const connection = {};

async function connectDB() {
  // Check if we have connection to our database
  if (connection.isConnected) {
    console.log("Database Already Connected");
    return;
  }

  // If already connected to database, use that connection
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Using Existing connection of database");
      return;
    }
    await mongoose.disconnect();
  }

  // Use new database connection
  const db = await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database Connected Successfully");
  connection.isConnected = db.connections[0].readyState;
}

// Disconnect the Database
async function disconnectDB() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      console.log("Database Disconnected");
      connection.isConnected = false;
    } else {
      console.log("Couldn't Disconnect the database");
    }
  }
}

module.exports = { connectDB, disconnectDB };
