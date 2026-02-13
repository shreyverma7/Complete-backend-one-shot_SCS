const moongoose = require("mongoose");


async function connectDB() {
    await moongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
}

module.exports = connectDB;

