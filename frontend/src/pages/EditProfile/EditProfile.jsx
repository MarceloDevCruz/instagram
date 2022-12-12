// Styled Component
import {
  Container, Photo,
  EditProfileButton, OtherLinks, Form
} from './styled'

// Bootstrap icons
import { BsX, BsCheck } from "react-icons/bs";

// Uploads
import { upload } from '../../utils/config'

// hooks
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { profile, resetMessage } from '../../slices/userSlice'

import MessageDanger from '../../components/message/danger/MessageDanger'
import MessageSuccess from '../../components/message/success/MessageSuccess'


const EditProfile = () => {

  const dispatch = useDispatch()

  const { user, message, error, loading } = useSelector((state) => state.user);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [previewImage, setPreviewImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleFile = (e) => {
    const image = e.target.files[0]

    setPreviewImage(image)

    setProfileImage(image)
  }

  useEffect(() => {
    dispatch(profile())
  }, [dispatch])

  useEffect(() => {

    if (user) {
      setName(user.name)
      setEmail(user.email)
      setBio(user.bio)
      setPassword(user.password)
    }

  }, [user])

  return (
    <>
      <Container>
        <Form>
          <form onSubmit={handleSubmit}>
            <EditProfileButton>
              <button ><BsX /></button>
              <h2>Edit Profile</h2>
              <button type='submit'>< BsCheck /></button>
            </EditProfileButton>
            <Photo>
              <div>
                {(user.profileImage || previewImage) && (
                  <img src={previewImage ? URL.createObjectURL(previewImage)
                    : `${uploads}/users/${user.profileImage}`} alt={user.name}></img>
                )}
              </div>
              <label htmlFor="file">Change profile photo</label>
              <input type="file" id="file" onChange={handleFile} />
            </Photo>
            <input type="text" name="name" placeholder="Change name" onChange={e => setName(e.target.value)} value={name || ''} />
            <input type="email" name="email" placeholder="Change email" onChange={e => setEmail(e.target.value)} value={email || ''} />
            <input type="text" name="bio" placeholder="Change bio" onChange={e => setBio(e.target.value)} value={bio || ''} />
            <input type="password" name="password" placeholder="Change password" onChange={e => setPassword(e.target.value)} value={password || ''} />
          </form>
          <OtherLinks>
            <p>Switch to Professional account</p>
            <p>Personal information settings</p>
          </OtherLinks>
        </Form>
      </Container>
    </>
  )
}

export default EditProfile