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
    <div className="home__background">
      <main className="home" >

        <h1 className="home__title">UnsplashGram</h1>
        {photos &&
          photos.map((photo) => (
            <div key={photo._id} className="home__container">
              <PhotoItem photo={photo} />
              <Like photo={photo} user={user} handleLike={handleLike} />
              <Link to={`/photos/${photo._id}`}>
                Ver mais
              </Link>
            </div>
          ))}
        {photos && photos.length === 0 && (
          <h2 className="home__no-content">
            Ainda não há fotos publicadas
          </h2>
        )}
      </main >
    </div>
  )
}


export default Home