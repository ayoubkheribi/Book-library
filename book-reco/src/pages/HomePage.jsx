import React from 'react'
import { useState } from 'react';
import SearchBar from '../components/SearchBar';


const HomePage = () => {
  const [books, setBooks] = useState([]);
  
  function fetchBooks(query) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => response.json())
      .then(data => setBooks(data.items || []))
      .catch(error => console.error('Error fetching books:', error));
  }

  return (
    <div>
      <SearchBar onSearch={fetchBooks} />
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
            <p>{book.volumeInfo.publishedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;