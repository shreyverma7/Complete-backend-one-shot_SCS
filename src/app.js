//create a server using express is app.js works
const express = require('express');

const app = express();
app.use(express.json()); //Middle  to parse JSON request body


const notes = [];
app.post('/notes', (req, res) => {
  
  console.log(req.body);
  res.status(201).json({ message: 'Note created successfully' });
});

//? Format fo notes 
/* const notes = [
  {
    title: "my first note",
    description: "this is my first note",
  },

  { title: "my second note", description: "this is my second note" },
]; */


module.exports = app;

