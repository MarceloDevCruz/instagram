// VScode icons
import { VscEdit, VscEye, VscTrash } from 'react-icons/vsc'

// utils
import { uploads } from '../../utils/config'

// componentes
import MessageDanger from '../../components/message/danger/MessageDanger'
import MessageSuccess from '../../components/message/success/MessageSuccess'
import PhotoItem from '../../components/photoItem/PhotoItem'

// hooks
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

// redux
import { getUserDetails, } from '../../slices/userSlice'
import {
  publishPhoto, resetMessage,
  getUserPhotos, deletePhoto
} from '../../slices/photoSlice'

const Profile = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  const { user, loading } = useSelector((state) => state.user)
  const { user: userAuth } = useSelector((state) => state.auth)
  const { photos, loading: loadingPhoto, message: messagePhoto,
    error: errorPhoto } = useSelector((state) => state.photo)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  // Photo
  const newPhotoForm = useRef()
  const editPhotoForm = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const photoData = {
      title, image,
    }

    const formData = new FormData()

    const photoFormData = Object.keys(photoData).forEach((key) =>
      formData.append(key, photoData[key])
    )

    formData.append('photo', photoFormData)

    dispatch(publishPhoto(formData))

    setTitle('')

    setTimeout(() => {
      dispatch(resetMessage())
    }, 5000);
  }

  const handleDelete = (id) => {
    dispatch(deletePhoto(id))

    setTimeout(() => {
      dispatch(resetMessage())
    }, 5000);
  }

  const handleFile = (e) => {
    const image = e.target.files[0]
    setImage(image)
  }

  useEffect(() => {
    dispatch(getUserDetails(id))
    dispatch(getUserPhotos(id))
  }, [dispatch, id])

  return (
    <div className="background">
      <div className="resetFilter">
        <section className="profile">
          <div className="profile__container">
            <div className="profile__container-user">
              {user.profileImage && (
                <img className="profile__image"
                  src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
              )}
              <h2 className="profile__name">{user.name}</h2>
              <h5 className="profile__bio">{user.bio}</h5>
              <p className="profile__text">Você atualmente tem {photos.length} posts</p>
            </div>

            <div className="profile__container-create">
              {id === userAuth._id && (
                <>
                  <div ref={newPhotoForm}>
                    <form className="form" onSubmit={handleSubmit}>
                      <h1 className="profile__title mg-top-bottom-sm">Crie um novo post</h1>
                      <input type="text" placeholder="Insert title" className="form__input mg-top-bottom-sm"
                        onChange={(e) => setTitle(e.target.value)} value={title || ''} />
                      <label htmlFor="file" className="form__label mg-top-bottom-sm">Compartilhe uma foto</label>
                      <input type="file" id="file" className="hidden-input" onChange={handleFile} />
                      <button type='submit' className="btn btn-secondary">Postar</button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
        {id === userAuth._id ? (
          <h1 className="profile__title-post">Seus posts</h1>
        ) : (
          <h1>{user.name} Posts</h1>
        )}
      </div>
      <div className="home">
        {photos &&
          photos.map((photo) => (
            <div key={photo._id} className="home__container">
              <PhotoItem photo={photo} />
              <Link to={`/photos/${photo._id}`}>
                Ver mais
              </Link>
            </div>
          ))}
      </div>
      {
        photos.length === 0 &&
        <p>Sem posts no momemnto...</p>
      }
      <div>
        {errorPhoto && <MessageDanger msg={errorPhoto} type="danger" />}
        {messagePhoto && <MessageSuccess msg={messagePhoto} type="sucess" />}
      </div>
    </div >
  )
}

export default Profile