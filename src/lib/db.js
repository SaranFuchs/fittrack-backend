import mongoose from "mongoose";

const globalCache = globalThis;
const cache = globalCache.__fittrackMongoose || { connection: null, promise: null, indexMigrationPromise: null };
globalCache.__fittrackMongoose = cache;

async function removeLegacyWorkoutDayUniqueIndex() {
  if (!cache.indexMigrationPromise) {
    cache.indexMigrationPromise = (async () => {
      let indexes;
      try {
        indexes = await mongoose.connection.collection("workoutsessions").indexes();
      } catch (error) {
        if (error?.code === 26) return;
        throw error;
      }

      const legacyIndex = indexes.find((index) => {
        const fields = Object.keys(index.key || {});
        return index.unique
          && fields.join(",") === "clientId,planRevision,cycleNumber,workoutDayNumber";
      });
      if (legacyIndex) {
        await mongoose.connection.collection("workoutsessions").dropIndex(legacyIndex.name);
        console.log("Removed legacy one-workout-day-per-cycle database restriction.");
      }
    })().catch((error) => {
      cache.indexMigrationPromise = null;
      throw error;
    });
  }
  await cache.indexMigrationPromise;
}

export async function connectDatabase() {
  if (cache.connection) {
    await removeLegacyWorkoutDayUniqueIndex();
    return cache.connection;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not configured.");

  if (!cache.promise) {
    cache.promise = mongoose.connect(uri, { bufferCommands: false }).then((instance) => instance);
  }

  try {
    cache.connection = await cache.promise;
    await removeLegacyWorkoutDayUniqueIndex();
  } catch (error) {
    cache.promise = null;
    throw error;
  }

  return cache.connection;
}
