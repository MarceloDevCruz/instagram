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
import Search from './components/search/Search'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  const { auth, loading } = useAuthorization()

  return (
    <>
      {loading ? '<Loading />' : (
        <div className="App">
          <BrowserRouter>
            {auth ? <NavBar /> : <Header />}
            <Routes>
              <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
              <Route path="/login" element={!auth ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!auth ? <Register /> : <Navigate to="/" />} />
              <Route path="/search" element={!auth ? <Search /> : <Search to="/login" />} />
              <Route path="/profile" element={auth ? <EditProfile /> : <Navigate to="/login" />} />
              <Route path="/users/:id" element={auth ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/photos/:id" element={auth ? <Photo /> : <Navigate to="/login" />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  )
}

export default App
