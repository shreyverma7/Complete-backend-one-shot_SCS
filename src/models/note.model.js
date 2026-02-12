// Importing mongoose to create a schema for the Note model
const moongoose = require("mongoose");

//Schema is created using mongoose.Schema and it defines the structure of the Note document in the MongoDB database. It is basically a stucture that defines the fields and their types for the Note model. In this case, we have two fields: title and description, both of which are of type String.
const noteSchema = new moongoose.Schema({
    title : String,
    description : String,
}
)

//notemodel is created because we need to create a model using the schema we just defined. The model is what we will use to interact with the database, such as creating, reading, updating, and deleting notes. We pass the name of the model ("Note") and the schema (noteSchema) to the mongoose.model function to create the model.
const noteModel = moongoose.model("Note", noteSchema);

module.exports = noteModel;

