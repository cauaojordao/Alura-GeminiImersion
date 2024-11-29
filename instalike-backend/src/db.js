import { MongoClient } from "mongodb";

export const connectToDB = async () => {
  let mongoClient;

  try {
    mongoClient = new MongoClient(process.env.MONGO);
    await mongoClient.connect();
    console.log("Connected to MongoDB");
    return mongoClient;
  } catch (error) {
    console.log(error);
    process.exit();
  }
}
