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
    <div className="div">
      <p>Você está buscando por: {search}</p>
      {photos && photos.map((photo) => (
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
          Não foi encontrado resultados
        </h2>
      )}
    </div>
  )
}

export default Search