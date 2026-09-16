import mongoose from "mongoose";

const globalCache = globalThis;
const cache = globalCache.__fittrackMongoose || { connection: null, promise: null };
globalCache.__fittrackMongoose = cache;

export async function connectDatabase() {
  if (cache.connection) return cache.connection;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not configured.");

  if (!cache.promise) {
    cache.promise = mongoose.connect(uri, { bufferCommands: false }).then((instance) => instance);
  }

  try {
    cache.connection = await cache.promise;
  } catch (error) {
    cache.promise = null;
    throw error;
  }

  return cache.connection;
}
