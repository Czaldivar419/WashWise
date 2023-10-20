const { MongoClient } = require("mongodb");

if (!process.env.MONGO_URL) {
  throw new Error('Invalid/Missing ENV: "MONGO_URL');
}

const uri = process.env.MONGO_URL;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect()
      .then(() => {
        console.log("MongoDB Connected!");
        return client; // Return the connected client
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        throw err;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best not to use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .then(() => {
      console.log("MongoDB Connected!");
      return client; // Return the connected client
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
      throw err;
    });
}

module.exports = clientPromise;