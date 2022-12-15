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
import { getPhotoById } from '../../slices/photoSlice'

const Photo = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  )
  // Comentários

  // Dados do post
  useEffect(() => {
    dispatch(getPhotoById(id))
  }, [dispatch, id])

  // Like e comentário

  return (
    <>
      <PhotoContainer>
        {photo.image && (
          <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} > </img>
        )}
        <h2>{photo.title}</h2>
        <p>Por:
          <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
        </p>
      </PhotoContainer>
    </>
  )
}

export default Photo