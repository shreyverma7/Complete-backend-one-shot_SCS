//create a server using express is app.js works
const express = require("express");

const app = express();
app.use(express.json()); //Middle  to parse JSON request body

const notes = [];

//!post api
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res
    .status(201)
    .json({ message: "Note created successfully", note: req.body });
});
//!get api
app.get("/notes", (req, res) => {
  res.status(200).json({ message: "Notes fetched successfully", notes: notes });
});
//!delete api
app.delete("/notes/:index", (req, res) => {
    const index = req.params.index - 1; // Convert to zero-based index
    delete notes[index];
    res.status(200).json({ message: "Note deleted successfully" });

});
//!update api
app.patch("/notes/:index", (req, res) => { 
    const index = req.params.index - 1; // Convert to zero-based index
    const description = req.body.description;
    notes[index].description = description;
    res.status(200).json({ message: "Note updated successfully", note: req.body });     
});
module.exports = app;
