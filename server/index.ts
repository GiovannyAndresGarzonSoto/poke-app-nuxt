import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const { mongodbUri } = useRuntimeConfig();

  try {
    await mongoose.connect(mongodbUri)
      .catch(err => console.log(err));
    console.log("Database is connected");
  } catch (e) {
    console.error(e);
  }
};