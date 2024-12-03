import fs from "fs";
import { getPosts, createPost, updatePost } from "../models/postModel.js";
import gerarDescricaoComGemini from "../services/geminiService.js";

export const listPosts = async (req, res) => {
  const posts = await getPosts();
  res.status(200).json(posts);
};

export const newPost = async (req, res) => {
  const newPost = req.body;
  try {
    const createdPost = await createPost(newPost);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const uploadImage = async (req, res) => {
  const newPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };
  try {
    const createdPost = await createPost(newPost);
    const updatedPost = `uploads/${createdPost.insertedId}.jpg`;
    fs.renameSync(req.file.path, updatedPost);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const updateNewPost = async (req, res) => {
  const id = req.params.id;
  const urlImg = `http://localhost:3000/${id}.jpg`;
  try {
    const imgBuffer = fs.readFileSync(`./uploads/${id}.jpg`);
    const descricao = await gerarDescricaoComGemini(imgBuffer);

    const post = {
      imgUrl: urlImg,
      descricao: descricao,
      alt: req.body.alt,
    };

    const createdPost = await updatePost(id, post);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};
