import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import React from "react";

function HomePage() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");   
  const [loading, setLoading] = useState(false); 
  const [filter, setFilter] = useState("all");

  const searchBooks = async () => {
    if (!query) return;

    setError("");   
    setLoading(true); 

    let searchQuery = query;
    if (filter === "title") searchQuery = `intitle:${query}`;
    if (filter === "author") searchQuery = `inauthor:${query}`;

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books. Please try again later.");
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        setError("No books found. Try another search.");
        setBooks([]);
      } else {
        setBooks(data.items);
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center mt-20">
      <h1 className="text-2xl mb-10">Your Go To Book Library</h1>

      <div className=" flex gap-3 mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-[#6b4f4f] px-2 py-1 rounded bg-inherit"
        >
          <option className="bg-inherit" value="all">All</option>
          <option className="bg-inherit" value="title">Title</option>
          <option className="bg-inherit" value="author">Author</option>
        </select>
      </div>

      <SearchBar query={query} setQuery={setQuery} onSearch={searchBooks} />

      {loading && <p className="text-2xl mt-4 text-black ">Loading...</p>}

      {error && <p className="text-2xl mt-4 text-black">{error}</p>}

      {!loading && !error && books.length > 0 ? (
        <BookList books={books} />
      ) : (
        !loading && !error && (
          <p className="text-2xl mt-3">Our Recommendations</p>
        )
      )}
    </div>
  );
}

export default HomePage;

