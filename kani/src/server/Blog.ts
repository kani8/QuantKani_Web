import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  uid: { type: String },
  author: { type: String },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: [String], default: [] },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", BlogSchema);
