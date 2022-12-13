const multer = require('multer')
const path = require('path')

// Onde a imagem vai ser salva
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = ''

    //Mudando o destino padrão
    if (req.baseUrl.includes('users')) {
      folder = 'users'
    }
    else if (req.baseUrl.includes('photos')) {
      folder = 'photos'
    }

    cb(null, `uploads/${folder}/`)
  },

  //Mudando do arquivo padrão
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

// fazer o upload da imagem apenas se for png ou jpg
const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {

      return cb(new Error('Envie um arquivo png ou jpg'))
    }
    cb(undefined, true)
  }
})

module.exports = { imageUpload }