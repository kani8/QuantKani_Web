import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import BlogPost from "./blogPost.model";
import User from "./user.model";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/quantkani";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findById(jwtPayload.id);
        if (!user) return done(null, false);
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

app.use(passport.initialize());

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  try {
    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/blog-posts", async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post(
  "/api/blog-posts",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const newBlogPost = new BlogPost(req.body);
      await newBlogPost.save();
      res.status(201).json(newBlogPost);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

app.put(
  "/api/blog-posts/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const updatedBlogPost = await BlogPost.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedBlogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(updatedBlogPost);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

app.delete(
  "/api/blog-posts/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const deletedBlogPost = await BlogPost.findByIdAndDelete(req.params.id);
      if (!deletedBlogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json({ message: "Blog post deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
