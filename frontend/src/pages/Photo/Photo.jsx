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
import { getPhotoById, likePhoto, commentPhoto, resetMessage } from '../../slices/photoSlice'
import Like from '../../components/like/Like'

const Photo = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { photo, loading, error, message } = useSelector((state) => state.photo)

  // Comentários
  const [commentText, setCommentText] = useState()

  // Dados do post
  useEffect(() => {
    dispatch(getPhotoById(id))
  }, [dispatch, id])

  // Like
  const handleLike = () => {
    dispatch(likePhoto(photo._id))
    setTimeout(() => {
      dispatch(resetMessage())
    }, 5000);
  }

  // inserir comentário
  const handleComment = (e) => {
    e.preventDefault()

    const photoData = {
      comment: commentText,
      id: photo._id,
    }

    dispatch(commentPhoto(photoData));

    setCommentText('')
    setTimeout(() => {
      dispatch(resetMessage())
    }, 5000);
  }

  return (
    <section className="profile">
      <div className="background">
        <div className="profile__individual-container resetFilter">
          <div className="individual__container">
            <div className="home__container">
              <PhotoItem photo={photo} />
              <Like photo={photo} user={user} handleLike={handleLike} />
            </div>
            {
              photo.comments && (
                <div className="individual__container-comment">
                  <h3 className="individual__container-comment__length">
                    Comentários: {photo.comments.length}</h3>
                  <form onSubmit={handleComment} className="form">
                    <textarea
                      placeholder="Insira seu comentário..."
                      className="form__textarea"
                      onChange={(e) => setCommentText(e.target.value)}
                      value={commentText || ""}
                    />
                    <button className="btn btn-secondary" type="submit">Enviar</button>
                  </form>
                  {photo.comments.length === 0 && <h5
                    className="individual__container-comment__no-comment">Não há comentários...</h5>}
                  {photo.comments.map((comment) => (
                    <div className="individual__container-comment__content">
                      <div className="individual__container-comment__content__author"
                        key={comment.comment}>
                        {comment.userImage && (
                          <img className="individual__container-comment__content__author__image"
                            src={`${uploads}/users/${comment.userImage}`}
                            alt={comment.userName}
                          />
                        )}
                        <Link to={`/users/${comment.userId}`} className="individual__container-comment__content__author__name">
                          {comment.userName}
                        </Link>
                      </div>
                      <span className="individual__container-comment__content__author__comment">
                        {comment.comment}
                      </span>
                    </div>
                  ))}
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div>
        {error && <MessageDanger msg={error} type="danger" />}
        {message && <MessageSuccess msg={message} type="sucess" />}
      </div>
    </section>
  )
}

export default Photo