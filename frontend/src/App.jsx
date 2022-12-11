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
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {

  const { auth, loading } = useAuthorization()

  return (
    <>
      {loading ? <Loading /> : (
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={!auth ? <Home /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          <CreateGlobalStyle />
        </div>
      )}
    </>
  )
}

export default App
