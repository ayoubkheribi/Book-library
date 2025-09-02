import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import useBookStore, { useRecommendations } from "../store/useBookStore";
import axios from "axios";
import BookCard from "../components/BookCard";

function HomePage() {
  const {
    query, setQuery,
    books, setBooks,
    error, setError,
    loading, setLoading,
    filter, setFilter,
    recommendations
  } = useBookStore();

  // Load recommendations via hook
  useRecommendations();

  const categories = ["Fiction", "Non-Fiction", "Science", "History"];

  const searchBooks = async () => {
    if (!query) return;

    setError("");   
    setLoading(true); 

    let searchQuery = query;
    if (filter === "title") searchQuery = `intitle:${query}`;
    if (filter === "author") searchQuery = `inauthor:${query}`;

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );

      const data = response.data;

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

  const searchByCategory = async (category) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${category}`
      );
      const data = response.data;
      setBooks(data.items || []);
      setError(null);
    } catch (err) {
      setError("Failed to load category books.");
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center mt-20">
      <h1 className="text-3xl mb-10">Your Go To Book Library</h1>

      {/* Filter */}
      <div className=" flex gap-3 mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border-2 border-[#6b4f4f] px-2 py-1 rounded bg-inherit hover:bg-[#d8ccab]"
        >
          <option value="all">All</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
      </div>

      {/* Categories */}
      <div className="flex gap-4 my-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => searchByCategory(cat)}
            className="px-4 py-2 border-2 border-[#6b4f4f] rounded hover:bg-[#d8ccab]"
          >
            {cat}
          </button>
        ))}
      </div>

      <SearchBar onSearch={searchBooks} />

      {loading && <p className="text-2xl mt-4 text-black ">Loading...</p>}

      {error && <p className="text-2xl mt-4 text-[#dc0000]">{error}</p>}

      {!loading && !error && books.length > 0 ? (
        <BookList />
      ) : (
        !loading &&
        !error && (
          <>
            <p className="text-2xl mt-3">
              Search Your First Book With Book<span className="text-[#89481c]">.Reco</span>
            </p>

            {/* 🔥 Recommended Books */}
            {recommendations.length > 0 && (
              <div className="mt-10 w-full flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-4 ">Recommended for You</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {recommendations.slice(0, 6).map((book) => (
                    <BookCard
                      key={book.id}
                      id={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                      publisher={book.volumeInfo.publisher}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )
      )}
    </div>
  );
}

export default HomePage;
