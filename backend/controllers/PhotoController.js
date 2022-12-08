const Photo = require('../models/Photo')
const User = require('../models/User')

const mongoose = require('mongoose')

// Inserindo uma foto relacionado a um usuário
const insertPhoto = async (req, res) => {

  const { title } = req.body
  const image = req.file.filename

  const reqUser = req.user

  const user = await User.findById(reqUser._id)

  // Criando a foto
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name
  })

  // Checar a foto
  if (!newPhoto) {
    res.status(422).json({ errors: ['Houve um erro, tente mais tarde'], })
    return
  }

  res.status(201).json(newPhoto)

}

// Remover foto
const deletePhoto = async (req, res) => {

  const { id } = req.params

  // novamente tenho que fazer o split no id que chega por params
  const formatedId = id.split('\n')[0]

  const reqUser = req.user

  const photo = await Photo.findById(mongoose.Types.ObjectId(formatedId))

  // Checando se a foto existe
  if (!photo) {
    res.status(404).json({ errors: ['Foto não encontrada'], })
    return
  }

  // Checando se a foto pertence ao usuário
  if (!photo.userId.equals(reqUser._id)) {
    res.status(422).json({ errors: ['Houve um erro tente mais tarde'], })
    return
  }

  await Photo.findByIdAndDelete(photo._id)

  res.status(200).json({
    id: photo._id,
    message: "Foto excluida com sucesso"
  })
}

// Retorna todas as photos do banco de dados
const getAllPhotos = async (req, res) => {

  // Pegar todas as fotos pelo objeto vázio, fazer um sort por createdAt ou seja
  // pelos mais novos
  const photos = await Photo.find({}).sort([['createdAt', -1]]).exec()

  return res.status(200).json(photos)
}

//Pegar todas as fotos do usuário por ID
const getUserPhotoById = async (req, res) => {

  const { id } = req.params

  const photos = await Photo.find({ userId: id }).sort([['createdAt', -1]]).exec()

  res.status(200).json(photos)
}

// Pegar fotos pelo ID
const getPhotoById = async (req, res) => {

  const { id } = req.params
  const formatedId = id.split('\n')[0]

  const photo = await Photo.findById(mongoose.Types.ObjectId(formatedId))

  if (!photo) {
    res.status(404).json({ errors: ['Foto não encontrada'], })
    return
  }
  res.status(200).json(photo)

}

// Atualização de foto
const updatePhoto = async (req, res) => {

  const { id } = req.params
  const { title } = req.body

  const reqUser = req.user

  const photo = await Photo.findById(id)

  // Checar se foto existe
  if (!photo) {
    res.status(404).json({ errors: ['Foto não encontrada'] })
    return
  }

  // Checar se a photo que será atualizada pertence ao usuário
  if (!photo.userId.equals(reqUser._id)) {
    res.status(422).json({ errors: ['Houve um erro, tente mais tarde!'] })
    return
  }

  if (title) photo.title = title
  await photo.save()

  res.status(200).json({ photo, message: "Foto atualizada com sucesso!" })

}

// Dar like na foto
const likePhoto = async (req, res) => {

  const { id } = req.params

  const reqUser = req.user

  const photo = await Photo.findById(id)

  // Checar se foto existe
  if (!photo) {
    res.status(404).json({ errors: ['Foto não encontrada'] })
    return
  }

  // Checar se o usuário já deu like na foto
  if (photo.likes.includes(reqUser._id)) {
    res.status(422).json({ errors: ['Já curtiu a foto'] })
    return
  }

  // Like array
  photo.likes.push(reqUser._id)
  await photo.save()

  res.status(200).json({ photoId: id, userId: reqUser._id, message: "Foto curtida" })

}

// Comentarios na foto
const commentPhoto = async (req, res) => {

  const { id } = req.params
  const { comment } = req.body
  const reqUser = req.user

  const user = await User.findById(reqUser._id)
  const photo = await Photo.findById(id)

  // Checar se o usuário já deu like na foto
  if (photo.likes.includes(reqUser._id)) {
    res.status(422).json({ errors: ['Já curtiu a foto'] })
    return
  }

  // Comentário array
  const userComment = { comment, userName: user.name, userImage: user.profileImage, userOd: user._id }

  photo.comments.push(userComment)
  await photo.save()

  res.status(200).json({ photoId: id, userId: reqUser._id, message: "Foto Comentada" })

}

// Busca por posts
const searchPosts = async (req, res) => {
  const { q } = req.query

  const photos = await Photo.find({ title: new RegExp(q, 'i') }).exec()

  res.status(200).json(photos)
}

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotoById,
  getPhotoById,
  updatePhoto,
  likePhoto,
  commentPhoto,
  searchPosts,
}