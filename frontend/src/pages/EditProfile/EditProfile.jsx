// Bootstrap icons
import { BsBackspaceReverseFill } from "react-icons/bs"

// Uploads
import { uploads } from '../../utils/config'

// hooks
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// Redux
import { profile, resetMessage, updateProfile } from '../../slices/userSlice'

import MessageDanger from '../../components/message/danger/MessageDanger'
import MessageSuccess from '../../components/message/success/MessageSuccess'


const EditProfile = () => {

  const dispatch = useDispatch()

  const { user, message, error, loading } = useSelector((state) => state.user);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [imageProfile, setImageProfile] = useState('')
  const [previewImage, setPreviewImage] = useState('')

  useEffect(() => {
    dispatch(profile())
  }, [dispatch])

  useEffect(() => {

    if (user) {
      setName(user.name)
      setEmail(user.email)
      setBio(user.bio)
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      name: user.name
    }

    if (imageProfile) {
      userData.profileImage = imageProfile
    }

    if (bio) {
      userData.bio = bio
    }

    if (password) {
      userData.password = password
    }

    if (email) {
      userData.email = email
    }

    const formData = new FormData()

    const userFormData = Object.keys(userData).forEach((key) =>
      formData.append(key, userData[key])
    )

    formData.append('user', userFormData)

    await dispatch(updateProfile(formData))

    setTimeout(() => {
      dispatch(resetMessage())
    }, 5000);
  }

  const handleFile = (e) => {
    const image = e.target.files[0]

    setPreviewImage(image)
    setImageProfile(image)
  }

  return (
    <div className="background">
      <section className="edit-profile mg-top-md">
        <form onSubmit={handleSubmit} className="form">
          <div className="edit-profile__container">
            <div className="edit-profile__user-photo">
              {(user.profileImage || previewImage) && (
                <img className="edit-profile__photo" htmlFor="file"
                  src={
                    previewImage
                      ? URL.createObjectURL(previewImage)
                      : `${uploads}/users/${user.profileImage}`
                  } alt={user.name} />
              )}
            </div>
            <label htmlFor="file" className="edit-profile__label">Clique para editar a foto</label>
            <input type="file" id="file" className="hidden-input" onChange={handleFile} />

            <input type="text" placeholder="Seu nome..." className="form__input edit-profile__input"
              onChange={e => setName(e.target.value)} value={name || ''} />
            <input type="email" disabled className="form__input edit-profile__input"
              readOnly value={email || ''} />
            <input type="text" placeholder="Sua bio..." className="form__input edit-profile__input"
              onChange={e => setBio(e.target.value)} value={bio || ''} />
            <input type="password" placeholder="Sua senha..." className="form__input edit-profile__input"
              onChange={e => setPassword(e.target.value)} value={password || ''} />
            <button className="btn btn-secondary mg-top-sm" type="submit">Salvar</button>
            <button className="btn-special" type="reset"><Link to="/"
            ><BsBackspaceReverseFill /></Link></button>
            {/* TROCAR POR UMA FLASH MESSAGER! */}
            {error && <MessageDanger msg={error} type="danger" />}
            {!error && <MessageSuccess msg={error} type="sucess" />}
          </div>
        </form>
      </section>
    </div>
  )
}

export default EditProfile