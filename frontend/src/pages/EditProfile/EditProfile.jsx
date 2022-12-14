// Styled Component
import {
  Container, Photo,
  EditProfileButton, OtherLinks, Form
} from './styled'

// Bootstrap icons
import { BsX, BsCheck } from "react-icons/bs"

// Uploads
import { uploads } from '../../utils/config'

// hooks
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
    <>
      <Container>
        <Form>
          <form onSubmit={handleSubmit}>
            <EditProfileButton>
              <button type="reset"><BsX /></button>
              <h2>Edit Profile</h2>
              <button type='submit'>< BsCheck /></button>
            </EditProfileButton>
            <Photo>
              <div>
                {(user.profileImage || previewImage) && (
                  <img
                    src={
                      previewImage
                        ? URL.createObjectURL(previewImage)
                        : `${uploads}/users/${user.profileImage}`
                    } alt={user.name} />
                )}
              </div>
              <label htmlFor="file">Change profile photo</label>
              <input type="file" id="file" onChange={handleFile} />
            </Photo>
            <input type="text" placeholder="Change name" onChange={e => setName(e.target.value)} value={name || ''} />
            <input type="email" placeholder="Change email" readOnly value={email || ''} />
            <input type="text" placeholder="Change bio" onChange={e => setBio(e.target.value)} value={bio || ''} />
            <input type="password" placeholder="Change password" onChange={e => setPassword(e.target.value)} value={password || ''} />
          </form>
          <OtherLinks>
            <p>Switch to Professional account</p>
            <p>Personal information settings</p>
          </OtherLinks>
        </Form>
        <div>
          {error && <MessageDanger msg={error} type="danger" />}
          {message && <MessageSuccess msg={message} type="sucess" />}
        </div>
      </Container>
    </>
  )
}

export default EditProfile