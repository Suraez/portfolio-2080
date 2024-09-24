import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Add MongoDB URI in .env.local
let client;
let clientPromise;


console.log(uri);

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // Use a global variable in development to avoid creating multiple connections
  console.log("connecting to the DB...");
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, don't use a global variableN
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
