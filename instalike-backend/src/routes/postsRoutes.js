import express from "express";
import { listPosts } from "../controllers/postsController.js";

export const routes = async (app) => {
  app.use(express.json());
  app.get("/posts", listPosts);
  app.post("/posts", newPost);
};
