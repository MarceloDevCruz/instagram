import { BsHeart, BsHeartFill } from 'react-icons/bs'

const Like = ({ photo, user, handleLike }) => {
  return (
    < >
      {photo.likes && user && (
        <>
          {photo.likes.includes(user._id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}
          <p>{photo.likes.length} like(s)</p>
        </>
      )}
    </>
  )
}

export default Like