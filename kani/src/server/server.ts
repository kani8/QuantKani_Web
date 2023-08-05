import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/user";
import blogRoutes from "./routes/blog";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", userRoutes);
app.use("/api/blogs", blogRoutes);

mongoose
  .connect("mongodb+srv://kani:Bosfcr2s.@quantkani.xzczetc.mongodb.net/")
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.error("MongoDB connection error:", error));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
