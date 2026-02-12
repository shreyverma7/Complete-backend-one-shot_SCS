const moongoose = require("mongoose");

const noteSchema = new moongoose.Schema({
    title : String,
    description : String,
}
)

const noteModel = moongoose.model("Note", noteSchema);

module.exports = noteModel;

