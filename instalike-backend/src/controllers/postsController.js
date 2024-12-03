import { getPosts } from "../models/postModel.js";

export const listPosts = async (req, res) => {
  const posts = await getPosts();
  res.status(200).json(posts);
};

export const newPost = async (req, res) => {
  const newPost = req.body;
  try {
    const createdPost = await createPost(newPost);

    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};
