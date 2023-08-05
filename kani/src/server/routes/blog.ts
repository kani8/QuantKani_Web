import express from "express";
import Blog from "../Blog";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Blog.find();
    res.send(posts);
  } catch (err) {
    res.status(500).send("Error getting posts");
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newPost = new Blog({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
    });
    const savedPost = await newPost.save();
    res.send(savedPost);
  } catch (err) {
    if (err instanceof Error) {
      // Type guard
      console.error(err.message);
    } else {
      console.error(err);
    }
    res.status(500).send("Error saving post");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updatedPost);
  } catch (err) {
    res.status(500).send("Error updating post");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send("Error deleting post");
  }
});

export default router;
