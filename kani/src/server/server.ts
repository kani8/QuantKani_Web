import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/user";
import blogRoutes from "./routes/blog";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "https://quantkani.com",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
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
