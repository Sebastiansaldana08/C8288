import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/miBaseDeDatos';

if (!MONGODB_URI && process.env.NODE_ENV !== 'test') {
  throw new Error("Por favor define la variable MONGODB_URI en el archivo .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (process.env.NODE_ENV === 'test') {
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    cached.promise = mongoose.connect(uri, { dbName: "Weather" }).then((mongoose) => {
      return mongoose;
    });
    cached.conn = await cached.promise;
    return mongoServer; 
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
