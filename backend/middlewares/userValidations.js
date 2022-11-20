// destructuring de todo o corpo da requisição
const { body } = require('express-validator')

// Criando uma validação do usuário retornando uma array de 
// possíveis erros
const userCreateValidation = () => {
  return [
    //validando campo name
    body('name').isString().withMessage('O nome é obrigatório')
      .isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres'),

    //validando campo email
    body('email').isString().withMessage('O e-mail é obrigatório').isEmail()
      .withMessage('Insira um email válido'),

    //validando campo password
    body('password').isString().withMessage('A senha é obrigatória').isLength({ min: 5 })
      .withMessage('A senha precisa ter no mínimo 5 caracteres'),

    //validando a confirmação de password
    body('confirmpassword').isString().withMessage('A confirmação de senha é obrigatória')
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error('As senhas não são iguais')
        }
        return true
      })
  ]
}

// Validando o Login do usuário
const loginValidation = () => {
  return [
    //Validando email
    body('email').isString().withMessage('O e-amil é obrigatório')
      .isEmail().withMessage('Insira um e-mail válido'),

    // Validando password
    body('password').isString().withMessage('A senha é obrigatória')
  ]
}

// Validando o update do usuário
const userUpdateValidation = () => {

  return [
    body('name').optional().isLength({ min: 3 })
      .withMessage('O nome precisa pelo menos 3 caracteres'),

    body('password').optional().isLength({ min: 5 })
      .withMessage('A senha precisa ter no mínimo 5 caracteres')
  ]
}

module.exports = {
  userCreateValidation,
  loginValidation,
  userUpdateValidation
}
