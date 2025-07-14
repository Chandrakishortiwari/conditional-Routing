import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Login from './pages/Login'
import Prime from './pages/Prime'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <>
  
      <Navbar />
      <Routes>
        <Route path="/" element={  <Home /> } />
        
        <Route path="/about" element={ <ProtectedRoute><About /></ProtectedRoute> } />
        <Route path="/contact" element={  <ProtectedRoute> <Contect /> </ProtectedRoute> } />
        <Route path="/login" element={<Login />} />
        <Route path="/prime" element={ <ProtectedRoute> <Prime /></ProtectedRoute> } />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
  
    
    </>
  )
}

export default App