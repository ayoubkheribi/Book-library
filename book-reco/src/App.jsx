import './App.css'
import { Routes, Route } from 'react-router-dom'
import BookDetailsPage from './pages/BookDetailsPage'
import HomePage from './pages/HomePage'

function App() {
  
  return (
    <div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/book/:id' element={<BookDetailsPage />} />
      </Routes>

    </div>
  )
}

export default App
