// Styled component
import { PhotoItemContainer } from './styled'

// utils
import { uploads } from '../../utils/config'

import { Link } from 'react-router-dom'

const PhotoItem = ({ photo }) => {

  return (
    <>
      <PhotoItemContainer>
        {photo.image && (
          <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
        )}
        <h2>{photo.title}</h2>
        <p>Por:
          <Link to={`/users/${photo.userId}`}>{` ${photo.userName}`}</Link>
        </p>
      </PhotoItemContainer>
    </>
  )
}

export default PhotoItem