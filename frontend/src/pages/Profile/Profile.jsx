// Styled component
import {
  ProfileContainer, FormPostProfile, PostPhotos,
  UserProfile, IconsContainer
} from './styled'

// VScode icons
import { VscEdit, VscEye, VscTrash } from 'react-icons/vsc'

// utils
import { uploads } from '../../utils/config'

// componentes
import MessageDanger from '../../components/message/danger/MessageDanger'
import MessageSuccess from '../../components/message/success/MessageSuccess'

// hooks
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

// redux
import { getUserDetails, } from '../../slices/userSlice'
import { publishPhoto, resetMessage, getUserPhotos, deletePhoto } from '../../slices/photoSlice'

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
    <>
      <ProfileContainer >
        <UserProfile>
          {user.profileImage && (
            <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
          )}
          <div>
            <h1>{user.name}</h1>
            <p>Your bio:</p>
            <p>{user.bio}</p>
          </div>
        </UserProfile>

        {id === userAuth._id && (
          <>
            <FormPostProfile>
              <div ref={newPhotoForm}>
                <form onSubmit={handleSubmit}>
                  <h1>Create a New Post</h1>
                  <input type="text" placeholder="Insert title" onChange={(e) => setTitle(e.target.value)} value={title || ''} />
                  <label htmlFor="file">Insert Image for you post</label>
                  <input type="file" id="file" onChange={handleFile} />
                  <button type='submit'>Post</button>
                </form>
              </div>
            </FormPostProfile>
          </>
        )}
        <PostPhotos>
          {id === userAuth._id ? (
            <>
              <h1>Your posts</h1>
            </>
          ) : (
            <>
              <h1>{user.name} Posts</h1>
            </>
          )}
          {photos && photos.map((photo) => (
            <div key={photo._id}>
              <h3>{photo.title}</h3>
              {photo.image && (
                <img src={`${uploads}/photos/${photo.image}`}
                  alt={photo.title}></img>
              )}
              {id === userAuth._id ? (
                <IconsContainer>
                  <ul>
                    <li><button><VscEye></VscEye></button></li>
                    <li><button><VscEdit></VscEdit></button></li>
                    <li><button onClick={() =>
                      handleDelete(photo._id)}><VscTrash></VscTrash></button></li>
                  </ul>
                </IconsContainer>
              ) : (
                <Link to={`/photos/${photo._id}`}>Ver</Link>
              )}
            </div>
          ))}
          {photos.length === 0 &&
            <p>Sem fotos no momento</p>
          }
        </PostPhotos>
        <div>
          {errorPhoto && <MessageDanger msg={errorPhoto} type="danger" />}
          {messagePhoto && <MessageSuccess msg={messagePhoto} type="sucess" />}
        </div>
      </ProfileContainer>
    </>
  )
}

export default Profile