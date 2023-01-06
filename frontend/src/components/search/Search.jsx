// hooks
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '../../hooks/useQuery'

// components
import Like from '../like/Like'
import PhotoItem from '../photoItem/PhotoItem'
import { Link } from 'react-router-dom'

//redux
import { logout, reset } from '../../slices/authSlice'
import { searchPost } from '../../slices/photoSlice'

const Search = () => {

  const query = useQuery()
  const search = query.get('q')

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { photos } = useSelector(state => state.photo)

  useEffect(() => {
    dispatch(searchPost(search))
  }, [dispatch, search])

  const handleLike = (photo) => {
    dispatch(likePhoto(photo._id))
  }

  return (
    <div className="background">
      <div className="home" >
        <h1 className="home__title">UnsplashGram</h1>
        <h6 className="home__search-content">Você está buscando por: {search}</h6>
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
            Não foram encontrados resultados para pesquisa...
          </h2>
        )}
      </div >
    </div>
  )
}

export default Search