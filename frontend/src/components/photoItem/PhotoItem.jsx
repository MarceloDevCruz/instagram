// utils
import { uploads } from '../../utils/config'

import { Link } from 'react-router-dom'

const PhotoItem = ({ photo }) => {

  return (
    <>
      {photo.image && (
        <div className="card__photo-container">
          <img src={`${uploads}/photos/${photo.image}`} alt={photo.title}
            className="card__photo" />
        </div>
      )}
      <h2 className="card__title">{photo.title}</h2>
      <p className="card__like-text">Por :
        <Link to={`/users/${photo.userId}`} className="card__createdBy"
        >{` ${photo.userName}`}</Link>
      </p>
    </>
  )
}

export default PhotoItem