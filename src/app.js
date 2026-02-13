const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() }); // Store uploaded files in memory
//const upload = multer({ storage: 'uploads/' }); // Store uploaded files in the 'uploads' directory

app.post("/create-post", upload.single("image"), async (req, res) => {
  //    console.log(req.body);
  //    console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  // console.log(result);
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  return res.status(201).json({ message: "Post created successfully", post });
});

module.exports = app;
