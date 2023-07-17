import express from "express";
import User from "../User";

const router = express.Router();

// POST route to register a new user
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send("User registered successfully");
  } catch (error) {
    const err = error as Error;
    res.status(500).send("Error registering user: " + err.message);
  }
});

// GET route to retrieve user by uid
router.get("/:uid", async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });
    if (user) res.status(200).json(user);
    else res.status(404).send("User not found");
  } catch (error) {
    const err = error as Error;
    res.status(500).send("Error retrieving user: " + err.message);
  }
});

export default router;
