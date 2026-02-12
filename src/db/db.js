const moongoose = require("mongoose");


async function connectDB() {
    await moongoose.connect("mongodb+srv://CompleteBackendYT_01:P2WjxE60rtjdRZvQ@atlascluster.hoysxft.mongodb.net/BackendOneShortDB")
    console.log("Connected to MongoDB");
}

module.exports = connectDB;

