//This is the file where we will connect to our MongoDB database using Mongoose. We will create a function called connectDB that will establish the connection to the database and log a message once connected. We will then export this function so that it can be used in our server.js file to connect to the database before starting the server.
const moongoose = require("mongoose");


async function connectDB() {
    await moongoose.connect("mongodb+srv://CompleteBackendYT_01:P2WjxE60rtjdRZvQ@atlascluster.hoysxft.mongodb.net/BackendOneShortDB")
    // this is await because mongoose.connect returns a promise, so we need to wait for the connection to be established before logging the message
    console.log("Connected to MongoDB");
}

module.exports = connectDB;

