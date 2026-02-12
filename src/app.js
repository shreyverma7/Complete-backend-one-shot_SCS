const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json()); // This middleware is used to parse the JSON data sent in the request body. It allows us to access the data using req.body in our route handlers.

/*
 POST /notes - Create a new note
GET /notes - Get all notes
DELETE /notes/:id - Delete a note by ID
PATCH /notes/:id - Update a note by ID
 */

app.post("/notes", async(req, res) => {
  const data = req.body; /* {title , description} */
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({ message: "Note created successfully" });
});

module.exports = app;
