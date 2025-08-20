import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import BookDetailsPage from './pages/BookDetailsPage'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar'
import MobileMenu from './components/MobileMenu'
import About from './pages/About'

function App() {

    const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/book/:id' element={<BookDetailsPage />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
