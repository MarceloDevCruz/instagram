// Styled component
import {
  ProfileContainer, FormPostProfile, PostPhotos,
  UserProfile
} from './styled'

// utils
import { uploads } from '../../utils/config'

// componentes
import MessageDanger from '../../components/message/danger/MessageDanger'
import MessageSuccess from '../../components/message/success/MessageSuccess'

// hooks
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// redux
import { getUserDetails } from '../../slices/userSlice'

const Profile = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  const { user, loading } = useSelector((state) => state.user)
  const { user: userAuth } = useSelector((state) => state.auth)

  // Photo

  useEffect(() => {
    dispatch(getUserDetails(id))
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
        <FormPostProfile>
          <form >
            <h1>Create a New Post</h1>
            <input type="text" placeholder="Insert title" />
            <label htmlFor="file">Insert Image for you post</label>
            <input type="file" id="file" />
          </form>

        </FormPostProfile>
        <PostPhotos>
          <h1>Your posts</h1>
        </PostPhotos>
      </ProfileContainer>
    </>
  )
}

export default Profile