import express from "express";
import multer from "multer";
import cors from "cors";
import {
  listPosts,
  newPost,
  updateNewPost,
  uploadImage,
} from "../controllers/postsController.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads/", storage });

export const routes = async (app) => {
  app.use(express.json());
  app.use(cors(corsOptions));
  app.get("/posts", listPosts);
  app.post("/posts", newPost);
  app.post("/upload", upload.single("image"), uploadImage);
  app.put("/upload/:id", updateNewPost)
};
