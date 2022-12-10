const User = require('../models/User')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')

const jwtSecret = process.env.JWT_SECRET

// Gerar um token para um usuário
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: '7d' })
}

// Registrar um usuário e fazer sign in 
const register = async (req, res) => {

  const { name, email, password } = req.body

  //checar se o usuário já existe
  const user = await User.findOne({ email })

  if (user) {
    res.status(422).json({ errors: ['Email já utilizado, registre com outro email'] })
    return
  }

  //Gerar uma hash para o password
  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password, salt)

  //Criando o usuário no banco de dados
  const newUser = await User.create({
    name,
    email,
    password: passwordHash
  })

  // Tratando erro do sistema
  if (!newUser) {
    res.status(422).json({ errors: ['ERRO, Tente mais tarde'] })
    return
  }

  // Usuário foi criado com sucesso, retornar o token
  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id)
  })
}

// Fazendo login do usuário
const login = async (req, res) => {

  const { email, password } = req.body
  const user = await User.findOne({ email })

  // Usuário não existe
  if (!user) {
    res.status(404).json({ errors: ['Usuário não encontrado'] })
    return
  }

  // Checar senha do login
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({ errors: ['Senha inválida'] })
    return
  }

  // Retornar usuário com o token
  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id)
  })
}

// Função que vai validar a proteção da autenticação

const getCurrentUser = async (req, res) => {
  const user = req.user

  res.status(200).json(user)

}

// Fazendo o update do usuário
const update = async (req, res) => {

  const { name, password, bio } = req.body

  let profileImage = null

  if (req.file) {
    profileImage = req.file.filename
  }

  const reqUser = req.user

  const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select('-password')

  if (name) {
    user.name = name
  }

  if (password) {
    //Gerar uma hash para o password
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    user.password = passwordHash
  }

  if (profileImage) {
    user.profileImage = profileImage
  }

  if (bio) {
    user.bio = bio
  }

  await user.save()

  res.status(200).json(user)
}

const getUserById = async (req, res) => {

  const { id } = req.params

  // Separando o "\n" do id
  const formatedId = id.split('\n')[0]

  const user = await User.findById(mongoose.Types.ObjectId(formatedId)).select('-password')

  // checar se o usuário existe
  if (!user) {
    res.status(404).json({ errors: ['Usuário não encontrado'] })
    return
  }

  res.status(200).json(user)
  return
}

module.exports = {
  register,
  login,
  getCurrentUser,
  update,
  getUserById
}