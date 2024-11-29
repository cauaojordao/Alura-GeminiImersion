import { getPosts } from "../models/postModel.js";

export const listPosts = async (req, res) => {
  const posts = await getPosts();
  res.status(200).json(posts);
};
