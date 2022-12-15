// Styled component
import { PhotoContainer } from './styled'

// utils
import { uploads } from '../../utils/config'

// components
import MessageDanger from '../../components/message/danger/MessageDanger'
import MessageSuccess from '../../components/message/success/MessageSuccess'
import PhotoItem from '../../components/photoItem/PhotoItem'

// hooks
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Redux
import { getPhotoById, likePhoto } from '../../slices/photoSlice'
import Like from '../../components/like/Like'

const Photo = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { photo, loading, error, message } = useSelector((state) => state.photo)
  // Comentários

  // Dados do post
  useEffect(() => {
    dispatch(getPhotoById(id))
  }, [dispatch, id])

  // Like e comentário

  const handleLike = () => {
    dispatch(likePhoto(photo._id))
  }

  return (
    <>
      <PhotoContainer>
        <PhotoItem photo={photo} >
        </PhotoItem>
        <Like photo={photo} user={user} handleLike={handleLike} />
      </PhotoContainer>
    </>
  )
}

export default Photo