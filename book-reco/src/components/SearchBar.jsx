import React from "react";
import useBookStore from "../store/useBookStore";


function SearchBar({ onSearch }) {

  const { query, setQuery } = useBookStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 justify-center mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="border-2 border-[#1e3a8a] rounded-md px-3 py-2 w-full sm:w-80 bg-[#f5f9ff] text-[#1e3a8a] text-xl"

      />
      <button onClick={onSearch} className="bg-[#1e3a8a] text-xl text-[#e5e5e5] px-4 py-2 hover:bg-[#304c9b] rounded-md " type="submit">Search</button>
    </form>
  );
}

export default SearchBar;