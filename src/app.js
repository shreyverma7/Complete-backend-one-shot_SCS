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

app.post("/create-post", async (req, res) => {
   console.log(req.body);
});



module.exports = app;
