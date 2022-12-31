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
import { getPhotoById, likePhoto, commentPhoto } from '../../slices/photoSlice'
import Like from '../../components/like/Like'

const Photo = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { photo, loading, error, message } = useSelector((state) => state.photo)

  // Comentários
  const [commentText, setCommentText] = useState('')

  // Dados do post
  useEffect(() => {
    dispatch(getPhotoById(id))
  }, [dispatch, id])

  // Like
  const handleLike = () => {
    dispatch(likePhoto(photo._id))
  }

  // inserir comentário
  const handleComment = (e) => {
    e.preventDefault()

    const photoData = {
      comment: commentText,
      id: photo._id,
    }

    dispatch(commentPhoto(photoData));

    setCommentText("")
  }

  return (
    <>
      <PhotoContainer>
        <PhotoItem photo={photo} >
        </PhotoItem>
        <Like photo={photo} user={user} handleLike={handleLike} />
        {photo.comments && (
          <>
            <h3>Comentários: {photo.comments.length}</h3>
            <form onSubmit={handleComment}>
              <input
                type="text"
                placeholder="Insira seu comentário..."
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText || ""}
              />
              <input type="submit" value="Enviar" />
            </form>
            {photo.comments.length === 0 && <p>Não há comentários...</p>}
            {photo.comments.map((comment) => (
              <div className="comment" key={comment.comment}>
                <div className="author">
                  {comment.userImage && (
                    <img
                      src={`${uploads}/users/${comment.userImage}`}
                      alt={comment.userName}
                    />
                  )}
                  <Link to={`/users/${comment.userId}`}>
                    <p>{comment.userName}</p>
                  </Link>
                </div>
                <p>{comment.comment}</p>
              </div>
            ))}
          </>
        )}

      </PhotoContainer>
    </>
  )
}

export default Photo