const Photo = require('../models/Photo')

const mongoose = require('mongoose')

// Inserindo uma foto relacionado a um usuário
const insertPhoto = async (req, res) => {

  const { title } = req.body
  const image = req.file.filename

  console.log(req.body)

  res.send('Photo Insert')
}

module.exports = {
  insertPhoto
}