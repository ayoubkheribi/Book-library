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
        className="border-2 border-[#6b4f4f] rounded-md px-3 py-2 w-full sm:w-80 bg-[#fff8dc] text-[#3b2f2f] text-xl"

      />
      <button onClick={onSearch} className="bg-[#8b0000] text-xl text-white px-4 py-2 rounded-md hover:bg-[#a52a2a]" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;