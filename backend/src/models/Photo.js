const mongoose = require("mongoose");
// Pegando o schema do mongoose
const { Schema } = mongoose;

// Construindo o schema da photo
const photoSchema = new Schema(
  {
    image: String,
    title: String,
    likes: Array,
    comments: Array,
    userId: mongoose.ObjectId,
    userName: String,
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
