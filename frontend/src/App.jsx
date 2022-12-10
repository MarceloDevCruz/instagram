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

function App() {

  const { auth, loading } = useAuthorization()

  return (
    <>
      {loading ? <Loading /> : (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={!auth ? <Home /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
          <CreateGlobalStyle />
        </div>
      )}
    </>
  )
}

export default App
