
const { ImageKit } = require("@imagekit/nodejs");     // For CommonJS older version of Node.js
// import ImageKit from '@imagekit/nodejs';  // For ES module newer version of Node.js



const imagekit = new ImageKit({
     privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
    // console.log(buffer);
    const result = await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName : "image.jpg",
    });
    return result;
}

module.exports = uploadFile;