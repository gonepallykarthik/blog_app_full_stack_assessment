const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = require("../models/posts");

router.get("/", async (req, res) => {
  try {
    const userPost = await Post.find();
    res.send(userPost).status(200);
  } catch (e) {
    res.status(400).send("Unbale to fetch");
  }
});

router.post("/post", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    message: req.body.message,
    creator: req.body.creator,

    likeCount: req.body.likeCount,
  });
  newPost
    .save()
    .then(() => res.status(201).send(newPost))
    .catch((e) => res.status(400).send("failed"));
});

router.patch("/update/:id", async (req, res) => {
  try {
    const { id: _id } = req.params;
    const newPost = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("no Post found");

    const updatedPost = await Post.findByIdAndUpdate(_id, newPost, {
      new: true,
    });
    res.send(updatedPost);
  } catch (e) {
    res.send(e.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndRemove(id);
    res.send("delete").status(201);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
