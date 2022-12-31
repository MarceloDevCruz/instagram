
// Components
import Like from '../../components/like/Like'
import PhotoItem from '../../components/photoItem/PhotoItem'
import { Link } from 'react-router-dom'

// hooks
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { getAllPosts, likePhoto } from '../../slices/photoSlice'

const Home = () => {

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { photos, loading } = useSelector((state) => state.photo)

  // Carregar fotos

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  const handleLike = (photo) => {
    dispatch(likePhoto(photo._id))
  }

  return (
    <div >
      {photos &&
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <Like photo={photo} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/photos/${photo._id}`}>
              Ver mais
            </Link>
          </div>
        ))}
      {photos && photos.length === 0 && (
        <h2 className="no-photos">
          Ainda não há fotos publicadas{" "}
        </h2>
      )}
    </div>
  );
};


export default Home