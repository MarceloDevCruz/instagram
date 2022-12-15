// Styled componets
import CreateGlobalStyle from './styles/GlobalStyles'

// Styles
import { Loading } from './styles/Loading'

// React router
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// hooks
import { useAuthorization } from './hooks/useAuthorization'

// Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import EditProfile from './pages/EditProfile/EditProfile'
import Profile from './pages/Profile/Profile'
import Photo from './pages/Photo/Photo'

// components
import NavBar from './components/navbar/NavBar'

function App() {

  const { auth, loading } = useAuthorization()

  return (
    <>
      {loading ? <Loading /> : (
        <div className="App">
          <BrowserRouter>
            {auth && <NavBar />}
            <Routes>
              <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
              <Route path="/login" element={!auth ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!auth ? <Register /> : <Navigate to="/" />} />
              <Route path="/profile" element={auth ? <EditProfile /> : <Navigate to="/login" />} />
              <Route path="/users/:id" element={auth ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/photos/:id" element={auth ? <Photo /> : <Navigate to="/login" />} />
            </Routes>
          </BrowserRouter>
          <CreateGlobalStyle />
        </div>
      )}
    </>
  )
}

export default App
