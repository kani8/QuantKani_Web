import express from "express";
import mongoose from "mongoose";
import BlogPost from "./blogPost.model";

const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = "mongodb://localhost:27017/NEW_DATABASE_NAME"; // Replace NEW_DATABASE_NAME with your actual database name

mongoose.connect(MONGODB_URI);

app.get("/api/blog-posts", async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
