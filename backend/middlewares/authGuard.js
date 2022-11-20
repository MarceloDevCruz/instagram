const User = require('../models/User')
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET

// Esse middleware fará a authorização dos usuários para acessar
// determinadas partes da aplicação
const authGuard = async (req, res, next) => {

  const authHeader = req.headers['authorization']

  // Separar o Bearer do token
  const token = authHeader && authHeader.split(' ')[1]

  // Checar se o cabeçalho tem o token
  if (!token) return res.status(401).json({ errors: ['Acesso negado!'] })

  // Checando a validação do token
  try {

    const verified = jwt.verify(token, jwtSecret)

    req.user = await User.findById(verified.id).select('-password')
    next()

  } catch (error) {
    res.status(401).json({ errors: ['Token inválido'] })
  }
}

module.exports = authGuard