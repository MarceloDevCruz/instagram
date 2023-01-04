import { BsHeart, BsHeartFill } from 'react-icons/bs'

const Like = ({ photo, user, handleLike }) => {
  return (
    < >
      {photo.likes && user && (
        <div className="card__like">
          {photo.likes.includes(user._id) ? (
            <BsHeartFill className="card__like-image card__like-image-liked" />
          ) : (
            <BsHeart onClick={() => handleLike(photo)}
              className="card__like-image card__like-image-unliked" />
          )}
          <p className="card__like-text">{photo.likes.length} like(s)</p>
        </div>
      )}
    </>
  )
}

export default Like