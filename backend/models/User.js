const mongoose = require('mongoose')
// Pegando o schema do mongoose
const { Schema } = mongoose

// Construindo o schema do usuario
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  profileImage: String,
  bio: String
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User