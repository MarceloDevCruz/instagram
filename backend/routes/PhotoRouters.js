const express = require('express')
const router = express.Router()

// Controllers
const { insertPhoto, deletePhoto, getAllPhotos,
  getUserPhotoById, getPhotoById, updatePhoto,
  likePhoto, commentPhoto, searchPosts,
} = require('../controllers/PhotoController')

// Middlewares
const { photoInsertValidation, photoUpdateValidation,
  photoCommentValidation } = require('../middlewares/photoValidation')
const authGuard = require('../middlewares/authGuard')
const validate = require('../middlewares/handleValidation')
const { imageUpload } = require('../middlewares/imageUpload')

// Routes
router.post('/', authGuard, imageUpload.single('image'),
  photoInsertValidation(), validate, insertPhoto)
router.delete('/:id', authGuard, deletePhoto)
router.get('/', authGuard, getAllPhotos)
router.get('/user/:id', authGuard, getUserPhotoById)
router.get('/search/', authGuard, searchPosts)
router.get('/:id', authGuard, getUserPhotoById)
router.put('/:id', authGuard, photoUpdateValidation(), validate, updatePhoto)
router.put('/like/:id', authGuard, likePhoto)
router.put('/comment/:id', authGuard, photoCommentValidation(), validate, commentPhoto)

module.exports = router