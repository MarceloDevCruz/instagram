const { body } = require('express-validator')

const photoInsertValidation = () => {
  return [

    // Validando título
    body('title').not().equals('undefined')
      .withMessage('O titulo é obrigatório').isString()
      .withMessage('O titulo é obrigatório').isLength({ min: 3 })
      .withMessage('O titulo precisa ter no mínimo 3 caracteres'),

    // Validando se a imagem foi enviada
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("A imagem é obrigatória")
      }
      return true
    })
  ]
}

const photoUpdateValidation = () => {
  return [
    body('title').optional().isString()
      .withMessage('O título é obrigatório').isLength({ min: 3 })
      .withMessage('O titulo precisa ter no mínimo 3 caracteres'),
  ]
}

const photoCommentValidation = () => {
  return [
    body('comment').isString().withMessage('Comente alguma coisa')
  ]
}

module.exports = {
  photoInsertValidation,
  photoUpdateValidation,
  photoCommentValidation
}