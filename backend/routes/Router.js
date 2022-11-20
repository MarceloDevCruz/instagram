const express = require('express')
const router = express()

// Adicionando a rota do usuário
router.use('/api/users', require('./UserRoutes'))
router.use('/api/photos', require('./PhotoRouters'))

// testando router
router.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = router