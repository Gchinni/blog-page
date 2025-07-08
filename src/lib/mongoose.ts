// src/lib/mongoose.ts
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI!;
if (!uri) throw new Error("Falta MONGODB_URI");

declare global {
  var _mongoose: typeof mongoose | undefined;
}

export async function connectMongo() {
  if (global._mongoose) return global._mongoose; // cache

  mongoose.set({ strictQuery: true });

  await mongoose.connect(uri, {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  });

  global._mongoose = mongoose;
  return mongoose;
}
