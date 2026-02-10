const express = require('express');

const app = express();  //create an server using express

app.get('/', (req, res) => {
  res.send('Hello, World!'); //send a response to the client when the root URL is accessed
});

app.get('/about', (req, res) => {
  res.send('This is the about page.'); //send a response to the client when the /about URL is accessed
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); //start the server and listen on port 3000