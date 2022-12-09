// Styled componets
import CreateGlobalStyle from './styles/GlobalStyles'

// React router
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <CreateGlobalStyle />
    </div>
  )
}

export default App
