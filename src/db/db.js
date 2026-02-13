const moongoose = require("mongoose");


async function connectDB() {
    await moongoose.connect("mongodb+srv://CompleteBackendYT_01:P2WjxE60rtjdRZvQ@atlascluster.hoysxft.mongodb.net/Project_01");
    console.log("Connected to MongoDB");
}

module.exports = connectDB;

