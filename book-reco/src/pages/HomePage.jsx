import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import React from "react";

function HomePage() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

    const searchBooks = async () => {
    if (!query) return;
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setBooks(data.items || []);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center mt-20">
      <h1 className="">Your Go To Book Library</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={searchBooks} />

      {books.length > 0 ? (
        <BookList books={books} />
      ) : (
        <p>Search for a book</p>
      )}
    </div>
  );
}

export default HomePage;
