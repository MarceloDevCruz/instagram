const { validationResult } = require('express-validator')

// Vai resgatar os erros criado pelo middleware de validação de usuário
// Recebe a requisição a resposta e o next para continuar a lógica
// da requisição, validação das informações que o usuário coloca
const validate = (req, res, next) => {

  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }

  const extractedErrors = []

  errors.array().map((err) => extractedErrors.push(err.msg))

  return res.status(422).json({
    errors: extractedErrors
  })
}

module.exports = validate