const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

/*
 POST /notes - Create a new note
GET /notes - Get all notes
DELETE /notes/:id - Delete a note by ID
PATCH /notes/:id - Update a note by ID
 */

app.post("/notes", async (req, res) => {
  const data = req.body; /* {title , description} */
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({ message: "Note created successfully", data: data });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); // [] or [{title, description}]
  //const notes = await noteModel.find({},{title: "test_title3" }); // [] or [{title}] find only title which is "test_title3"
  //const notes = await noteModel.find({title: "test_title3" }); // [] or [{title}] find only title which is "test_title3"
  res.status(200).json({
    message: "Notes fetched successfully",
    data: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  //   const data = req.body; /* {title , description} */
  const description = req.body.description;
  await noteModel.findOneAndUpdate({ _id: id }, { description: description });
  res.status(200).json({
    message: "Note updated successfully",
  });
});

module.exports = app;
