const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  link: String,
  synopsis: String,
  authors: String,
  image: String,
  releaseDate: String,

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
