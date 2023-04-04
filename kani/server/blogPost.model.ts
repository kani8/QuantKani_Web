import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  // Add any other properties you need
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
