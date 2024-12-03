import { connectToDB } from "../db.js";

const connection = await connectToDB();

export const getPosts = async () => {
  const db = connection.db("AluraGoogleDb");
  const collection = db.collection("posts");
  const posts = await collection.find().toArray();
  return posts;
};

export const createPost = async (post) => {
  const db = connection.db("AluraGoogleDb");  
  const collection = db.collection("posts");
  const result = await collection.insertOne(post);
  return result;
};