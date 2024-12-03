import "dotenv/config";
import { ObjectId } from "mongodb";
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
  return collection.insertOne(post);
};

export const updatePost = async (id, post) => {
  const db = connection.db("AluraGoogleDb");
  const collection = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return collection.updateOne({ _id: new ObjectId(objID) }, { $set: post });
};
